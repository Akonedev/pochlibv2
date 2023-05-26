function addBookSection()
{
    const bSection = document.createElement("div");
     bSection.innerHTML = `  
        <div id="addBookSection">
            <button id="addBook" class="btn">Ajouter un livre</button>
        </div>`;
        const newBook = document.querySelector(".newBook"); 
        newBook.after(bSection);

}

export {addBookSection};