import { addBook } from "./book.js";
import { search } from "./search.js";

const newBook = document.querySelector(".newBook");
const newSeach = document.querySelector(".newBook");

function addBookSection() {
    const bSection = document.createElement("div");
    bSection.setAttribute("class", "sAddBook");
    bSection.innerHTML = `<button id="addBook" class="btn">Ajouter un livre</button>`;
    newBook.after(bSection);
    addBook();
}

function addCancelButton() {
    return `<button id="cancel" class="btn">Annuler</button>`;
}


function addSearchSection() {
    const cancel = addCancelButton();
    const sSection = document.createElement("div");
    sSection.className = 'sSearch';
    sSection.id = "sSearch";
    sSection.innerHTML = `
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
    cancelSearchSection();
    search();
}

function cancelSearchSection() {
    document.getElementById('cancel').addEventListener('click', function () {
        document.getElementById('sSearch').remove();
        addBookSection();
    });
}

function cancelResultSection() {
    document.getElementById('cancel').addEventListener('click', function () {
        document.getElementById('results').remove();
    })
}
function cancelErrorSection() {
    document.getElementById('cancel').addEventListener('click', function () {
        document.getElementById('results').remove();
    })
    
}

export { addBookSection, addSearchSection, cancelSearchSection, cancelResultSection, cancelErrorSection };