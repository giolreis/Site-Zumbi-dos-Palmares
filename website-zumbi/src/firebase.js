// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
//import {getStorage} from 

const firebaseConfig = {
  apiKey: "AIzaSyBEthKcMrJPTx8kiosUJatfNfZYhZldRng",
  authDomain: "premiozumbicampinas.firebaseapp.com",
  projectId: "premiozumbicampinas",
  storageBucket: "premiozumbicampinas.appspot.com",
  messagingSenderId: "941182213257",
  appId: "1:941182213257:web:0603334a943de98aaffa58",
  measurementId: "G-CR499895H7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const storage = getStorage(app);
//const db = getFirestore(app);
export { auth };