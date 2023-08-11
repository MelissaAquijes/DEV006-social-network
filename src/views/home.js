import { onGetUserData } from "../firebase/firebase";
function home(navigator) {
    const containerHome = document.createElement('div');
    const container_welcome = document.createElement('section');
    const Title_welcome = document.createElement('div');
    const Img_Logo = document.createElement('img')
    const container_Options = document.createElement('section');
    const a_Home = document.createElement('a');
    const a_Notifications = document.createElement('a');
    const a_Profile = document.createElement('a');
    const h2_chooseSpecialty = document.createElement('h2');
    const containerImgSpecialty = document.createElement('div');
    const imgMakeUp = document.createElement('img');
    const imgNails = document.createElement('img');
    const imgBodySpa = document.createElement('img');
    const imgHairCut = document.createElement('img');
    const imgHairColor = document.createElement('img');
    const imgFacial = document.createElement('img');
    const imgBarbershop = document.createElement('img');
    const imgProducts = document.createElement('img');

    containerHome.classList.add('containerHome');
    container_welcome.classList.add('container_welcome');
    Title_welcome.classList.add('Title_welcome');
    Img_Logo.classList.add('Img_Logo');
    container_Options.classList.add('container_Options');
    a_Home.classList.add('a_Home');
    a_Notifications.classList.add('a_Notifications');
    a_Profile.classList.add('a_Profile');
    h2_chooseSpecialty.classList.add('h2_chooseSpecialty');
    containerImgSpecialty.classList.add('containerImgSpecialty');
    imgMakeUp.classList.add('imgMakeUp');
    imgNails.classList.add('imgNails');
    imgBodySpa.classList.add('imgBodySpa');
    imgHairCut.classList.add('imgHairCut');
    imgHairColor.classList.add('imgHairColor');
    imgFacial.classList.add('imgFacial');
    imgBarbershop.classList.add('imgBarbershop');
    imgProducts.classList.add('imgProducts');

    Img_Logo.setAttribute('src', '../Assets/logo-haku-white.png');
    Img_Logo.setAttribute('alt', 'Haku Social Network Logo');
    a_Home.setAttribute('href', '/home');
    a_Notifications.setAttribute('href', '#');
    a_Profile.setAttribute('href', '/profile');
    imgMakeUp.setAttribute('src', '../Assets/make-up.jpg');
    imgMakeUp.setAttribute('alt', 'Makeup image');
    imgNails.setAttribute('src', '../assets/nails.jpg');
    imgNails.setAttribute('alt', 'Nails image');
    imgBodySpa.setAttribute('src', '../assets/body-spa.jpg');
    imgBodySpa.setAttribute('alt', 'Body Spa image');
    imgHairCut.setAttribute('src', '../assets/haircut.jpg');
    imgHairCut.setAttribute('alt', 'Hair Cut image');
    imgHairColor.setAttribute('src', '../Assets/hair-color.jpg');
    imgHairColor.setAttribute('alt', 'Hair Color image');
    imgFacial.setAttribute('src', '../assets/facial.jpg');
    imgFacial.setAttribute('alt', 'Facial image');
    imgBarbershop.setAttribute('src', '../assets/barbershop.jpg');
    imgBarbershop.setAttribute('alt', 'Barbershop image');
    imgProducts.setAttribute('src', '../assets/products.jpg');
    imgProducts.setAttribute('alt', 'Products image');

    h2_chooseSpecialty.textContent = 'CHOOSE SPECIALTY';
    a_Home.innerHTML = `<img src="../Assets/home.png" alt="House icon">Home</a>`
    a_Notifications.innerHTML = `<img src="../Assets/notifications.png" alt="Bell icon">Notifications</a>`
    a_Profile.innerHTML = `<img src="../Assets/user.png" alt="User icon">Profile</a>`

    //trayendo datos del usuario de la coleccion Google (nombre)
    onGetUserData((responseUserData)=>{
        responseUserData.forEach(element => {
            const data = element.data()  
            const userName = data.name;
            Title_welcome.innerText = 'HELLO WELCOME! '+userName;
        })
    });

    imgMakeUp.addEventListener('click', () => {
        navigator('/wall')
    });

    containerHome.append(container_welcome, container_Options, h2_chooseSpecialty, containerImgSpecialty);
    container_welcome.append(Title_welcome, Img_Logo);
    container_Options.append(a_Home, a_Notifications, a_Profile);
    containerImgSpecialty.append(imgMakeUp, imgNails, imgBodySpa, imgHairCut, imgHairColor, imgFacial, imgBarbershop, imgProducts);

    return containerHome;
};

export default home;