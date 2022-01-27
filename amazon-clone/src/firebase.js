import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3frWAritb7saLX_s4w5yOKUiB56dtwsg",
    authDomain: "clone-fbaf4.firebaseapp.com",
    projectId: "clone-fbaf4",
    storageBucket: "clone-fbaf4.appspot.com",
    messagingSenderId: "561011773248",
    appId: "1:561011773248:web:33ad2fdcdc64f6985674a5",
    measurementId: "G-046XHCH44F"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db, auth };
