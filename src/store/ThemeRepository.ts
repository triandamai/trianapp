import { reactive } from "vue";
import { getTheme, setTheme } from "@/store/LocalData";
const theme = reactive({ theme: false });
export function useTheme() {
  function changeTheme(val?: boolean) {
    const cached = getTheme() ? getTheme() : false;
    const usePrefersDark = window.matchMedia("(prefers-color-scheme:dark)")
      .matches;
    if (val != null) {
      setTheme(val);
      theme.theme = val;
    } else {
      if (cached) {
        setTheme(cached);
        theme.theme = cached;
      } else if (usePrefersDark) {
        setTheme(true);
        theme.theme = true;
      } else {
        setTheme(false);
        theme.theme = false;
      }
    }
  }

  return {
    theme,
    changeTheme
  };
}
