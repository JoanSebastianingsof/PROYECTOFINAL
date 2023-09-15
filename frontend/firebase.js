// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHorb0s1eiFOhyE0VQNy7fnxcYd8Pepfk",
  authDomain: "proyecto-app-moviles-1647f.firebaseapp.com",
  projectId: "proyecto-app-moviles-1647f",
  storageBucket: "proyecto-app-moviles-1647f.appspot.com",
  messagingSenderId: "983312432292",
  appId: "1:983312432292:web:4bb63706e2cb7e8190fa31",
  measurementId: "G-DY405B2K7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const auth = getAuth(app);

const db = getFirestore();

export {auth,db};