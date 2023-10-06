import { logout, onGetUserData } from "../firebase/firebase.js";
//import "../styles/profile.css";
function profile(navigator) {
    const containerProfile = document.createElement('div');
    const container_Welcome = document.createElement('section');
    const img_Logo = document.createElement('img');
    const container_Options = document.createElement('section');
    const a_Home = document.createElement('a');
    const a_Profile = document.createElement('a');
    const divContainerLogout = document.createElement('div');
    const p_logout = document.createElement('p');
    const imgLogout = document.createElement('img');
    const h2_profile = document.createElement('h2');
    const containerUserData = document.createElement('div');
    const imgProfile = document.createElement('img');
    const p_name = document.createElement('p');
    const span_name = document.createElement('span');
    const p_aboutMe = document.createElement('p');
    const span_aboutMe = document.createElement('span');

    containerProfile.classList.add('containerProfile');
    container_Welcome.classList.add('container_logo');
    img_Logo.classList.add('img_Logo');
    container_Options.classList.add('container_Options');
    a_Home.classList.add('a_Home');
    a_Profile.classList.add('a_Profile');
    divContainerLogout.classList.add('divContainerLogout');
    p_logout.classList.add('p_logout');
    imgLogout.classList.add('imgLogout');
    h2_profile.classList.add('h2_profile');
    containerUserData.classList.add('containerUserData');
    imgProfile.classList.add('imgProfile');
    p_name.classList.add('p_name');
    span_name.classList.add('span_name');
    p_aboutMe.classList.add('p_aboutMe');
    span_aboutMe.classList.add('span_aboutMe');

    img_Logo.setAttribute('src', '/assets/logo-haku-black.png');
    img_Logo.setAttribute('alt', 'Haku Social Network Logo');
    a_Home.setAttribute('href', '/wall');
    a_Profile.setAttribute('href', '/profile');
    imgLogout.setAttribute('src', '/assets/logout2.png');
    imgLogout.setAttribute('alt', 'Logout Icon');
    imgProfile.setAttribute('src', '/assets/user-profile.png');
    imgProfile.setAttribute('alt', 'Haku Social Network Logo');

    a_Home.innerHTML = `<img src="/assets/home.png" alt="House icon">Home</a>`
    a_Profile.innerHTML = `<img src="/assets/user.png" alt="User icon">Profile</a>`
    p_logout.textContent = 'Log out';
    h2_profile.textContent = 'PROFILE';
    p_name.textContent = 'Name';
    p_aboutMe.textContent = 'About me';
    span_name.innerHTML = 'Lorem ipsum';
    span_aboutMe.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident expedita nesciunt dolorum corrupti sit quo animi a repellat ad.';

    imgLogout.addEventListener('click', async () => {
        logout(navigator)
    });

    containerProfile.append(container_Welcome, container_Options, divContainerLogout, h2_profile, containerUserData);
    container_Welcome.append(img_Logo);
    container_Options.append(a_Home, a_Profile);
    divContainerLogout.append(p_logout, imgLogout);
    containerUserData.append(imgProfile, p_name, span_name, p_aboutMe, span_aboutMe);

    return containerProfile;
};

export default profile;