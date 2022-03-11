import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQeF_n_IxaTkdWEmaQOnBz7FS0rQeRt80",
    authDomain: "waitingtime-755db.firebaseapp.com",
    projectId: "waitingtime-755db",
    storageBucket: "waitingtime-755db.appspot.com",
    messagingSenderId: "374533871082",
    appId: "1:374533871082:web:10a82bf1b5db4680270e93",
    measurementId: "G-WE69DVMJ4X",
};
// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();

export const auth = getAuth();

export const storage = getStorage()
