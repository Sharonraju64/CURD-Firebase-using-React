// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyCjm7ZI8PRRjuU7his5ShiwB6l-pRdklz4",
        authDomain: "project-5358671697031531226.firebaseapp.com",
        databaseURL: "https://project-5358671697031531226-default-rtdb.firebaseio.com",
        projectId: "project-5358671697031531226",
        storageBucket: "project-5358671697031531226.appspot.com",
        messagingSenderId: "1076099580843",
        appId: "1:1076099580843:web:b68d870c4c251834e1c8ee",
        measurementId: "G-669WWD1NM2"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase;