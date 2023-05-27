import {addSearchSection} from "./utils.js";

function addBook()
{
    document.getElementById('addBook').addEventListener('click', function () {
        addSearchSection();
      })
}

function getDescription(description)
{
    if(description == undefined) {
        return 'Information manquante';
    }
    return description.slice(0, 200) +'...';
}

function getImage(image)
{
    if(image == undefined) {
        image = 'img/unavailable.png';
        return image;
    }
    return image.smallThumbnail;
}

export {addBook, getDescription, getImage};