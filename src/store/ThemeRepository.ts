import { ref } from "vue";
import { getTheme, setTheme } from "@/store/LocalData";
const theme = ref("");
export const usetheme = () => {
  const setTheme = (val: string) => {
    const cached = getTheme() ? getTheme() : false;
    const usePrefersDark = window.matchMedia("(prefers-color-scheme:dark)")
      .matches;
    if (val) {
      theme.value = val;
      setTheme(val);
    } else {
      if (cached) {
        theme.value = cached;
        setTheme(cached);
      } else if (usePrefersDark) {
        theme.value = "dark";
        setTheme("dark");
      } else {
        theme.value = "light";
        setTheme("light");
      }
    }
    initTheme();
  };
  const initTheme = () => {
    document.querySelector("html")?.classList.remove("light");
    document.querySelector("html")?.classList.remove("dark");
    document.querySelector("html")?.classList.add(theme.value);
  };
  return {
    theme,
    setTheme
  };
};
