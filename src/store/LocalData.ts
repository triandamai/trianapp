const key = "fglmnpo";
export const setTheme = (theme: any) =>
  window.sessionStorage.setItem(key, theme);
export const getTheme = () => window.sessionStorage.getItem(key);
