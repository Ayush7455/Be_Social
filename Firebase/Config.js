import firebase from "firebase/compat/app";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAViQoatb2JBP7XbVrQcZbjY7rJJphxAfY",
  authDomain: "besocial-58ef5.firebaseapp.com",
  projectId: "besocial-58ef5",
  storageBucket: "besocial-58ef5.appspot.com",
  messagingSenderId: "1005645898845",
  appId: "1:1005645898845:web:93be2e286d840c5cc759b4"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase}

