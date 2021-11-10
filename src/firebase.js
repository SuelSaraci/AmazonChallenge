import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyByjYA7uSUIaMYm8iG_tA5spSoBegEgXso",
  authDomain: "challenge-83993.firebaseapp.com",
  projectId: "challenge-83993",
  storageBucket: "challenge-83993.appspot.com",
  messagingSenderId: "790660000298",
  appId: "1:790660000298:web:3c390177d51eee35773153",
  measurementId: "G-MX35NR9RND"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;






