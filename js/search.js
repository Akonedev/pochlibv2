import { getApiResults } from "./getApiResults.js";

async function search() {
    const form = document.getElementById("form");
    // const searchBtn = document.getElementById("searchBtn");
    
    form.addEventListener("submit", (event) => {
        // stop form submission
        event.preventDefault();
       

        if (document.getElementById("results-books") || document.getElementById("error")){
           document.getElementById("results-books").innerHTML= ""; 
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
                getApiResults(data);
            })
            const divider = document.createElement("hr");
            document.getElementById("content").firstChild.before(divider);
    });

}

export { search };