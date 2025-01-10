// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfgIompTwM8HOGJtEZCVivP3bakNCDbpQ",
    authDomain: "cyber-trail.firebaseapp.com",
    projectId: "cyber-trail",
    storageBucket: "cyber-trail.appspot.com",
    messagingSenderId: "10375411657",
    appId: "1:10375411657:web:755e620278b4fd68ad5a18",
    measurementId: "G-J9Y3TQMH5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
