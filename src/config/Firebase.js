import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// Initialize Firebase
export const config = {
  apiKey: "AIzaSyCLwUV0R2XJTSnK76-nl4jS5SzCreVUyTU",
  authDomain: "malhagiesp.firebaseapp.com",
  databaseURL: "https://malhagiesp.firebaseio.com",
  projectId: "malhagiesp",
  storageBucket: "malhagiesp.appspot.com",
  messagingSenderId: "135818188762"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
