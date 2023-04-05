import { galleryItems } from "./gallery-items.js";
// Change code below this line

const prevent = document.getElemenById("prevent");
prevent.addEventListener("click", (e) => {
  e.preventDeafult();
});

const gallery = document.querySelector(".gallery");
const galleryList = document.querySelector(".gallery__list");

// Tworzenie elementów galerii na podstawie tablicy galleryItems
function createGalleryItem(item) {
  const template = document.querySelector("#gallery-item-template");
  const galleryItem = template.content.cloneNode(true);
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
  galleryList.append(...galleryItemsElements);
}

// Otwieranie okna modalnego po kliknięciu na element galerii
function onGalleryItemClick(event) {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
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
