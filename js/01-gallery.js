import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery__list");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");

// Render the gallery
galleryItems.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.alt = description;
  galleryImage.dataset.source = original;

  galleryLink.append(galleryImage);
  galleryItem.append(galleryLink);
  galleryList.append(galleryItem);

  // Block the default link behavior
  galleryLink.addEventListener("click", (event) => {
    event.preventDefault();
  });

  // Open the lightbox on click
  galleryLink.addEventListener("click", () => {
    lightboxImage.src = original;
    const lightboxInstance = basicLightbox.create(lightbox, {
      onShow: () => {
        document.body.style.overflow = "hidden";
      },
      onClose: () => {
        document.body.style.overflow = "auto";
      },
    });
    lightboxInstance.show();
  });
});
