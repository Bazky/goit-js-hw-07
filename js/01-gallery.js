import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "basiclightbox";
const gallery = document.querySelector(".gallery");

// Tworzenie elementów galerii na podstawie tablicy galleryItems
function createGalleryItem(item) {
  const image = galleryItem.querySelector(".gallery__image");
  const link = galleryItem.querySelector(".gallery__link");

  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;
  link.href = item.original;

  return galleryItem;
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
    <img src="${imageSrc}"   width="800" height="600">
  `);
  instance.show();
}

renderGalleryItems();
addGalleryItemsListener();

console.log(galleryItems);
