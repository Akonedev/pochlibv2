import { replaceBookMark } from './utils';
import { showBooks } from "./showBooks.js";

function addInSessionStorage(book)
{
    const found = sessionStorage.getItem("book.id");
    //Récupérer identifiant et contenu
    // sessionStorage.setItem(id, content);

    if (found) {
        let fmessage = `Le livre  ${book.volumeInfo.title}  existe déjà dans votre pochlist`;
        alert(fmessage);
        return;
    } else {
        sessionStorage.setItem(book.id, book.volumeInfo.title);
    const smode = "mylist";
    showBooks(book, smode);
    let amessage = `Le livre  ${book.volumeInfo.title}  est ajouté dans votre pochlist`;
//     alert(amessage);
    }
}

function getInSessionStorage()
{
    for (let i = 0; i < sessionStorage.length; i++) {
        let id = sessionStorage.key(i);
        let value = sessionStorage.getItem(id);
        $("#content").append(`<div class="my-book" id="${id}"> ${value}</div>`);
    }
    replaceBookMark();
}

function removeInSessionStorage(id)
{
    sessionStorage.removeItem(id);
}

export {addInSessionStorage, getInSessionStorage, removeInSessionStorage};