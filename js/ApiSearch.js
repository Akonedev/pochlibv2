import { cancelSection, addResultSection } from "./utils.js"
import { showBooks } from "./showBooks.js"

/**
 * Search into the API. Get the result and call the display function
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {url} = API url
 */

async function search() {
    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        // stop form submission
        event.preventDefault();

        if (document.getElementById("results-books") || document.getElementById("error")) {
            document.getElementById("results-books").innerHTML = "";
        }

        let url = "";
        let title = "";
        let author = "";
        url = "https://www.googleapis.com/books/v1/volumes?q=";
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        url = url + title + author;

        const res = fetch(url)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("titleResultWrapper").hidden = false;
                if (data.totalItems > 0) {
                    const search = data.items;

                    //Mapping Boucle
                    search.map(el => {
                        const apimode = "apiList";
                        showBooks(el, apimode);
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
            })
        const divider = document.createElement("hr");
        document.getElementById("content").firstChild.before(divider);
    });

}
export { search };