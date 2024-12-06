import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

// Funcția pentru crearea galeriei din array-ul `galleryItems`
function createGallery(items) {
  const galleryMarkup = items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
  
  galleryContainer.innerHTML = galleryMarkup;
}

// Apelăm funcția pentru a popula galeria
createGallery(galleryItems);

// Adăugarea unui event listener pentru deschiderea ferestrei modale la click pe imagine
galleryContainer.addEventListener('click', (event) => {
  event.preventDefault(); // Previne comportamentul implicit al link-ului
  
  if (event.target.nodeName !== 'IMG') return; // Verificăm dacă a fost clic pe imagine
  
  // Obținem URL-ul imaginii mari
  const imageSource = event.target.dataset.source;
  
  // Creăm și deschidem fereastra modală cu imaginea mare
  const modal = basicLightbox.create(`
    <img src="${imageSource}" alt="Imagine mare">
  `);
  
  modal.show();

  // Închiderea ferestrei modale cu tasta Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.close();
    }
  });
});