import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "basiclightbox";
const gallery = document.querySelector(".gallery");

// Tworzenie elementów galerii na podstawie tablicy galleryItems
function createGalleryItem(item) {
  const image = galleryItem.querySelector(".gallery__image");
  const link = galleryItem.querySelector(".gallery__link");

  image.src = item.original;
  image.dataset.source = item.preview;
  image.alt = item.description;
  link.href = item.preview;
}

// Dodawanie elementów galerii do kontenera
function renderGalleryItems() {
  const galleryItemsElements = galleryItems.map(createGalleryItem);
}

// Otwieranie okna modalnego po kliknięciu na element galerii
function onGalleryItemClick(event) {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src= ${imageSrc} width="800" height="600">
  `);
  instance.show();
}

// Dodawanie słuchacza kliknięć na elementy galerii
function addGalleryItemsListener() {
  gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("gallery__image")) {
      onGalleryItemClick(event);
    }
  });
}

renderGalleryItems();
addGalleryItemsListener();

console.log(galleryItems);
