import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onOpenImg);

function createGalleryCardMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onOpenImg(event) {
  event.preventDefault();

  galleryContainer.addEventListener("keydown", onEscKeyPress, { once: true });

  const isGalleryContainerEl =
    event.target.classList.contains("gallery__image");

  if (!isGalleryContainerEl) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
