import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqnunAj2VBwMrd7hyzpqRnc2BH7dfvIC0",
    authDomain: "webcalorietracker.firebaseapp.com",
    projectId: "webcalorietracker",
    storageBucket: "webcalorietracker.firebasestorage.app",
    messagingSenderId: "323156535694",
    appId: "1:323156535694:web:ed7c5db0c82cf82e0d1cdf",
    measurementId: "G-8RNDT8PY4E"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default {app,auth};