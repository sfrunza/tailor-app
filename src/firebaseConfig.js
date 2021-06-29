// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import axios from "axios";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyD8kaW7t7JOWBaBziG8AWvs8_YQwN_jzUA",
  authDomain: "tailormade-c00e1.firebaseapp.com",
  projectId: "tailormade-c00e1",
  storageBucket: "tailormade-c00e1.appspot.com",
  messagingSenderId: "823336005326",
  appId: "1:823336005326:web:c4ce20911f3e9d31016a9f",
  measurementId: "G-7TXDXNVWYD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
// const analytics = firebase.analytics();

export { auth, firestore, storage, axios };
