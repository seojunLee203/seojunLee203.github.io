// firebase-config.js
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
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
