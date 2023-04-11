import { galleryItems } from "./gallery-items.js";

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

const gallery = document.querySelector(".gallery");
const html = galleryItems.map(createGalleryItem);
gallery.append(...html);

const options = {
  captions: true,
  captionsDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery a", options);
