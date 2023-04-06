import { galleryItems } from "./gallery-items.js";

function renderGalleryItems() {
  const galleryItemsElements = galleryItems.map(createGalleryItem);
}

function createGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
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

renderGalleryItems();
createGalleryItem();
onGalleryItemClick();
addGalleryItemsListener();

console.log(galleryItems);
