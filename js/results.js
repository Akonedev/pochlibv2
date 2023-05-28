import { getDescription, getImage, addBookInMyList } from "./book.js";

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
        search.map(el => {
            const bookWrapper = document.createElement('div');
            bookWrapper.setAttribute("id", "results");
            bookWrapper.setAttribute("class", "book");

            const bookTop = document.createElement('div');
            bookTop.setAttribute("class", "book-top");

            const bookTopLeft = document.createElement('div');
            bookTopLeft.setAttribute("class", "book-top-left");
            bookTopLeft.innerHTML= `
            <h3>Titre: ${el.volumeInfo.title}</h3>
            <p class="id">Id: ${el.id}</p>
            <p>Auteur: ${el.volumeInfo.authors[0]}</p>`

            const bookTopRight = document.createElement('div');
            bookTopRight.setAttribute("class", "book-top-right");

            const fabkmark = document.createElement('i');
            fabkmark.setAttribute("class", "fa fa-bookmark");
            fabkmark.setAttribute("id", "addToBookmark");

            bookTopRight.appendChild(fabkmark);

            const hrSeparator = document.createElement('hr');

            const bookBottom = document.createElement('div');
            bookBottom.setAttribute("class", "book-bottom");
            bookBottom.innerHTML = `<p>Description: ${getDescription(el.volumeInfo.description)}</p>
            <p class="center"><img src="${getImage(el.volumeInfo.imageLinks)}" alt="${el.volumeInfo.title}"></p>`

            bookWrapper.appendChild(bookTop);
            bookTop.appendChild(bookTopLeft);
            bookTop.appendChild(bookTopRight);
            bookWrapper.appendChild(hrSeparator);
            bookWrapper.appendChild(bookBottom);

            document.getElementById("resultsBooks").append(bookWrapper);
           
            //Bookmark
            fabkmark.onclick = function () {
            addBookInMyList(el);
          }
        });
        // addBookInMyList();
    }
    else {
        document.getElementById("resultsBooks").append('<p class="center">Aucun livre trouvé</p>');
    }
}

export { showResults };