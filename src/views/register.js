import { registerUser} from "../firebase/firebase.js";
import "../styles/register.css";
function register(navegador) {
    const containerRegister = document.createElement('section');
    const containerLogo = document.createElement('div');
    const logoHaku = document.createElement('img')
    const imgBack = document.createElement('img');
    const titleCreateAccount = document.createElement('h2');
    const formRegister = document.createElement('form');
    const divInpuName = document.createElement('div');
    const spanIconName = document.createElement('span');
    const inputIconName = document.createElement('img');
    const inputName = document.createElement('input');
    const divInputEmail = document.createElement('div');
    const spanIconEmail = document.createElement('span');
    const inputIconEmail = document.createElement('img');
    const input_Email = document.createElement('input');
    const divInput_Password = document.createElement('div');
    const spanIcon_Password = document.createElement('span');
    const inputIcon_Password = document.createElement('img');
    const input_Password = document.createElement('input');
    const divInputNewPassword = document.createElement('div');
    const spanIconNewPassword = document.createElement('span');
    const inputIconNewPassword = document.createElement('img');
    const inputNewPassword = document.createElement('input');
    const buttonSignUp = document.createElement('button');

    containerRegister.classList.add('containerRegister');
    containerLogo.classList.add('containerLogo');
    logoHaku.classList.add('logoHaku');
    imgBack.classList.add('imgBack');
    titleCreateAccount.classList.add('titleCreateAccount');
    formRegister.classList.add('formRegister');
    divInpuName.classList.add('divInpuName');
    spanIconName.classList.add('spanIconName');
    inputIconName.classList.add('inputIconName');
    inputName.classList.add('inputName');
    divInputEmail.classList.add('divInputEmail');
    spanIconEmail.classList.add('spanIconEmail');
    inputIconEmail.classList.add('inputIconEmail');
    input_Email.classList.add('input_Email');
    divInput_Password.classList.add('divInput_Password');
    spanIcon_Password.classList.add('spanIcon_Password');
    inputIcon_Password.classList.add('inputIcon_Password');
    input_Password.classList.add('input_Password');
    divInputNewPassword.classList.add('divInputNewPassword');
    spanIconNewPassword.classList.add('spanIconNewPassword');
    inputIconNewPassword.classList.add('inputIconNewPassword');
    inputNewPassword.classList.add('inputNewPassword');
    buttonSignUp.classList.add('buttonSignUp');

    logoHaku.setAttribute('src', '/assets/logo-haku-white.png');
    logoHaku.setAttribute('alt', 'Haku Social Network Logo');
    imgBack.setAttribute('src', '/assets/back.png');
    imgBack.setAttribute('alt', 'Icon back');
    formRegister.setAttribute('id', 'form-register');
    inputIconName.setAttribute('src', '/assets/icon-user-grey.png')
    inputIconName.setAttribute('alt', 'User icon')
    inputName.setAttribute('id', 'inputFirstName' );
    inputName.setAttribute('type', 'text' );
    inputName.setAttribute('placeholder', 'NAME' );
    inputName.setAttribute('required', '');
    inputIconEmail.setAttribute('src', '/assets/email.png')
    inputIconEmail.setAttribute('alt', 'Email icon')
    input_Email.setAttribute('id', 'input-email');
    input_Email.setAttribute('type', 'email');
    input_Email.setAttribute('placeholder', 'EMAIL');
    input_Email.setAttribute('required', '');
    inputIcon_Password.setAttribute('src', '/assets/icon-password-grey.png');
    inputIcon_Password.setAttribute('alt', 'Secret key icon');
    input_Password.setAttribute('id', 'input-password');
    input_Password.setAttribute('type', 'password');
    input_Password.setAttribute('placeholder', 'PASSWORD');
    input_Password.setAttribute('minlength', '6');
    input_Password.setAttribute('maxlength', '12');
    input_Password.setAttribute('required', '');
    inputIconNewPassword.setAttribute('src', '/assets/icon-password-grey.png');
    inputIconNewPassword.setAttribute('alt', 'Secret key icon');
    inputNewPassword.setAttribute('id', 'inputNewPassword');
    inputNewPassword.setAttribute('type', 'password');
    inputNewPassword.setAttribute('placeholder', 'CONFIRM PASSWORD');
    inputNewPassword.setAttribute('minlength', '6');
    inputNewPassword.setAttribute('maxlength', '12');
    inputNewPassword.setAttribute('required', '');
    buttonSignUp.setAttribute('type', 'submit');

    titleCreateAccount.textContent = 'CREATE AN ACCOUNT'
    buttonSignUp.textContent = 'Sign Up';

    containerRegister.append(containerLogo, imgBack, formRegister);
    containerLogo.append(logoHaku);
    formRegister.append(titleCreateAccount, divInpuName, divInputEmail, divInput_Password, divInputNewPassword, buttonSignUp);
    divInpuName.append(spanIconName, inputName);
    spanIconName.append(inputIconName);
    divInputEmail.append(spanIconEmail, input_Email);
    spanIconEmail.append(inputIconEmail);
    divInput_Password.append(spanIcon_Password, input_Password);
    spanIcon_Password.append(inputIcon_Password);
    divInputNewPassword.append(spanIconNewPassword, inputNewPassword);
    spanIconNewPassword.append(inputIconNewPassword);

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        registerUser(navegador);
    })

    imgBack.addEventListener('click', () => {
        navegador('/')
    })


    return containerRegister;
};

export default register;