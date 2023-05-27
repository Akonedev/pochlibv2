import { addBook } from "./book.js";

const newBook = document.querySelector(".newBook");
const newSeach = document.querySelector(".newBook");

function addBookSection() {
     const bSection = document.createElement("div");
     bSection.className = 'sAddBook';
     bSection.innerHTML = `<button id="addBook" class="btn">Ajouter un livre</button>`;
    newBook.after(bSection);
    addBook();


}

function addCancelButton()
{
    return `<button id="cancel" class="btn">Annuler</button>`;
}


function addSearchSection() {
    const cancel = addCancelButton();
     const sSection = document.createElement("div");
     sSection.className = 'sSearch';
     sSection.id = "sSearch";
    newSeach.innerHTML = `
        <form id="form">
        <label>Titre du livre</label><br>
        <input type="text" name="title" id="title" class="input" required><br>
        <label>Auteur</label><br>
        <input type="text" name="author" id="author" class="author" required><br>
        <button class="btn">Rechercher</button>
        </form> 
        ${cancel}      
       `;
       document.getElementById('addBook').remove();
        newSeach.after(sSection);

}


export { addBookSection, addSearchSection };