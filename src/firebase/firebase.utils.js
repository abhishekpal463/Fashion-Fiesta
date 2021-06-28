import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB0QQUWyUPVj2cvM98V12qIdIkJNGrxApw",
    authDomain: "fashion-fiesta-5c723.firebaseapp.com",
    projectId: "fashion-fiesta-5c723",
    storageBucket: "fashion-fiesta-5c723.appspot.com",
    messagingSenderId: "483975046643",
    appId: "1:483975046643:web:42a444a356534b070fde86",
    measurementId: "G-G4H7CDJYXR"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt:"select_account"});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;