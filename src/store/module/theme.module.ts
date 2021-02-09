import {
  ActionTree,
  GetterTree,
  MutationTree,
  Store as VuexStore,
  DispatchOptions,
  CommitOptions,
  Module,
  ActionContext
} from "vuex";
import { ThemeActionTypes } from "./action-type";
import { ThemeMutationTypes as MutationTypes } from "./mutation-types";
import { getTheme, setTheme } from "../LocalData";
import { RootState } from "../index";
//builder
type ThemeActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export type State = {
  theme: string;
};
export interface Actions {
  [ThemeActionTypes.INIT_THEME](
    { commit }: ThemeActionContext,
    theme: string
  ): Promise<boolean>;
}
export type Mutations<S = State> = {
  [MutationTypes.SET_THEME](state: S, payload: string): void;
};
export type Getters = {
  theme(state: State): string;
};
//module begin
const state: State = {
  theme: ""
};
const getters: GetterTree<State, RootState> & Getters = {
  theme: state => state.theme
};
const actions: ActionTree<State, RootState> & Actions = {
  [ThemeActionTypes.INIT_THEME]({ commit }, theme: string) {
    return new Promise(() => {
      const cached = getTheme() ? getTheme() : false;
      const usePrefersDark = window.matchMedia("(prefers-color-scheme:dark)")
        .matches;
      if (cached) commit(MutationTypes.SET_THEME, cached);
      else if (usePrefersDark) commit(MutationTypes.SET_THEME, "dark");
      else commit(MutationTypes.SET_THEME, "light");
    });
  }
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_THEME](state: State, payload: string) {
    state.theme = state.theme == "light" ? "dark" : "light";
    setTheme(payload);
  }
};

export type ThemeStore<S = State> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: false
};
