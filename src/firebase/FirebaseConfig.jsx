import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmzLH3tCmFyjRF1ZlbVms6Gyye7rnfbB0",
  authDomain: "webshop-c73c1.firebaseapp.com",
  projectId: "webshop-c73c1",
  storageBucket: "webshop-c73c1.appspot.com",
  messagingSenderId: "691047147379",
  appId: "1:691047147379:web:c26a506c390fd0b16f0706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;