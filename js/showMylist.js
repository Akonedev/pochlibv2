import { getDescription, getImage, addBookInMyList, removeBookFromMyList } from "./book.js";

function showMyList(book, showmode) {
  let contentSection = "";

  const card = document.createElement('div');
  card.id = 'poch-' + book.id;
  card.className = 'card';

  const idBookCard = document.createElement('h4');
  idBookCard.innerText = "Id : " + book.id;
  idBookCard.className = 'card-id';

  const titleBookCard = document.createElement('h4');
  titleBookCard.innerText = "Titre : " + book.volumeInfo.title;
  titleBookCard.className = 'card-title';

  const authorBookCard = document.createElement('p');
  authorBookCard.innerText = "Auteur : " + book.volumeInfo.authors;
  authorBookCard.className = 'card-author';
  if (book.volumeInfo.authors > 1) {
    book.volumeInfo.authors = book.volumeInfo.authors.slice(0, 2);
  }

  const descriptionBookCard = document.createElement('p');
  descriptionBookCard.innerText = "Description : " + book.volumeInfo.description;
  descriptionBookCard.className = 'card-description';

  if (descriptionBookCard === '' || descriptionBookCard === 'undefined') {
    descriptionBookCard.innerText = "Information manquante";
  } else if (descriptionBookCard.innerText.length > 200) {
    descriptionBookCard.innerText = descriptionBookCard.innerText.substring(0, 200) + '...';
  }

  // const addBookmarkButton = document.createElement('div');
  let BookmarkButton;
  const addBookmarkButton = document.createElement('i');
  addBookmarkButton.setAttribute("class", "fa fa-bookmark");
  addBookmarkButton.setAttribute("id", "addToBookmark");

  const removeBookmarkButton = document.createElement('i');
  removeBookmarkButton.setAttribute("class", "fa fa-trash");
  removeBookmarkButton.setAttribute("id", "removeBookmarkButton");

  const imgCard = document.createElement('img');
  imgCard.className = 'card-img';

  if (book.volumeInfo.imageLinks === null || book.volumeInfo.imageLinks === undefined) {
    imgCard.src = 'img/unavailable.png';
  } else {
    imgCard.src = book.volumeInfo.imageLinks.thumbnail;
  }

  if (showmode == "apiList") {
    contentSection = document.getElementById("resultsBooks");
    BookmarkButton = addBookmarkButton;
  } else {
    contentSection = document.getElementById("content");
    BookmarkButton = removeBookmarkButton;
  }

  const headerCard = document.createElement('div');
  headerCard.className = 'card-header';
  headerCard.appendChild(idBookCard);
  headerCard.appendChild(titleBookCard);
  headerCard.appendChild(BookmarkButton);
  card.appendChild(headerCard);
  card.appendChild(authorBookCard);
  card.appendChild(descriptionBookCard);
  card.appendChild(imgCard);
  // pochList.appendChild(card);
  contentSection.appendChild(card);

  addBookmarkButton.onclick = function () {
    addBookInMyList(book);
  }
  removeBookmarkButton.onclick = function () {
    removeBookFromMyList(book);
  }

}
export { showMyList };