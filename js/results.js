import { getDescription, getImage } from "./book.js";

function showResults(data) {

    const hrSeparator = document.querySelector('hr');
    if (!document.getElementById("results")) {
        const resultWrapper = document.createElement('div');
        resultWrapper.setAttribute("id", "results");
        resultWrapper.innerHTML = `<h2>Résultats de recherche</h2><div id="resultsBooks"></div>`;
        hrSeparator.after(resultWrapper);
    }

    if (data.totalItems > 0) {
        const search = data.items;
        search.forEach(el => {
            const displayWrapper = document.createElement('div');
            displayWrapper.setAttribute("id", "results");
            displayWrapper.setAttribute("class", "book");
            displayWrapper.innerHTML = `
            <div class="book-top">
            <div class="book-top-left">
            <h3>Titre: </h3>
            <p class="id">Id: ${el.id}</p>
            <p>Auteur: ${el.volumeInfo.authors[0]}</p>
            </div>
            <div class="book-top-right">
            <i class="fas fa-bookmark"></i>
            </div>
            </div>
            <div class="book-bottom">
            <p>Description: ${getDescription(el.volumeInfo.description)}</p>
            <p class="center"><img src="${getImage(el.volumeInfo.imageLinks)}" alt="${el.volumeInfo.title}"></p>
            </div>`;
            document.getElementById("resultsBooks").append(displayWrapper);
        });
    }
    else {
        document.getElementById("resultsBooks").append('<p class="center">Aucun livre trouvé</p>');
    }
}

export { showResults };