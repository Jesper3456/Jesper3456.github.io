document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#image-body').style.display = 'block';
    document.querySelector('#gallery').style.display = 'none';


    document.querySelector('#galleryLink').addEventListener('click', () => { 
        console.log('ok');
        document.querySelector('#image-body').style.display = 'none';
        document.querySelector('#gallery').style.display = 'block';
    })
})