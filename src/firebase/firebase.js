import {firebaseConfig} from "./config.js"
import { initializeApp } from "firebase/app";
import { getAuth,
         GoogleAuthProvider,
         signInWithPopup,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         updateProfile,
         sendEmailVerification,
         sendPasswordResetEmail,
         signOut} from "firebase/auth";

import { getFirestore,
         collection,
         addDoc,
         onSnapshot,
         deleteDoc,
         doc,
         getDoc,
         updateDoc, } from 'firebase/firestore';

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
export const LoginWithGoogle = async(navegateCallback) => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        currentUserName = user.displayName;
        currentUserImage = user.photoURL;
        currentUserUid = user.uid
        currentUserEmail = user.email

        if (user !== null) {
            userDataGoogle();
            navegateCallback('/wall');
        } else {
            navegateCallback('/error');
        }
    } catch (error) {
        console.error('Authentication Error:', error);
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


//---------- Inicio de sesión con Email y Contraseña ----------
export const loginEmailPassword = (navigateTo) => {
    const signinForm = document.getElementById('signIn-form');
    const emailLogin = signinForm['inputEmail'].value;
    const passwordLogin = signinForm['inputPassword'].value;
    console.log(emailLogin, passwordLogin);

    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then((userCredential) => {
        // Inicio de sesión exitoso, puedes obtener el usuario y realizar acciones adicionales
        const user = userCredential.user;
        console.log('USUARIO',userCredential.user.displayName)
        navigateTo('/wall')

    })

    .catch((error) => {
        // Ocurrió un error durante el inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        const noteEyP = document.getElementById('msg_Email');
        console.error('Error de inicio de sesión:', errorCode, errorMessage);

        if (errorCode === 'auth/user-not-found') {
            noteEyP.innerHTML = 'Usuario no registrado'

        } else if (errorCode === 'auth/wrong-password') {
            noteEyP.innerHTML = 'Contraseña incorrecta'
        }
    });
}

//---------- Creación de cuenta ----------
export const registerUser = (navigateTo) => {
    const createAccountForm = document.getElementById('form-register');
    const nameRegister = createAccountForm['inputFirstName'].value;
    const emailRegister = createAccountForm['input-email'].value;
    const passwordRegister = createAccountForm['input-password'].value;
    const confirmPasswordRegister = createAccountForm['inputNewPassword'].value;

    if (passwordRegister !== confirmPasswordRegister) {
        alert('Las contraseñas no coinciden');
        return;
    }

    createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then((userCredentials) => updateProfile(userCredentials.user, { displayName: nameRegister }))
    .then((userNamePost) => {
        console.log(userNamePost);
        navigateTo('/');
        emailVerification();
    })

    .catch((error) => {
        if (error.code === 'auth/invalid-email') alert('Por favor ingresa un email válido');
        if (error.code === 'auth/weak-password') alert('La contraseña es demasiado débil');
        if (error.code === 'auth/email-already-in-use') alert('El email ya se encuentra asociado a una cuenta');
        console.log('no se puede iniciar')
    });
};

// ---------- Enviar correo de verificación ----------
async function emailVerification() {
    const user = auth.currentUser;
    try {
        // Verificar si el usuario está autenticado y el correo electrónico no ha sido verificado aún
        if (user && !user.emailVerified) {
            await sendEmailVerification(user);
            alert('Se ha enviado un mensaje de verificación a tu correo electrónico, por favor revisalo y verifica tu registro. Luego inicia sesión.');
            console.log("Correo de verificación enviado a:", user.email);

        } else {
            console.log("No se puede enviar el correo de verificación.");
            alert('No se puede enviar el correo de verificación. Asegúrate de que el usuario esté autenticado y el correo electrónico no haya sido verificado aún.');
        }

    } catch (error) {
        console.error("Error al enviar el correo de verificación:", error);
    }
};

// ---------- Recuperar contraseña ----------
export const restorePassword = (email) => {
    const msg = document.getElementById('msgEmail');
    sendPasswordResetEmail(auth, email)

    .then(() => {
        msg.innerHTML = 'An email was sent to recover your password'
        console.log('Correo electrónico de restablecimiento enviado');
    })

    .catch((error) => {
        console.error(error);
        console.log('email no registrado no existe')
        const msg = document.getElementById('msgEmail');
        msg.innerHTML = 'Invalid email'
    });
};

// ---------- Trae toda la colección Google en tiempo real ----------
export const onGetUserData = (callback) => onSnapshot(collection(db,'Google'),callback);

// ---------- Almacena y crea la colección Posts en firestore ----------
export const savePosts = (description,nameUser,imageUser,likeCounter) => addDoc(collection(db, "Posts"), { description , nameUser, imageUser,likeCounter});

// ---------- Trae toda la coleccion Posts en tiempo real ----------
export const onGetPosts = (callback) => onSnapshot(collection(db,'Posts'),callback);

// ---------- Borra el elemento seleccionado por su ID de la coleccion Posts ----------
export const deletePost = id => deleteDoc(doc(db,'Posts',id));

// ---------- Borra el usuario seleccionado por su ID de la coleccion Google ----------
export const deleteUser = id => deleteDoc(doc(db,'Google',id));

// ---------- Trae solo el elemento seleccionado por su ID de la coleccion Posts ----------
export const getPost = id => getDoc(doc(db,'Posts',id))

// ---------- Actualiza el elemento seleccionado por su ID de la coleccion Posts ----------
export const updatePost = (id,newfields) => updateDoc(doc(db,'Posts',id), newfields)

// ---------- Cerrar sesión ----------
export const logout = async (callbackLogout) => {
    await signOut(auth);
    callbackLogout('/');
}