
import { galleryItems } from './gallery-items.js';
// Change code below this line






const gallery = document.querySelector('.gallery');


function createGallaryCards(images) {
    return images.map(({preview, original, description }) => {
        return `<div class="gallery__item">
        <a href="${original}" class="gallery__link">
        <img
        class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}">        
        </a>
        </div>`;
    })
        .join(' '); 
}

const cards = createGallaryCards(galleryItems);
gallery.innerHTML = cards;


gallery.addEventListener('click', (evt) => {
        evt.preventDefault();
        const img = evt.target.dataset.source;        
        const instance = basicLightbox.create(`
        <img src="${img}">`);                
    instance.show(() => {
        window.addEventListener('keydown', (evt) => {
             if (evt.code === 'Escape') {
        instance.close();
        console.log('1');
    }
         } );     
        });      
    })



