import { addSearchSection } from "./utils.js";
import { showMyList } from "./showResult.js"
import createModal  from "./createModal.js";
const container = document.getElementById("myBooks");

function addBook() {
    document.getElementById("addBook").addEventListener("click", function () {
        addSearchSection();
    })
}

function getDescription(description) {
    if (description == undefined) {
        return "Information manquante";
    }
    return description.slice(0, 200) + '...';
}

function getImage(image) {
    if (image == undefined) {
        image = "img/unavailable.png";
        return image;
    }
    return image.smallThumbnail;
}

function addBookInMyList(book) {
    const books = JSON.parse(sessionStorage.getItem("myPochList"));
    const found = books.find(e => e.id == book.id);
    
    if (found) {
        let fmessage = `Le livre  ${book.volumeInfo.title}  existe déjà dans votre pochlist`;
        // createModal(container, fmessage);
        alert(fmessage);
        return;
    } else {
        books.push(book);
        sessionStorage.setItem("myPochList", JSON.stringify(books));
        const smode = "mylist";
        showMyList(book, smode);
        let amessage =`Le livre  ${book.volumeInfo.title}  est ajouté dans votre pochlist`;
        // createModal(container, amessage);
        alert(amessage);
    }
    
}

function removeBookFromMyList(book) {
    const cardToDelete = document.getElementById("poch-" + book.id);
    let rmessage = "";
    cardToDelete.parentElement.removeChild(cardToDelete);    
    rmessage =`Le livre  ${book.volumeInfo.title} sera supprimé de votre pochlist`;
    // createModal(container, rmessage);
    alert(rmessage);
   
    let books = JSON.parse(sessionStorage.getItem("myPochList"));
    books = books.filter((b) => b.id != book.id);
    sessionStorage.setItem("myPochList", JSON.stringify(books));
}
export { addBook, getDescription, getImage, addBookInMyList, removeBookFromMyList };