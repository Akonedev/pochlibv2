import { addBookSection } from './utils.js';
import { showMyList } from "./showMylist.js"

function main() {
  init();
  addBookSection();
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
}
main();