function addBookSection()
{
    const bSection = document.createElement("div");
     bSection.innerHTML = `  
        <div id="sAddBook">
            <button id="addBook" class="btn">Ajouter un livre</button>
        </div>`;
        const newBook = document.querySelector(".newBook"); 
        newBook.after(bSection);
 

}
function addSearchSection()
{
    const cancel = addCancelButton();
    const sSection = `<div id="sSearch">
        <form id="form">
        <label>Titre du livre</label><br>
        <input type="text" name="title" id="title" class="input" required><br>
        <label>Auteur</label><br>
        <input type="text" name="author" id="author" class="author" required><br>
        <button class="btn">Rechercher</button>
        </form>       
        </div>`;
 
        const newSeach = document.querySelector(".newBook"); 
        newSeach.after(sSection);

}


export {addBookSection};