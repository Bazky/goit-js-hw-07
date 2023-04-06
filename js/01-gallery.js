// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// import * as basicLightbox from "basiclightbox";
// const gallery = document.querySelector(".gallery");

// // Tworzenie elementów galerii na podstawie tablicy galleryItems
// function createGalleryItem(item) {
//   const image = galleryItem.querySelector(".gallery__image");
//   const link = galleryItem.querySelector(".gallery__link");

//   image.src = item.preview;
//   image.dataset.source = item.original;
//   image.alt = item.description;
//   link.href = item.original;

//   return galleryItem;
// }

// // Dodawanie elementów galerii do kontenera
// function renderGalleryItems() {
//   const galleryItemsElements = galleryItems.map(createGalleryItem);
// }

// // Otwieranie okna modalnego po kliknięciu na element galerii
// function onGalleryItemClick(event) {
//   const imageSrc = event.target.dataset.source;
//   const instance = basicLightbox.create(`
//     <img src= "${imageSrc}" width="800" height="600">
//   `);
//   instance.show();
// }

// const prev = document.getElementById("prev");

// prev.addEventListener("click", (e) => {
//   preventDeafult();
// });

// renderGalleryItems();
// addGalleryItemsListener();

// console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "basiclightbox";

const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;
  image.width = 800;
  image.height = 600;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function renderGalleryItems() {
  const galleryItemsElements = galleryItems.map(createGalleryItem);
  gallery.append(...galleryItemsElements);
}

function onGalleryItemClick(event) {
  event.preventDefault();
  const imageSrc = event.target.getAttribute("src");
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);
  instance.show();
}

function addGalleryItemsListener() {
  gallery.addEventListener("click", onGalleryItemClick);
}

renderGalleryItems();
addGalleryItemsListener();
