import { restorePassword } from "../firebase/firebase.js";
import "../styles/password.css";
function password(navigateTo) {
    const containerForgotPassword = document.createElement('section');
    const divContainerLogo = document.createElement('div');
    const img_Logo = document.createElement('img');
    const img_back = document.createElement('img');
    const titleRecoverPassword = document.createElement('h2');
    const informationParagraph = document.createElement('p');
    const formRecoverPassword = document.createElement('form');
    const divInput_Email = document.createElement('div');
    const spanIcon_Email = document.createElement('div');
    const inputIcon_Email = document.createElement('img');
    const input_email = document.createElement('input');
    const message_email = document.createElement('p');
    const buttonRecoverPassword = document.createElement('button');

    containerForgotPassword.classList.add('containerForgotPassword');
    divContainerLogo.classList.add('divContainerLogo');
    img_Logo.classList.add('img_Logo');
    img_back.classList.add('img_back');
    titleRecoverPassword.classList.add('titleRecoverPassword');
    informationParagraph.classList.add('informationParagraph');
    formRecoverPassword.classList.add('formRecoverPassword');
    divInput_Email.classList.add('divInput_Email');
    spanIcon_Email.classList.add('spanIcon_Email');
    inputIcon_Email.classList.add('inputIcon_Email');
    input_email.classList.add('input_email');
    message_email.classList.add('message_email');
    buttonRecoverPassword.classList.add('buttonRecoverPassword');

    img_Logo.setAttribute('src', '../assets/logo-haku-white.png');
    img_Logo.setAttribute('alt', 'Haku Social Network Logo');
    img_back.setAttribute('src', '../assets/back.png');
    img_back.setAttribute('alt', 'Icon back');
    inputIcon_Email.setAttribute('src', '../assets/email.png');
    inputIcon_Email.setAttribute('alt', 'Email icon');
    input_email.setAttribute('id', 'emailRegister');
    input_email.setAttribute('type', 'email');
    input_email.setAttribute('placeholder', 'EMAIL');
    input_email.setAttribute('required', '');
    message_email.setAttribute('id', 'msgEmail');

    titleRecoverPassword.textContent = 'RECOVER YOUR PASSWORD';
    informationParagraph.textContent = 'Enter the email address with which you registered and we will immediately send you the instructions to reset your password.';
    buttonRecoverPassword.textContent = 'Recover Password';

    img_back.addEventListener('click', () => {
        navigateTo('/')
    })

    formRecoverPassword.addEventListener('submit', (e) => {
        e.preventDefault();
        const saveEmail = document.getElementById('emailRegister').value;
        restorePassword(saveEmail);
    })

    containerForgotPassword.append(divContainerLogo, img_back, formRecoverPassword);
    divContainerLogo.append(img_Logo);
    formRecoverPassword.append(titleRecoverPassword, informationParagraph, divInput_Email, message_email, buttonRecoverPassword);
    divInput_Email.append(spanIcon_Email, input_email);
    spanIcon_Email.append(inputIcon_Email);

    return containerForgotPassword;
}

export default password;