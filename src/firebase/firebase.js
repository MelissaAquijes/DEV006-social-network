import {firebaseConfig} from "./config.js"
import { initializeApp } from "firebase/app";
import { getAuth,
         GoogleAuthProvider,
         signInWithPopup} from "firebase/auth";

import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

let currentUserName = '';
let currentUserImage = '';
let currentUserUid ='';
let currentUserEmail ='';

// ---------- Inicio de sesión con Google ----------
export   const LoginWithGoogle= async(navegateCallback)=> {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        currentUserName = user.displayName;
        currentUserImage = user.photoURL;
        currentUserUid = user.uid
        currentUserEmail = user.email

        if (user !==null) {
            userDataGoogle();
        } else {
            // No hay usuario autenticado
            console.log("No hay usuario autenticado.");
        }

        navegateCallback('/home');
    } catch (error) {
        console.error('Error de autenticación:', error);
    }
};

    const userDataGoogle = async () => {
        const docRef = await addDoc(collection(db, "Google"), {
            name: currentUserName,
            photo:currentUserImage,
            email: currentUserEmail,
            uid: currentUserUid,
        });
    };