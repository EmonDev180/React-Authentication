// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDeFfy06COK05e7WdeUQ2jKDpo4UzAnuE",
  authDomain: "auth-moha-milon-c4933.firebaseapp.com",
  projectId: "auth-moha-milon-c4933",
  storageBucket: "auth-moha-milon-c4933.appspot.com",
  messagingSenderId: "829305687840",
  appId: "1:829305687840:web:30320bc150576746385145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
