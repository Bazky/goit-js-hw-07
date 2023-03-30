import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItems = [
  {
    preview: "img/preview-1.jpg",
    original: "img/original-1.jpg",
    description: "Description 1",
  },
  {
    preview: "img/preview-2.jpg",
    original: "img/original-2.jpg",
    description: "Description 2",
  },
  {
    preview: "img/preview-3.jpg",
    original: "img/original-3.jpg",
    description: "Description 3",
  },
  {
    preview: "img/preview-4.jpg",
    original: "img/original-4.jpg",
    description: "Description 4",
  },
  {
    preview: "img/preview-5.jpg",
    original: "img/original-5.jpg",
    description: "Description 5",
  },
  {
    preview: "img/preview-6.jpg",
    original: "img/original-6.jpg",
    description: "Description 6",
  },
];

const gallery = document.querySelector(".gallery");

const galleryItemTemplate = ({ preview, original, description }) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
    </div>
  `;

const galleryMarkup = galleryItems.map(galleryItemTemplate).join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== "IMG") {
    return;
  }

  const basicLightboxInstance = basicLightbox.create(`
      <img src="${target.dataset.source}" alt="${target.alt}" />
    `);

  basicLightboxInstance.show();
}
import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
console.log(galleryItems);
