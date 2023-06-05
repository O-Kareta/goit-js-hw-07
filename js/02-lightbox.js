import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.body.querySelector(".gallery");
galleryContainer.innerHTML = galleryItems.reduce((htmlGallery, item) => {
  return (
    htmlGallery +
    `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>
    `
  );
}, "");

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryContainer);
