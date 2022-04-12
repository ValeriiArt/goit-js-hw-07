import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

// console.log(galleryRef)

const galleryList = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="Image ${description}"
                    />
                </a>
            </div>`
}).join('');

// console.log(galleryList)

galleryRef.insertAdjacentHTML("beforeend", galleryList);

galleryRef.addEventListener('click', clickOnImg);

function clickOnImg(event) {
    event.preventDefault();
    const imageSource = event.target.dataset.source;
    const imgClassList = event.target.classList.value;
    
    if( imgClassList === "gallery__image"){
        
        const instance = basicLightbox.create(
            `<img src="${imageSource}" width="800" height="600">`
        );
        instance.show();
    }
    
}

