import { savePosts,onGetPosts,onGetUserData,deletePost,getPost,updatePost} from "../firebase/firebase.js";
import "../styles/wall.css";
import  logoBlack from '../assets/logo-haku-black.png'
import  icoVideo from '../assets/icon-video.png'
import  icoPicture from '../assets/icon-picture.png'
import  icoPoll from '../assets/icon-poll.png'
import  iHome from '../assets/home.png'
import  iUser from '../assets/user.png'
import  iconClose from '../assets/close.png'
import  iconDots from '../assets/icon-three-dots.png'
import  iconEdit from '../assets/edit.png'
import  iconDelete from '../assets/delete.ico'
import  iconHeart from '../assets/icon-heart-red.png'
import  iconComment from '../assets/icon-comment.png'

function wall(navigator) {
    const containerWall = document.createElement('section');
    const divContainerProfile = document.createElement('div');
    const img_logo = document.createElement('img');
    const titleWelcome = document.createElement('p');
    const container_Options = document.createElement('section');
    const a_Home = document.createElement('a');
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
    img_logo.classList.add('img_logo');
    titleWelcome.classList.add('titleWelcome');
    container_Options.classList.add('container_Options');
    a_Home.classList.add('a_Home');
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

    img_logo.setAttribute('src', logoBlack);
    img_logo.setAttribute('alt', 'Haku Social Network Logo');
    imgProfile2.setAttribute('alt', 'User profile photo');
    buttonWrite.setAttribute('type', 'button');
    iconVideo.setAttribute('src', icoVideo);
    iconVideo.setAttribute('alt', 'Video icon');
    iconPicture.setAttribute('src', icoPicture);
    iconPicture.setAttribute('alt', 'Picture icon');
    iconPoll.setAttribute('src', icoPoll);
    iconPoll.setAttribute('alt', 'Purvey icon');


    a_Home.innerHTML = `<img src=${iHome} alt="House icon">Home</a>`
    a_Profile.innerHTML = `<img src=${iUser} alt="User icon">Profile</a>`
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

    modalClose.setAttribute('src', iconClose);
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
    
    a_Profile.addEventListener('click',()=>{

        navigator('/profile')
    })

    a_Home.addEventListener('click',()=>{
        navigator('/')
    })

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

    modalClose.addEventListener('click', () => {
        modalContainerCreatePost.classList.remove('active');
    });

    //Trayendo datos en tiempo real con onGetPosts
    onGetPosts((responsePosts) =>{
        let html = ""

        responsePosts.forEach(element =>{
            const post=element.data()

            html +=
            `<div class="postContainer">
                    <div class="divContainerUser" id="divContenedorxD">
                            <img class="imgProfile3" src="${post.imageUser}" alt="">
                            <h2 class="nameUser">${post.nameUser}</h2>
                            <img class="postIconOptions" src=${iconDots} alt="Ellipsis icon">
                            <div class="postMenuOptions">
                                <div class="buttonEdit" data-id="${element.id}">
                                    <a data-id="${element.id}">Edit</a>
                                    <img src=${iconEdit} data-id="${element.id}">
                                </div>
                                <div class="buttonDelete" data-id="${element.id}">
                                    <a data-id="${element.id}">Delete</a>
                                    <img src=${iconDelete} data-id="${element.id}">
                                </div>
                            </div>
                    </div>

                    <p class="postUser" id="idDescriptionPost">${post.description}</p>

                    <div class="ContainerDetailsPadre">
                        <div class="containerDetails">
                            <span class="number" data-id="${element.id}">${post.likeCounter}</span>
                            <img class="iconHeart" src=${iconHeart} alt="Heart icon">
                            <span class="iLike" data-id="${element.id}">I like</span>
                            <img class="iconComment" src=${iconComment} alt="Feedback icon">
                            <p class="comment">Comment</p>
                        </div>
                    </div>
            </div>`
        });

        articlePost.innerHTML = html;

        const btnsOptions =articlePost.querySelectorAll('.postIconOptions');
        const menusOptions =articlePost.querySelectorAll('.postMenuOptions');
        const btnsEdit=articlePost.querySelectorAll('.buttonEdit');
        const btnsDelete =articlePost.querySelectorAll('.buttonDelete')
        const btnsIlike = articlePost.querySelectorAll('.iLike')
        const numbersLike = articlePost.querySelectorAll('.number')
        const iconsHeart = articlePost.querySelectorAll('.iconHeart')

        //boton contador de LIKES
        btnsIlike.forEach((btnIlike,indexLike) =>{
            let index = indexLike;

            btnIlike.addEventListener('click',(e) =>{
                numbersLike.forEach(async(number,i) =>{

                    if(index === i){
                        const post=  await getPost(e.target.dataset.id);//traemos el post por su Id de FireStore en Bruto
                        const postParsed = post.data() // parseamos el post
                        likeContador=Number(postParsed.likeCounter)+1

                        updatePost(e.target.dataset.id,{likeCounter:likeContador})
                    }
                })
            });
        });

        //botones para EDITAR y ELIMINAR
        btnsOptions.forEach((btn,i) =>{
            let index=i;
            btn.addEventListener("click",()=>{ //desplegar y ocultar modal options (edit-delete)
                menusOptions.forEach((element,i) => {
                    if(index === i){
                        element.classList.toggle('active');
                    }  else{
                        element.classList.remove('active');
                    }
                })
            })

            btnsEdit.forEach((btnEdit,indexEdit) =>{
                btnEdit.addEventListener("click",async(event) =>{
                    if(index === indexEdit){

                        const post = await getPost(event.target.dataset.id); //traemos el post por su Id de FireStore en Bruto
                        const postParsed =(post.data());
                        modalContainerCreatePost.classList.add('active');
                        titleCreatePost.textContent = 'EDIT POST';
                        btnCreatePost.textContent = 'Update'
                        inputCreatePost.value = postParsed.description
                        editStatus = true
                        id = post.id
                    }
                    menusOptions.forEach(element2 =>{
                        element2.classList.remove('active')
                    })
                })
            })

            btnsDelete.forEach((btnDelete,indexDelete) =>{
                btnDelete.addEventListener("click",(eventDelete) =>{
                    if(index === indexDelete){
                        deletePost(eventDelete.target.dataset.id)
                    }
                })
            })
        })
    });

    //Guardando datos en fireStore
    formCreatePost.addEventListener('submit',(e) =>{
        e.preventDefault();

         if(editStatus){ //cuando le damos click en el boton Edit -->editStatus sera true
            updatePost(id,{description:inputCreatePost.value})
        } else{  //cuando le damos click en el boton buttonWrite-->editStatus sera false
            savePosts(inputCreatePost.value,userName,userPhoto,likeContador)
        }

        modalContainerCreatePost.classList.remove('active');
    });

    containerWall.append(divContainerProfile,container_Options, containerWriteWall,modalContainerCreatePost, articlePost);
    divContainerProfile.append(img_logo, titleWelcome);
    container_Options.append(a_Home, a_Profile);
    containerWriteWall.append(divContainerButton, divContainerOptions);
    divContainerButton.append(imgProfile2, buttonWrite);
    divContainerOptions.append(iconVideo, iconPicture, iconPoll);
    modalContainerCreatePost.append(popUp);
    popUp.append(titleCreatePost, modalClose, formCreatePost);
    formCreatePost.append(inputCreatePost, btnCreatePost);

    return containerWall;
};
    export default wall;
