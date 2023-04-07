import { galleryItems } from "./gallery-items.js";

function renderGalleryItems() {
  const galleryItemsElements = galleryItems.map(createGalleryItem);
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = `<div class="gallery">
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg"
        data-source="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg"
        alt="Hokkaido Flower"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg"
        alt="Container Haulage Freight"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg"
        alt="Aerial Beach View"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg"
        alt="Flower Blooms"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg"
        alt="Alpine Mountains"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg"
        alt="Mountain Lake Sailing"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg"
        alt="Alpine Spring Meadows"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg"
        alt="Nature Landscape"
      />
    </a>
  </div>
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg"
    >
      <img
        width="340"
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg"
        alt="Lighthouse Coast Sea"
      />
    </a>
  </div>
</div>`;
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
addGalleryItemsListener();

console.log(galleryItems);
