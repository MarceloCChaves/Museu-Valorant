import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDllI0o5cF0WgdJjZ-n1ldPsOO9LSfoICM",
  authDomain: "valorantlogin-8f829.firebaseapp.com",
  projectId: "valorantlogin-8f829",
  storageBucket: "valorantlogin-8f829.appspot.com",
  messagingSenderId: "339238783287",
  appId: "1:339238783287:web:df9222c8f1c880010232b2"
};

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

export {firebase, app, auth}