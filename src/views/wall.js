import { savePosts,onGetPosts,onGetUserData,deletePost,getPost,updatePost} from "../firebase/firebase";
function wall() {
    const containerWall = document.createElement('section');
    const divContainerProfile = document.createElement('div');
    const titleWelcome = document.createElement('p');
    const img_logo = document.createElement('img');
    const container_Options = document.createElement('section');
    const a_Home = document.createElement('a');
    const a_Notifications = document.createElement('a');
    const a_Profile = document.createElement('a');
    const containerWriteWall = document.createElement('section');
    const divContainerButton = document.createElement('div');
    const imgProfile2 = document.createElement('img');
    const buttonWrite = document.createElement('button');
    const divContainerOptions = document.createElement('div');
    const iconVideo = document.createElement('img');
    const iconPicture = document.createElement('img');
    const iconPoll = document.createElement('img');
    const articlePost = document.createElement('article');

    containerWall.classList.add('containerWall');
    divContainerProfile.classList.add('divContainerProfile');
    titleWelcome.classList.add('titleWelcome');
    img_logo.classList.add('img_logo');
    container_Options.classList.add('container_Options');
    a_Home.classList.add('a_Home');
    a_Notifications.classList.add('a_Notifications');
    a_Profile.classList.add('a_Profile');
    containerWriteWall.classList.add('containerWriteWall');
    divContainerButton.classList.add('divContainerButton');
    imgProfile2.classList.add('imgProfile2');
    buttonWrite.classList.add('buttonWrite');
    divContainerOptions.classList.add('divContainerOptions');
    iconVideo.classList.add('iconVideo');
    iconPicture.classList.add('iconPicture');
    iconPoll.classList.add('iconPoll');
    articlePost.classList.add('articlePost');

    img_logo.setAttribute('src', '../Assets/logo-haku-white.png');
    img_logo.setAttribute('alt', 'Haku Social Network Logo');
    a_Home.setAttribute('href', '/home');
    a_Notifications.setAttribute('href', '#');
    a_Profile.setAttribute('href', '/profile');
    imgProfile2.setAttribute('src', '../Assets/561.ico');
    imgProfile2.setAttribute('alt', 'User profile photo');
    buttonWrite.setAttribute('type', 'button');
    iconVideo.setAttribute('src', '../assets/icon-video.png');
    iconVideo.setAttribute('alt', 'Video icon');
    iconPicture.setAttribute('src', '../assets/icon-picture.png');
    iconPicture.setAttribute('alt', 'Picture icon');
    iconPoll.setAttribute('src', '../assets/icon-poll.png');
    iconPoll.setAttribute('alt', 'Purvey icon');

    titleWelcome.textContent = 'HELLO, WELCOME!';
    a_Home.innerHTML = `<img src="../Assets/home.png" alt="House icon">Home</a>`
    a_Notifications.innerHTML = `<img src="../Assets/notifications.png" alt="Bell icon">Notifications</a>`
    a_Profile.innerHTML = `<img src="../Assets/user.png" alt="User icon">Profile</a>`
    buttonWrite.textContent = 'Write something...';

    //Pop up - Crear post
    const modalContainerCreatePost = document.createElement('div');
    const popUp = document.createElement('div');
    const titleCreatePost = document.createElement('h2');
    const modalClose = document.createElement('img');
    const formCreatePost = document.createElement('form');
    let inputCreatePost = document.createElement('textarea');
    const btnCreatePost = document.createElement('button');

    modalContainerCreatePost.classList.add('modalContainerCreatePost');
    popUp.classList.add('popUp');
    titleCreatePost.classList.add('titleCreatePost');
    modalClose.classList.add('modalClose');
    formCreatePost.classList.add('formCreatePost');
    inputCreatePost.classList.add('inputCreatePost');
    btnCreatePost.classList.add('btnCreatePost');

    modalClose.setAttribute('src', '../Assets/close.png');
    modalClose.setAttribute('alt', 'Close icon');
    formCreatePost.setAttribute('id', 'idFormPost');
    inputCreatePost.setAttribute('placeholder', 'Write here...');
    inputCreatePost.setAttribute('id', 'inputDescriptionPost');
    btnCreatePost.setAttribute('type', 'submit');

    let editStatus = false;
    let id = "";
    let userName = "";
    let userPhoto = "";
    let likeContador = 0;

    //Trayendo datos en tiempo real del usuario de la coleccion Google (nombre y foto)
    onGetUserData((responseUserData)=>{

        responseUserData.forEach(element=>{
            const data=element.data()

            userName=data.name;
            userPhoto=data.photo;
            imgProfile2.setAttribute('src', userPhoto);
            titleWelcome.innerText = 'Hello Welcome! '+ userName;
        })
    });

    //Create Post
    buttonWrite.addEventListener('click', () => {
        modalContainerCreatePost.classList.add('active');
        titleCreatePost.textContent = 'CREATE POST';
        btnCreatePost.textContent = 'Save'
        inputCreatePost.value = "";
        editStatus = false;
    });


    containerWall.append(divContainerProfile,container_Options, containerWriteWall,modalContainerCreatePost, articlePost);
    divContainerProfile.append(titleWelcome, img_logo);
    container_Options.append(a_Home, a_Notifications, a_Profile);
    containerWriteWall.append(divContainerButton, divContainerOptions);
    divContainerButton.append(imgProfile2, buttonWrite);
    divContainerOptions.append(iconVideo, iconPicture, iconPoll);
    modalContainerCreatePost.append(popUp);
    popUp.append(titleCreatePost, modalClose, formCreatePost);
    formCreatePost.append(inputCreatePost, btnCreatePost);

    return containerWall;
};
    export default wall;
