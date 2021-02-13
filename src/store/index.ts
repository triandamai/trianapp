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
  state: reactive({
    theme: "",
    tutorial: [],
    article: []
  }),
  getters: {
    getTheme: state => state.theme
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
    [DocumentActionTypes.POST_ARTICLE](
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
    [DocumentActionTypes.GET_ARTICLE]({ commit }) {
      return new Promise(resolve => {
        dbTutorial
          .get()
          .then(doc => {
            console.log(doc.size);
            doc.forEach(snapshot => {
              console.log(snapshot.id);
              console.log(snapshot.data());
            });
          })
          .catch(err => {
            console.log(err);
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
      console.log("add", payload);
    },
    [DocumentMutationTypes.REMOVE_TUTORIAL](state, payload) {
      console.log("remove", payload);
    }
  }
});

export function useStore() {
  return baseUseStore(key);
}
