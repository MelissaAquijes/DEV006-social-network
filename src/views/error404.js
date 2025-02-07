import "../styles/error404.css";
import  backgroundError from '../assets/error-404.jpg'

function error404() {
    const sectionError = document.createElement('section');
    const imgError = document.createElement('img');

    sectionError.classList.add('sectionError');
    imgError.classList.add('imgError');

    imgError.setAttribute('src', backgroundError);
    imgError.setAttribute('alt', 'Error 404 page no found');

    sectionError.append(imgError);

    return sectionError;
}

export default error404;