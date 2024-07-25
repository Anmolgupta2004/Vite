// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getfirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDry_ljlSZ4Zx-Wc2BdIV5CRAzt9Vw7NTQ",
  authDomain: "todo-list-b0b2d.firebaseapp.com",
  projectId: "todo-list-b0b2d",
  storageBucket: "todo-list-b0b2d.appspot.com",
  messagingSenderId: "283990920537",
  appId: "1:283990920537:web:173940423bc22a2ba25048"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  export const db=getfirestore(app);