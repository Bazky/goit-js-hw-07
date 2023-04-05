import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = item.fullview;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.alt;

  const caption = document.createElement("div");
  caption.classList.add("gallery__caption");
  caption.textContent = item.alt;
}
console.log(galleryItems);
