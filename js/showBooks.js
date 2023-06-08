import { getDescription, getImage, addBookInMyList, removeBookFromMyList } from "./book.js";

/**
 * The show book function :Create html structure to the list of books
 * from the api search or from the session storage
 * @param {book} book - The book to display.
 * @param {showmode} showmode -search from api or search from session storage.
 */
function showBooks(book, showmode) {
  let contentSection;
  let BookmarkButton;

  const content = document.getElementById("content");
  contentSection = document.getElementById("myBookList");
  const myBookList = document.createElement("myBookList");
  myBookList.setAttribute("id", "myBookList");

  content.appendChild(myBookList);

  const card = document.createElement("div");
  // card.id = "poch-" + book.id;
  // card.className = "card book my-book";

  const cardTop = document.createElement("div");
  cardTop.className = "card-header";

  const cardTopLeft = document.createElement("div");
  cardTopLeft.className = "card-top-left";

  const cardTopRight = document.createElement("div");
  cardTopRight.className = "card-top-right";

  const cardTBottom = document.createElement("div");
  cardTBottom.className = "card-title book-bottom";

  const bookId = document.createElement("h4");
  bookId.innerText = "Id : " + book.id;
  bookId.className = "card-id";

  const bookTitle = document.createElement("h4");
  bookTitle.innerText = "Titre : " + book.volumeInfo.title;
  bookTitle.className = "card-title";

  const bookAuthor = document.createElement("p");
  bookAuthor.innerText = "Auteur : " + book.volumeInfo.authors;
  bookAuthor.className = "card-author";
  if (book.volumeInfo.authors > 1) {
    book.volumeInfo.authors = book.volumeInfo.authors.slice(0, 2);
  }

  const bookDescription = document.createElement("div");
  bookDescription.setAttribute("class", "bookDescription card-description");

  const bookDescriptionPar = document.createElement("p");
  bookDescriptionPar.setAttribute("class", "bookDescriptionPar");

  bookDescriptionPar.innerText = "Description : " + book.volumeInfo.description;

  if (bookDescriptionPar === "" || bookDescriptionPar === "undefined") {
    bookDescriptionPar.innerText = "Information manquante";
  } else if (bookDescriptionPar.innerText.length > 200) {
    bookDescriptionPar.innerText = bookDescriptionPar.innerText.substring(0, 200) + '...';
  }

  // let BookmarkButton;
  const addBookmarkButton = document.createElement("i");
  addBookmarkButton.setAttribute("class", "fa fa-bookmark");
  addBookmarkButton.setAttribute("id", "addToBookmark");

  const removeBookmarkButton = document.createElement("i");
  removeBookmarkButton.setAttribute("class", "fa fa-trash");
  removeBookmarkButton.setAttribute("id", "removeBookmarkButton");

  const bookImg = document.createElement("img");
  bookImg.className = "card-img book-bottom";

  if (book.volumeInfo.imageLinks === null || book.volumeInfo.imageLinks === undefined) {
    bookImg.src = "img/unavailable.png";
  } else {
    bookImg.src = book.volumeInfo.imageLinks.thumbnail;
  }

  console.log(" showmode  " + showmode);
  if (showmode == "apiList") {
    if (document.getElementById("results-books")) {
      contentSection = document.getElementById("results-books");
      card.id = "apiResult-" + book.id;
      card.className = "card book my-book";
    }
    BookmarkButton = addBookmarkButton;
  } else {
    if (document.getElementById("myBookList")) {
      contentSection = document.getElementById("myBookList");
      card.id = "mybook-" + book.id;
      card.className = "card book my-book";
    }
    BookmarkButton = removeBookmarkButton;
  }

  cardTopLeft.appendChild(bookId);
  cardTopLeft.appendChild(bookTitle);
  cardTopRight.appendChild(BookmarkButton);
  cardTop.appendChild(cardTopLeft);
  cardTop.appendChild(cardTopRight);
  cardTBottom.appendChild(bookImg);

  bookDescription.appendChild(bookDescriptionPar);
  cardTBottom.appendChild(bookDescription);

  card.appendChild(cardTop);
  card.appendChild(cardTBottom);
  contentSection.appendChild(card);


  addBookmarkButton.addEventListener("click", function () {
    addBookInMyList(book);
  })

  removeBookmarkButton.addEventListener("click", function (e) {
    removeBookFromMyList(book.id);
  })
  contentSection = "";
}
export { showBooks };