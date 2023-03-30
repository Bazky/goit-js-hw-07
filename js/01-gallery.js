import { galleryItems } from "./gallery-items.js";

const galleryItems = [
  {
    src: "https://picsum.photos/id/1003/800/800",
    alt: "Lorem ipsum dolor sit amet",
  },
  {
    src: "https://picsum.photos/id/1002/800/800",
    alt: "Consectetur adipiscing elit",
  },
  {
    src: "https://picsum.photos/id/1004/800/800",
    alt: "Sed do eiusmod tempor incididunt",
  },
  {
    src: "https://picsum.photos/id/1001/800/800",
    alt: "Ut labore et dolore magna aliqua",
  },
  {
    src: "https://picsum.photos/id/1005/800/800",
    alt: "Ut enim ad minim veniam",
  },
];

const gallery = document.querySelector(".gallery__items");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.src;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.src;
  galleryImage.alt = item.alt;
  galleryImage.dataset.source = item.src;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    const imageSrc = event.target.dataset.source;

    const lightbox = basicLightbox.create(`
        <img src="${imageSrc}">
      `);

    lightbox.show();
  }
});
