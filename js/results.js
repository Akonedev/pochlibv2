import { getDescription, getImage, addBookInMyList } from "./book.js";
import { cancelSection } from "./utils.js"
import { showMyList } from "./showMylist.js"

function showResults(data) {
    if (data.totalItems > 0) {
        if (!document.getElementById("results")) {
            const hrSeparator = document.getElementById("separator");
            const resultWrapper = document.createElement("div");
            const resultBooksWp = document.createElement("div");
            const titleResultWrapper = document.createElement("h2");
            resultWrapper.setAttribute("id", "results");
            titleResultWrapper.setAttribute("id", "titleResultWrapper");
            resultBooksWp.setAttribute("id", "resultsBooks");
            titleResultWrapper.innerHTML = `Résultats de recherche`;
            resultWrapper.appendChild(titleResultWrapper)
            resultWrapper.appendChild(resultBooksWp)
            hrSeparator.after(resultWrapper);

        }
        const search = data.items;

        search.map(el => {
            const apimode = "apiList";
            showMyList(el, apimode);
        });
        cancelSection("results");
    }
    else {
        const errorSection = document.createElement("div");
        errorSection.id = "error";
        errorSection.className = "error";
        errorSection.innerHTML = `<p class="center">Aucun livre trouvé</p>`
        document.getElementById("content").before(errorSection);
        cancelSection("error");
    }
}

export { showResults };