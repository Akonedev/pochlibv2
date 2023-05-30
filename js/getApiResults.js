import { getDescription, getImage, addBookInMyList } from "./book.js";
import { cancelSection, addResultSection } from "./utils.js"
import { showMyList } from "./showResult.js"

async function getApiResults(data) {
   
    // if (!document.getElementById("results")) {
    //     const hrSeparator = document.getElementById("separator");
    //     const resultWrapper = document.createElement("div");
    //     resultWrapper.setAttribute("id", "results");

    //     const resultBooksWp = document.createElement("div");
    //     resultBooksWp.setAttribute("id", "results-books");

    //     const titleResultWrapper = document.createElement("h2");            
    //     titleResultWrapper.setAttribute("id", "titleResultWrapper");

    //     titleResultWrapper.innerHTML = `Résultats de recherche`;
    //     resultWrapper.appendChild(titleResultWrapper)
    //     resultWrapper.appendChild(resultBooksWp)
    //     hrSeparator.after(resultWrapper);

    // }
    if (data.totalItems > 0) {
        const search = data.items;

        //Mapping Boucle
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
        document.getElementById("results-books").appendChild(errorSection);
        cancelSection("error");
    }
}

export { getApiResults };