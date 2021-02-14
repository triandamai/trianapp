const key = "b4c4a77486fd102b61461320fd";
const keyUser = "e106f9e250786a12e87efc8";
export const setTheme = (theme: any) =>
  window.sessionStorage.setItem(key, theme);
export const getTheme = () => window.sessionStorage.getItem(key);

export const setUser = (payload: any) =>
  window.sessionStorage.setItem(keyUser, payload);
export const getUser = () => window.sessionStorage.getItem(keyUser);
