
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGclTd1J5HSuh43tqjAFoHaZ8lFZqDr5Y",
    authDomain: "netflix-clone-e38b0.firebaseapp.com",
    projectId: "netflix-clone-e38b0",
    storageBucket: "netflix-clone-e38b0.appspot.com",
    messagingSenderId: "33259229486",
    appId: "1:33259229486:web:23cceb12ab87fafbccaabf",
    measurementId: "G-2WDXNX7F3Y"
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }