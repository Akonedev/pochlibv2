import {addSearchSection} from "./utils.js";

function addBook()
{
    document.getElementById('addBook').addEventListener('click', function () {
        addSearchSection();
      })
}
export {addBook};