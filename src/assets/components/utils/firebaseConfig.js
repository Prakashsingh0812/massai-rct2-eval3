import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfXP4V4G54BDa-8TuM1IFvwz-_FXMChxI",
    authDomain: "massai-rct2-eval3.firebaseapp.com",
    projectId: "massai-rct2-eval3",
    storageBucket: "massai-rct2-eval3.appspot.com",
    messagingSenderId: "344607609164",
    appId: "1:344607609164:web:e24218dd2c3d1e9943ffe9"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const googleProvider = new GoogleAuthProvider();
  