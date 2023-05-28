import { getDescription, getImage, addBookInMyList } from "./book.js";
import { cancelResultSection, cancelSearchSection, cancelErrorSection } from "./utils.js"
import { showMyList } from "./showMylist.js"

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
            const apimode = "apiList";
            showMyList(el, apimode);
        });
        cancelResultSection();
    }
    else {
        const errorSection = document.createElement('div');
        errorSection.id = 'results';
        errorSection.className = 'results';
        errorSection.innerHTML = `<p class="center">Aucun livre trouvé</p>`
        document.getElementById("resultsBooks").appendChild(errorSection);
        cancelErrorSection();
    }
    
}

export { showResults };