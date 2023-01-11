import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ9Yke9bxnMDYhE7bOPPX3yWAb9l-lil4",
  authDomain: "signal-clone-yt-build-6771f.firebaseapp.com",
  projectId: "signal-clone-yt-build-6771f",
  storageBucket: "signal-clone-yt-build-6771f.appspot.com",
  messagingSenderId: "21316996510",
  appId: "1:21316996510:web:e35caa6b144ec483495a8f",
};

let app;

if (firebase.apps.lenght === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
