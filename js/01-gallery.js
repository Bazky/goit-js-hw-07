import { galleryItems } from "./gallery-items.js";

import * as basicLightbox from "basiclightbox";
const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
  const galleryItem = document.querySelector(".gallery__item");
  const image = galleryItem.querySelector(".gallery__image");
  const link = galleryItem.querySelector(".gallery__link");

  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;
  link.href = item.original;

  return galleryItem;
}

function renderGalleryItems() {
  const galleryItemsElements = galleryItems.map(createGalleryItem);
}

function onGalleryItemClick(event) {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);
  instance.show();
}

function addGalleryItemsListener() {
  gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("gallery__image")) {
      onGalleryItemClick(event);
    }
  });
}

const prev = document.getElementById("prev");
prev.addEventListener("click", (e) => {
  preventDeafult();
});

renderGalleryItems();
addGalleryItemsListener();
onGalleryItemClick();
createGalleryItem();

console.log(galleryItems);
