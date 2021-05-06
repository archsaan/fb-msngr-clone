import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqXj6v1l5m5yBUdoSsef1RODpMeTIbcKQ",
  authDomain: "fb-msngr-clone-88bb7.firebaseapp.com",
  projectId: "fb-msngr-clone-88bb7",
  storageBucket: "fb-msngr-clone-88bb7.appspot.com",
  messagingSenderId: "758648765519",
  appId: "1:758648765519:web:8966e4bd13183b245afe3a",
});

const db = firebaseApp.firestore();
export default db;
