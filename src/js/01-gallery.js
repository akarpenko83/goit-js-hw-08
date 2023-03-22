// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

galleryContainer.addEventListener('click', onPictureClick)

galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
        return `
        <div class="gallery">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a> 
        </div>
        `;
    })
    .join("");
};
 
function onPictureClick(evt) {
   handleModalWindow()
};
function handleModalWindow() {
    let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
  };
