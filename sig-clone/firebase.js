import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe4OAjVwMsKNi-Yq8ilUT3G1p8WVzWNOY",
  authDomain: "signal-clone-34612.firebaseapp.com",
  projectId: "signal-clone-34612",
  storageBucket: "signal-clone-34612.appspot.com",
  messagingSenderId: "1029421039841",
  appId: "1:1029421039841:web:423f263316c8eddc01b7a0",
};

let app;

if (firebase.apps.length === 0) {
  //app = firebaseApp = firebase.initializeApp(firebaseConfig);
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
