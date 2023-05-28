import { getDescription, getImage, addBookInMyList } from "./book.js";
import { cancelSection } from "./utils.js"
import { showMyList } from "./showMylist.js"

function showResults(data) {

    const hrSeparator = document.querySelector("hr");
    if (!document.getElementById("results")) {
        const resultWrapper = document.createElement("div");
        const resultBooksWp = document.createElement("div");
        const titleResultWrapper = document.createElement("h2");
        resultWrapper.setAttribute("id", "results");
        titleResultWrapper.setAttribute("id", "titleResultWrapper");
        // resultBooksWp.setAttribute("id", "resultsBooks"); 
        
        titleResultWrapper.innerHTML = `Résultats de recherche`;
        // titleResultWrapper.appendChild(resultBooksWp)
        resultWrapper.appendChild(titleResultWrapper)
        hrSeparator.after(resultWrapper);

    }

    if (data.totalItems > 0) {
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
        document.getElementById("results").appendChild(errorSection);
        cancelSection("error");
    }    
}

export { showResults };