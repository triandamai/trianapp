/*eslint-disable*/
import { reactive } from "vue";
import { AuthGoogle, dbUser } from "@/store/firbaseDatabase";
import firebase from "firebase/app";
import { User } from "./module/model-types";
import { useRouter } from "vue-router";

interface authState {
  result: authResult;
  isLoading: boolean;
  form: {
    email: string;
    password: string;
    username: string;
    repassword: string;
  };
}
interface authResult {
  status: boolean;
  message: string;
}

const authState = reactive<authState>({
  result: {
    status: false,
    message: ""
  },
  isLoading: false,
  form: {
    email: "",
    username: "",
    password: "",
    repassword: ""
  }
});
export const useAuth = () => {
  const router = useRouter();
  /**
   * login
   */
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    AuthGoogle.signInWithRedirect(provider);
  };

  const loginBasic = () => {
    authState.isLoading = true;
    AuthGoogle.signInWithEmailAndPassword(
      authState.form.email,
      authState.form.password
    )
      .then(user => {
        if (user.user?.uid) changelastLogin(`${user.user.uid}`);
        else
          authState.result = {
            status: false,
            message: "Gagal"
          };
      })
      .catch(e => {
        authState.result = {
          status: false,
          message: `${e}`
        };
      })
      .finally(() => {
        authState.isLoading = false;
      });
  };
  /**
   * register
   */
  const registerBasic = () => {
    authState.isLoading = true;
    if (authState.form.password != authState.form.repassword) return;
    if (authState.form.email == null && authState.form.username == null) return;

    AuthGoogle.createUserWithEmailAndPassword(
      authState.form.email,
      authState.form.password
    )
      .then(user => {})
      .catch(e => {})
      .finally(() => {});
  };
  const resultFromredirectGoogle = (isLogin: boolean) => {
    AuthGoogle.getRedirectResult()
      .then(result => {
        if (result.user)
          if (isLogin) changelastLogin(`${result.user?.uid}`);
          else
            setUser({
              username: `${result.user?.displayName}`,
              email: `${result.user?.email}`,
              password: `${result.user?.uid}`,
              createdAt: Date.now().toLocaleString(),
              updatedAt: Date.now().toLocaleString(),
              authMethod: "google",
              uuid: result.user?.uid
            });
        else authState.status = false;
      })
      .catch(e => {
        authState.status = false;
      });
  };

  const setUser = (user: User) => {
    dbUser
      .doc(user.uuid)
      .set(user)
      .then(result => {
        router.push({ path: "/dashboard" });
      })
      .catch(e => {});
  };

  const changelastLogin = (uuid: string) => {
    dbUser
      .doc(uuid)
      .set({ updatedAt: Date.now().toLocaleString() })
      .then(result => {
        router.push({ path: "/dashboard" });
      })
      .catch(e => {});
  };

  return {
    authState,
    loginBasic,
    loginWithGoogle,
    registerBasic,
    resultFromredirectGoogle
  };
};
