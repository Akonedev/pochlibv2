import { addBook } from "./book.js";
import { apiSearch } from "./ApiSearch.js";

/**
 * The utils functions . use to create template strucutre
 * Add book section, Result section Search Section, Cancel Section
 */

const newBook = document.getElementById("newBook");

function addBookSection() {
    const bSection = document.createElement("div");
    bSection.setAttribute("class", "sAddBook");
    bSection.innerHTML = `<button id="addBook" class="btn">Ajouter un livre</button>`;
    newBook.after(bSection);
    addBook();
}

function addResultSection() {
    const hrSeparator = document.getElementById("separator");
    const resultWrapper = document.createElement("div");
    resultWrapper.setAttribute("id", "results");

    const resultBooksWp = document.createElement("div");
    resultBooksWp.setAttribute("id", "results-books");

    const titleResultWrapper = document.createElement("h2");
    titleResultWrapper.setAttribute("id", "titleResultWrapper");

    titleResultWrapper.innerHTML = `Résultats de recherche`;
    resultWrapper.appendChild(titleResultWrapper)
    titleResultWrapper.hidden = true;
    resultWrapper.appendChild(resultBooksWp)
    hrSeparator.after(resultWrapper);
}

function addSearchSection() {
    const sSection = document.createElement("div");
    sSection.className = "sSearch";
    sSection.id = "sSearch";
    sSection.innerHTML = `
        <form id="form">
        <label>Titre du livre</label><br>
        <input type="text" name="title" id="title" class="input" required><br>
        <label>Auteur</label><br>
        <input type="text" name="author" id="author" class="author" required><br>
        <div><button class="btn" id="searchBtn" type="submit">Rechercher</button></div>
        <div><button id="cancel" class="btn">Annuler</button></div>        
        </form>        
       `;
    document.getElementById("addBook").remove();
    newBook.after(sSection);
    cancelSearchSection();

    apiSearch();
}

function cancelSearchSection() {
    document.getElementById("cancel").addEventListener("click", function () {
        document.getElementById("sSearch").remove();
        window.location.reload(true)
    });
}


function cancelSection(sMode) {
    document.getElementById("cancel").addEventListener("click", function () {
        document.getElementById(sMode).remove();
    });
}
export { addBookSection as addBookBlock, addSearchSection, cancelSearchSection, cancelSection, addResultSection };