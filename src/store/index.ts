import { InjectionKey, reactive } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import {
  DocumentActionTypes,
  ThemeActionTypes
} from "@/store/module/action-types";
import {
  ThemeMutationTypes,
  DocumentMutationTypes
} from "@/store/module/mutation-types";
import { getTheme, setTheme } from "@/store/LocalData";
import { DataContent, Content } from "@/store/module/model-types";
import { dbTutorial } from "@/store/firbaseDatabase";

export interface AppState {
  theme: any;
  tutorial: Array<DataContent>;
  article: Array<DataContent>;
}

export const key: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore<AppState>({
  state: {
    theme: "",
    tutorial: [],
    article: []
  },
  getters: {
    getTheme: state => state.theme,
    getTutorialById: state => (id: any) => {
      return state.tutorial.find(tutorial => tutorial.id === id);
    }
  },
  actions: {
    [ThemeActionTypes.INIT_THEME]({ state, commit }, payload) {
      const cached = getTheme() ? getTheme() : false;
      const usePrefersDark = window.matchMedia("(prefers-color-scheme:dark)")
        .matches;
      if (payload) {
        commit(ThemeMutationTypes.SET_THEME, payload);
      } else {
        if (cached) {
          commit(ThemeMutationTypes.SET_THEME, cached);
        } else if (usePrefersDark) {
          commit(ThemeMutationTypes.SET_THEME, "dark");
        } else {
          commit(ThemeMutationTypes.SET_THEME, "light");
        }
      }
    },
    [DocumentActionTypes.POST_TUTORIAL](
      { commit },
      payload: {
        id: string;
        slug: string;
        title: string;
        content: Array<Content>;
        createdAt: Date;
        updateAt: Date;
      }
    ) {
      return new Promise(resolve => {
        dbTutorial
          .doc(payload.slug)
          .set(payload)
          .then(res => {
            resolve({ success: true, payload: res, message: "success" });
          })
          .catch(e => {
            resolve({ success: true, payload: e, message: "success" });
          });
      });
    },
    [DocumentActionTypes.GET_TUTORIAL]({ commit }) {
      return new Promise(resolve => {
        dbTutorial
          .get()
          .then(doc => {
            console.log(doc.size);
            doc.forEach(snapshot => {
              if (snapshot.exists) {
                commit(DocumentMutationTypes.ADD_TUTORIAL, snapshot.data());
                resolve({
                  success: true,
                  message: "exist",
                  payload: snapshot.metadata
                });
              } else {
                resolve({
                  success: false,
                  message: "not found",
                  payload: null
                });
              }
            });
          })
          .catch(err => {
            resolve({ success: false, message: "error", payload: err });
          });
      });
    },
    [DocumentActionTypes.GET_TUTORIAL_BY_ID]({ commit }, id) {
      return new Promise(resolve => {
        dbTutorial
          .doc(id)
          .get()
          .then(snapshot => {
            if (snapshot.exists) {
              commit(DocumentMutationTypes.ADD_TUTORIAL, snapshot.data());
              resolve({ success: true, message: "dataexist", payload: null });
            } else {
              resolve({ success: false, message: "notfound", payload: null });
            }
          })
          .catch(e => {
            resolve({ success: false, message: "error", payload: e });
          });
      });
    }
  },

  mutations: {
    [ThemeMutationTypes.SET_THEME](state, payload) {
      state.theme = payload;
      setTheme(payload);
    },
    [DocumentMutationTypes.ADD_TUTORIAL](state, payload) {
      const exist = state.tutorial.some(item => {
        return item.id == payload.id;
      });
      if (!exist) {
        state.tutorial.push(payload);
      } else {
        const index = state.tutorial
          .map(tutorial => tutorial.id)
          .indexOf(payload.id);
        Object.assign(state.tutorial[index], payload);
      }
    },
    [DocumentMutationTypes.CHANGE_TUTORIAL](state, payload) {
      const index = state.tutorial
        .map(tutorial => tutorial.id)
        .indexOf(payload.id);
      Object.assign(state.tutorial[index], payload);
    },
    [DocumentMutationTypes.REMOVE_TUTORIAL](state, payload) {
      const index = state.tutorial
        .map(tutorial => tutorial.id)
        .indexOf(payload.id);
      state.tutorial.splice(index);
    }
  }
});

export function useStore() {
  return baseUseStore(key);
}
