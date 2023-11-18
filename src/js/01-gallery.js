import Simplelightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const renderGalleryItem = (item) => {
  return (
    `<li>
      <a class="gallery__item" href=${item.original}>
        <img
          class="gallery__image"
          src=${item.preview}
          alt=${item.description}
        />
      </a>
    </li>`
  );
};

// render gallery items markup
const galleryItemsMarkup = galleryItems.map(renderGalleryItem);
const markup = galleryItemsMarkup.join('');

// put gallery items markup to gallery container
const gallery = document.querySelector('.gallery');
gallery.innerHTML = markup;

// activate gallery plugin
new Simplelightbox('.gallery a', {captionsData: "alt",  captionDelay: 350});