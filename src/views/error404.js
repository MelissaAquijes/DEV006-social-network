function error404() {
    const sectionError = document.createElement('section');
    const imgError = document.createElement('img');

    sectionError.classList.add('sectionError');
    imgError.classList.add('imgError');

    imgError.setAttribute('src', '../assets/error-404.jpg');
    imgError.setAttribute('alt', 'Error 404 page no found');

    sectionError.append(imgError);

    return sectionError;
}

export default error404;