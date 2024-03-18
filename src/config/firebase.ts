// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC7lXO-Nsu1X57houfEKsn5VdNtuXLr56I",
    authDomain: "default-python.firebaseapp.com",
    databaseURL: "https://default-python-default-rtdb.firebaseio.com",
    projectId: "default-python",
    storageBucket: "default-python.appspot.com",
    messagingSenderId: "469629023764",
    appId: "1:469629023764:web:985a75ff3f91b71f061901",
    measurementId: "G-MJQ2V7TNTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);

export { db, database };