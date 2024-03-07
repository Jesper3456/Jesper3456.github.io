document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#image-body').style.display = 'block';
    document.querySelectorAll('#gallery').style.display = 'none';


    document.querySelector('#galleryLink').addEventListener('onclick', () => {
        document.querySelector('#image-body').style.display = 'none';
        document.querySelector('#gallery').style.display = 'block';
    })
})