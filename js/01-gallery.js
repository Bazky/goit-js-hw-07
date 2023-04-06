import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "basiclightbox";
const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
  const image = document.querySelector(".gallery__image");
  const link = document.querySelector(".gallery__link");

  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;
  link.href = item.original;
}

function renderGalleryItems() {
  const galleryItemsElements = galleryItems.map(createGalleryItem);
}

function onGalleryItemClick(event) {
  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src= "${imageSrc}" width="800" height="600">
  `);
  instance.show();
}

const prev = document.getElementById("prev");

prev.addEventListener("click", (e) => {
  preventDeafult();
});

renderGalleryItems();
addGalleryItemsListener();

console.log(galleryItems);
