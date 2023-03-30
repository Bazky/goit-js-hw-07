import { galleryItems } from "./gallery-items.js";
// Change code below this line

import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

import { galleryItems } from "./gallery-items";

const galleryList = document.querySelector(".gallery__list");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.setAttribute("href", item.original);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.setAttribute("src", item.preview);
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.setAttribute("alt", item.description);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains("gallery__image")) {
    const imageSrc = target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${imageSrc}" alt="" width="800" height="600">
    `);
    instance.show();
  }
});

console.log(galleryItems);
