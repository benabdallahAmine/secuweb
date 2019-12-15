import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBR5WL_jbNSxb8yvIQYNRENq_E0m25CY2s",
    authDomain: "global-virtual-office.firebaseapp.com",
    databaseURL: "https://global-virtual-office.firebaseio.com",
    projectId: "global-virtual-office",
    storageBucket: "global-virtual-office.appspot.com",
    messagingSenderId: "",
    appId: "app-id",
    measurementId: "G-measurement-id",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//separting database API and authentication
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, facebookProvider };

