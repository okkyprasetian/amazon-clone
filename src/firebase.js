import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh9hgXn7jtXkZqU8L5zXC9hysZwXE4QHE",
    authDomain: "clone-1552d.firebaseapp.com",
    projectId: "clone-1552d",
    storageBucket: "clone-1552d.appspot.com",
    messagingSenderId: "573276173446",
    appId: "1:573276173446:web:8d456322d7bcb7de784d07",
    measurementId: "G-WHYPHL81GR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}