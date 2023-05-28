import { addSearchSection } from "./utils.js";
import { showMyList } from "./showMylist.js"

function addBook() {
    document.getElementById('addBook').addEventListener('click', function () {
        addSearchSection();
    })
}

function getDescription(description) {
    if (description == undefined) {
        return 'Information manquante';
    }
    return description.slice(0, 200) + '...';
}

function getImage(image) {
    if (image == undefined) {
        image = 'img/unavailable.png';
        return image;
    }
    return image.smallThumbnail;
}

function addBookInMyList(book) {

    const books = JSON.parse(sessionStorage.getItem('myPochList'));
    const found = books.find(e => e.id == book.id);
    if (found) {
        alert('ce livre ${book.volumeInfo.title} existe déjà dans votre pochlist');
        return;
    } else {
        books.push(book);
        sessionStorage.setItem('myPochList', JSON.stringify(books));
        const smode = "mylist";
        showMyList(book, smode);
        alert(`Le livre  ${book.volumeInfo.title} est ajouté dans votre pochlist`);
    }
}

function removeBookFromMyList(book) {
    const cardToDelete = document.getElementById('poch-' + book.id);
    cardToDelete.parentElement.removeChild(cardToDelete);
    alert(`Le livre  ${book.volumeInfo.title} sera supprimé de votre pochlist`);
    let books = JSON.parse(sessionStorage.getItem('myPochList'));
    books = books.filter((b) => b.id != book.id);
    sessionStorage.setItem('myPochList', JSON.stringify(books));
}
export { addBook, getDescription, getImage, addBookInMyList, removeBookFromMyList };