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
      .then(user => {
        if (user.user?.uid)
          setUser(
            {
              username: authState.form.username,
              email: authState.form.email,
              password: authState.form.password,
              uuid: user.user.uid,
              createdAt: Date.now().toLocaleString(),
              updatedAt: Date.now().toLocaleString(),
              authMethod: "basic"
            },
            true
          );
        else
          authState.result = {
            status: false,
            message: "gagal"
          };
      })
      .catch(e => {
        authState.result = { status: false, message: `${e}` };
      })
      .finally(() => {
        authState.isLoading = false;
      });
  };
  const resultFromredirectGoogle = (isLogin: boolean) => {
    authState.isLoading = true;
    AuthGoogle.getRedirectResult()
      .then(result => {
        if (result.user)
          if (isLogin) changelastLogin(`${result.user?.uid}`);
          else
            setUser(
              {
                username: `${result.user?.displayName}`,
                email: `${result.user?.email}`,
                password: `${result.user?.uid}`,
                createdAt: Date.now().toLocaleString(),
                updatedAt: Date.now().toLocaleString(),
                authMethod: "google",
                uuid: result.user?.uid
              },
              false
            );
        else authState.result = { status: false, message: "Gagal" };
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

  const setUser = (user: User, shouldLogin: boolean) => {
    dbUser
      .doc(user.uuid)
      .set(user)
      .then(() => {
        router.push({ path: "/dashboard" });
      });
  };

  const changelastLogin = (uuid: string) => {
    dbUser
      .doc(uuid)
      .set({ updatedAt: Date.now().toLocaleString() })
      .then(() => {
        router.push({ path: "/dashboard" });
      });
  };

  return {
    authState,
    loginBasic,
    loginWithGoogle,
    registerBasic,
    resultFromredirectGoogle
  };
};
