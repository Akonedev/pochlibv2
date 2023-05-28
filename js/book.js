import { addSearchSection } from "./utils.js";

function addBook() {
    document.getElementById('addBook').addEventListener('click', function () {
        addSearchSection();
    })
}

function getDescription(description) {
    if (description == undefined) {
        return 'Information manquante';
    }
    return description.slice(0, 200) + '...';
}

function getImage(image) {
    if (image == undefined) {
        image = 'img/unavailable.png';
        return image;
    }
    return image.smallThumbnail;
}

function addBookInMyList(book) {
    
    const books = JSON.parse(sessionStorage.getItem('myPochList'));

    if (!books) {
        sessionStorage.setItem('myPochList', JSON.stringify([]));
      } else {
        const found = books.find(e => e.id == book.id);  
        if (found) {
            alert('ce livre existe déjà dans votre pochlist');
            return;
        }else{
            books.push(book);
            sessionStorage.setItem('myPochList', JSON.stringify(books));
            alert("Le livre est ajouté dans votre pochlist");
        }
      }
    
   


    // const addBookmrk =  document.getElementById('addToBookmark');
    // addBookmrk.addEventListener('click', function () {
    //     // const id = this.attr('id');
    //     let value = 0;
    //     document.querySelector('my-book').each(function () {
    //         if(id === this.attr('id')) {
    //             alert('Ce livre a déjà été ajouté à votre liste');
    //             value = 1;
    //             return false;
    //         }
    //     });
    //     if(value == 0) {
    //         const parent = $(this).closest('.book').html();
    //         document.getElementById('content').append(`<div class="my-book" id="${id}">${parent}</div>`);
    //         replaceBookMark();
    //         removeBookInMyList();
    //         addInSessionStorage(id, parent);
    //     }
    // })
}

export { addBook, getDescription, getImage , addBookInMyList};