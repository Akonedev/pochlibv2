import { showResults } from "./showApiResults.js";

function search() {
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        // stop form submission
        event.preventDefault();
        
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
                showResults(data);
            })
    });
}

export { search };