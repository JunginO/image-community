import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7hokPBzGj009RaUXQmzJm1PmkYlprNhg",
  authDomain: "image-community-625ac.firebaseapp.com",
  projectId: "image-community-625ac",
  storageBucket: "image-community-625ac.appspot.com",
  messagingSenderId: "826810860498",
  appId: "1:826810860498:web:ee08f88362908eb8533e0b",
  measurementId: "G-SRM57TLKMG",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };
