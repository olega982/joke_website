// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLxXOnykk9bjqANTiFoBm6kqPi5HMIOo8",
  authDomain: "react-training-ca974.firebaseapp.com",
  databaseURL: "https://react-training-ca974-default-rtdb.firebaseio.com",
  projectId: "react-training-ca974",
  storageBucket: "react-training-ca974.appspot.com",
  messagingSenderId: "52777188775",
  appId: "1:52777188775:web:98344d38aafd27f84b0a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)