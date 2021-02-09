import { createStore } from "vuex";

import {
  store as theme,
  ThemeStore,
  State as ThemeState
} from "./module/theme.module";
export type RootState = {
  theme: ThemeState;
};

export type Store = ThemeStore<Pick<RootState, "theme">>;

export const store = createStore({
  modules: {
    theme
  }
});

export function useStore(): Store {
  return store as Store;
}
