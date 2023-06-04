import { addSearchSection } from "./utils.js";
import { showBooks } from "./showBooks.js"

/**
 * Get the book parameters : 
 *  Title, 
 *  Author, 
 *  Image, 
 *  Description
 * function add a book to the session storage
 * Function ti remove a book from the session storage
 */

const container = document.getElementById("myBooks");
function addBook() {
    document.getElementById("addBook").addEventListener("click", function () {
        addSearchSection();
        if (document.getElementById("sAddBook")){
            document.getElementById("sAddBook").remove();
        }

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
        alert(fmessage);
        return;
    } else {
        books.push(book);
        sessionStorage.setItem("myPochList", JSON.stringify(books));
        const smode = "mylist";
        showBooks(book, smode);
        let amessage =`Le livre  ${book.volumeInfo.title}  est ajouté dans votre pochlist`;
        alert(amessage);
    }
    
}

function removeBookFromMyList(e, book,) {
    // const cardToDelete = document.getElementById("poch-" + book.id);
    // const cardToDelete = this.closest('.my-book');
    alert
    let rmessage = "";
    // cardToDelete.parentElement.removeChild(cardToDelete); 
    e.target.closest('.my-book').remove();   
    console.log ("e.target : " + e.target)
    rmessage =`Le livre  ${book.volumeInfo.title} sera supprimé de votre pochlist`;
    alert(rmessage);
   
    let books = JSON.parse(sessionStorage.getItem("myPochList"));
    books = books.filter((b) => b.id != book.id);
    sessionStorage.setItem("myPochList", JSON.stringify(books));
}
export { addBook, getDescription, getImage, addBookInMyList, removeBookFromMyList };