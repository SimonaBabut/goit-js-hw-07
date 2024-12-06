import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

// Funcția pentru crearea galeriei din array-ul `galleryItems`
function createGallery(items) {
  const galleryMarkup = items.map(({ preview, original, description }) => {
    return `
      </li>
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
  }).join('');
  
  galleryContainer.innerHTML = galleryMarkup;
}

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,  // Activează afișarea descrierilor
  captionsData: 'alt',  // Folosește atributul alt pentru descriere
  captionDelay: 250 // Afișează descrierea la 250 ms după deschiderea imaginii
});