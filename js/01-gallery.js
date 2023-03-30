import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItems = [
  {
    src: "images/image1.jpg",
    alt: "Image 1",
  },
  {
    src: "images/image2.jpg",
    alt: "Image 2",
  },
  {
    src: "images/image3.jpg",
    alt: "Image 3",
  },
];

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.src;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = `${item.src.replace(/\.jpg$/, "-thumb.jpg")}`;
  galleryImage.dataset.source = item.src;
  galleryImage.alt = item.alt;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const imageURL = event.target.dataset.source;
    const modal = basicLightbox.create(`<img src="${imageURL}" alt="" />`);
    modal.show();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const modal = document.querySelector(".basicLightbox");
    if (modal) {
      modal.dispatchEvent(new Event("close"));
    }
  }
});

console.log(galleryItems);
