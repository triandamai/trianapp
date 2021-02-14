import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOo-s1-i_BcxU4EobnITuFW92wUVxWt2Q",
  authDomain: "myproject-64aac.firebaseapp.com",
  databaseURL: "https://myproject-64aac.firebaseio.com",
  projectId: "myproject-64aac",
  storageBucket: "myproject-64aac.appspot.com",
  messagingSenderId: "264573731963",
  appId: "1:264573731963:web:075d35555653394abe4ede",
  measurementId: "G-RSRMRG3DYL"
});
export const dbArticle = firebaseApp.firestore().collection("article");
export const dbTutorial = firebaseApp.firestore().collection("tutorial");
export const dbUser = firebaseApp.firestore().collection("user");

export const AuthGoogle = firebase.auth();
