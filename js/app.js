import { addBookBlock, addResultSection } from './utils.js';
import { showMyList } from "./showResult.js"

function main() {
  init();
  addResultSection();
}

function init() {
  const books = JSON.parse(sessionStorage.getItem('myPochList'));
  var form_being_submitted = false; /* global variable */

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