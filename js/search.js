import { showResults } from "./results.js";

function search()
{
    const form  = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        // stop form submission
        event.preventDefault();

        var url = "https://www.googleapis.com/books/v1/volumes?q=";
        var title = document.getElementById('title').value;
        var author = document.getElementById('author').value;
        url = url + title + author;

        const res = fetch(url)
        .then((res) => res.json())
        .then((data) => {
            showResults(data);
        })
    });
}

export {search};