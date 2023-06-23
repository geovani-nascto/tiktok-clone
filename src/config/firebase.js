import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC4TJe4407GC-WV9W-HOnLkqLtKfWKIHdo",
  authDomain: "tiktok-4fbac.firebaseapp.com",
  projectId: "tiktok-4fbac",
  storageBucket: "tiktok-4fbac.appspot.com",
  messagingSenderId: "65234117262",
  appId: "1:65234117262:web:86fbb4c71c5ceff7a21fdf",
  //measurementId: "G-7LQCSZDRYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;