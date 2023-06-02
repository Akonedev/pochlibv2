import { addBookBlock, addResultSection } from './utils.js';
import { showMyList } from "./showBooks.js"



/**
 * Start :Initialisation Get books stored in the session storage if there's any
 * Call the display function to display books
 */
function main() {
  init();
  addResultSection();
}

function init() {
  const books = JSON.parse(sessionStorage.getItem('myPochList'));

  if (!books) {
    sessionStorage.setItem('myPochList', JSON.stringify([]));
  }
  else {
    books.map((b) => {
      showMyList(b);
    }
    );
  }
  addBookBlock();
}
main();