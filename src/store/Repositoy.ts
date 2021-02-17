/*eslint-disable*/
import { reactive } from "vue";
import { AuthGoogle, dbUser } from "@/store/firbaseDatabase";
import firebase from "firebase/app";
import { User } from "./module/model-types";
import { useRouter } from "vue-router";

interface authState {
  status: boolean;
  currentUser: any;
  isLoading: boolean;
  form: {
    email: string;
    password: string;
    username: string;
    repassword: string;
  };
  payloadform: User;
}

const authState = reactive<authState>({
  status: false,
  currentUser: null,
  isLoading: false,
  form: {
    email: "",
    username: "",
    password: "",
    repassword: ""
  },
  payloadform: {
    username: "",
    email: "",
    password: "",
    uuid: "",
    authMethod: "basic",
    createdAt: Date.now().toLocaleString(),
    updatedAt: Date.now().toLocaleString()
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
    AuthGoogle.signInWithEmailAndPassword(
      authState.form.email,
      authState.form.password
    )
      .then(user => {})
      .catch(e => {});
  };
  /**
   * register
   */
  const registerBasic = () => {
    if (authState.form.password != authState.form.repassword) return;
    if (authState.form.email == null && authState.form.username == null) return;

    AuthGoogle.createUserWithEmailAndPassword(
      authState.form.email,
      authState.form.password
    )
      .then(user => {})
      .catch(e => {});
  };
  const resultFromredirectGoogle = (isLogin: boolean) => {
    AuthGoogle.getRedirectResult()
      .then(result => {
        if (isLogin) changelastLogin();
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
      })
      .catch(e => {});
  };

  const setUser = (user: User) => {
    dbUser
      .doc(authState.payloadform.uuid)
      .set(user)
      .then(result => {
        router.push({ path: "/dashboard" });
      })
      .catch(e => {});
  };

  const changelastLogin = () => {
    dbUser
      .doc(authState.payloadform.uuid)
      .set({ updatedAt: Date.now().toLocaleString() })
      .then(result => {
        router.push({ path: "/dashboard" });
      })
      .catch(e => {});
  };

  return { authState, loginBasic, loginWithGoogle, resultFromredirectGoogle };
};
