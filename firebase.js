import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQ8LGT0d8kpF4vPeTpTs-otEca688J8P8",
  authDomain: "testerforall-9ea12.firebaseapp.com",
  projectId: "testerforall-9ea12",
  storageBucket: "testerforall-9ea12.firebasestorage.app",
  messagingSenderId: "434915664367",
  appId: "1:434915664367:web:33ff6446c1febdebbe961a",
  measurementId: "G-S56N08LS6F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
