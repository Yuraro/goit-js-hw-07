import { galleryItems } from './gallery-items.js';

    const galleryListEllements = document.querySelector('.gallery');

    galleryListEllements.innerHTML = makeGallery(galleryItems);
    galleryListEllements.addEventListener("click", onImgClick);

    function makeGallery(params) {
        return params
        .map((param) => {
            return `<li class="gallery__item">
            <a class="gallery__link" href="${param.original}">
                <img class="gallery__image" src="${param.preview}" alt="${param.description}">
            </a>
            </li>`;
        })
        .join("");
    }

    function onImgClick(event) {
        if (event.target.className !== "gallery__image") {
        return;
        }
        event.preventDefault();
        const modal = new SimpleLightbox(`.gallery .gallery__link`, {
        caption: true,
        captionsData: "alt",
        captionDelay: 250,
        });
        modal.open();
    }

    console.log(galleryItems);