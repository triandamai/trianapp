import { usePreferredDark } from "@vueuse/core";
import { reactive } from "vue";
export interface ITheme {
  theme: "light" | "dark";
}
const theme = reactive<ITheme>({ theme: "light" });
export function useTheme() {
  function initTheme() {
    const cachedTheme = localStorage.theme ? localStorage.theme : false;
    const userprefered = usePreferredDark();
    if (cachedTheme) theme.theme = "dark";
    else if (userprefered) theme.theme = "dark";
    else theme.theme = "light";
  }
  function toggleTheme() {
    console.log(theme.theme);
    localStorage.theme = localStorage.theme ? false : true;
    theme.theme = theme.theme == "light" ? "dark" : "light";
    // initTheme();
  }

  return { theme, initTheme, toggleTheme };
}
