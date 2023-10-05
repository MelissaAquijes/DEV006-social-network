import { LoginWithGoogle, loginEmailPassword, onGetUserData, deleteUser } from "../firebase/firebase.js";
import "../styles/login.css";
function login(navigator) {
    const containerLogin = document.createElement('section');
    const divBackground = document.createElement('div');
    const blackTransparency = document.createElement('div');
    const sectionForm = document.createElement('section');
    const imgLogo = document.createElement('img');
    const form = document.createElement('form');
    const divInputUser = document.createElement('div');
    const spanIconUser = document.createElement('span');
    const inputIconUser = document.createElement('img');
    const inputEmail = document.createElement('input');
    const divInputPassword = document.createElement('div');
    const spanIconPassword = document.createElement('span');
    const inputIconPassword = document.createElement('img');
    const inputPassword = document.createElement('input');
    const msgEmailPassword = document.createElement('p');
    const buttonSingIn = document.createElement('button');
    const sectionLinks = document.createElement('div');
    const createAccount = document.createElement('p');
    const forgotPassword = document.createElement('p');
    const sectionConnectWith = document.createElement('div');
    const line1 = document.createElement('div');
    const othersAccess = document.createElement('p');
    const line2 = document.createElement('div');
    const sectionIconApp = document.createElement('section');
    const imgIconGoogle = document.createElement('img');

    containerLogin.classList.add('containerLogin');
    divBackground.classList.add('divBackground');
    blackTransparency.classList.add('blackTransparency');
    sectionForm.classList.add('sectionForm');
    imgLogo.classList.add('imgLogo');
    form.classList.add('form');
    divInputUser.classList.add('divInputUser');
    spanIconUser.classList.add('spanIconUser');
    inputIconUser.classList.add('inputIconUser');
    inputEmail.classList.add('inputEmail');
    divInputPassword.classList.add('divInputPassword');
    spanIconPassword.classList.add('spanIconPassword');
    inputIconPassword.classList.add('inputIconPassword');
    inputPassword.classList.add('inputPassword');
    msgEmailPassword.classList.add('msgEmailPassword');
    buttonSingIn.classList.add('buttonSignIn');
    sectionLinks.classList.add('sectionLinks');
    createAccount.classList.add('createAccount');
    forgotPassword.classList.add('forgotPassword');
    sectionConnectWith.classList.add('sectionConnectWith');
    line1.classList.add('line1');
    othersAccess.classList.add('othersAccess');
    line2.classList.add('line2');
    sectionIconApp.classList.add('sectionIconApp');
    imgIconGoogle.classList.add('imgIconGoogle');

    imgLogo.setAttribute('src', '../assets/logo-haku-white.png');
    imgLogo.setAttribute('alt', 'Haku Social Network Logo');
    form.setAttribute('id', 'signIn-form');
    inputIconUser.setAttribute('src', '../assets/icon-user.png')
    inputIconUser.setAttribute('alt', 'User icon')
    inputEmail.setAttribute('id', 'inputEmail');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'EMAIL');
    inputEmail.setAttribute('required', '');
    inputIconPassword.setAttribute('src', '../assets/icon-password.png');
    inputIconPassword.setAttribute('alt', 'Secret key icon');
    inputPassword.setAttribute('id', 'inputPassword');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('placeholder', 'PASSWORD');
    inputPassword.setAttribute('minlength', '6');
    inputPassword.setAttribute('maxlength', '12');
    inputPassword.setAttribute('required', '');
    msgEmailPassword.setAttribute('id', 'msg_Email');
    buttonSingIn.setAttribute('type', 'submit');
    imgIconGoogle.setAttribute('src', '../assets/icon-google.png');
    imgIconGoogle.setAttribute('alt', 'Google logo');

    buttonSingIn.textContent = 'Sign In';
    createAccount.innerHTML = `<a href='register' id='linkCreateAccount'>Create Account</a>`
    forgotPassword.innerHTML = `<a href='password' id='linkForgotPassword'>Forgot your password?</a>`
    othersAccess.textContent = 'Or connect with';

    //trayendo datos del Usuario anterior
    let userIdLogin=""
    let user=""
    onGetUserData((responseUserData)=>{
        responseUserData.forEach(element=>{
            user=element
            userIdLogin=element.id
        })
    })


    buttonSingIn.addEventListener('click', (e) => {
        e.preventDefault();
        loginEmailPassword(navigator);
        if (user){
            deleteUser(userIdLogin)
        }
    })


    imgIconGoogle.addEventListener('click', () => {
        LoginWithGoogle(navigator);
    });


    containerLogin.append(divBackground, blackTransparency, sectionForm);
    sectionForm.append(imgLogo, form, sectionLinks, sectionConnectWith, sectionIconApp )
    form.append(divInputUser, divInputPassword, msgEmailPassword, buttonSingIn);
    divInputUser.append(spanIconUser, inputEmail);
    spanIconUser.append(inputIconUser);
    divInputPassword.append(spanIconPassword, inputPassword);
    spanIconPassword.append(inputIconPassword);
    sectionLinks.append(createAccount, forgotPassword);
    sectionConnectWith.append(line1, othersAccess, line2);
    sectionIconApp.append(imgIconGoogle);

    return containerLogin;
};

export default login;
