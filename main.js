/* Pseudocode: -> Create book object (objects stored in a array) 
-> Get user data from form -> Create new book object -> display new object */

const bookForm = document.querySelector(".book-form");
const myLibrary = []

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const bookNameInput = document.querySelector("[name='book-name']").value;
    const bookAuthorInput = document.querySelector("[name='book-author']").value;
    const bookPagesInput = document.querySelector("[name='book-pages']").value;
    const bookStatusCheckbox = document.querySelector("[name='status']");

    const bookStatusState = bookStatusCheckbox.checked ? true : false;

    const newBook = new Book(bookNameInput, bookAuthorInput, bookPagesInput, bookStatusState);
    //console.log(bookAuthorInput, bookNameInput, bookStatus, bookPagesInput);
    appendBook(newBook);
});

function Book(bookName, bookAuthor, bookPages, bookStatus){
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookStatus = bookStatus;
}

function appendBook(book){
    myLibrary.push(book)
    console.log(myLibrary);
}

document.addEventListener("DOMContentLoaded", () => {
    if(myLibrary.length === 0){
        const noBooksRows = document.createElement("tr");
        noBooksRows.id = "no-data-row"
        const noBookData = document.createElement("td");
        noBookData.id = "no-data";
        noBookData.innerHTML = "Curiouser and curiouser! Looks like this list is<br> still waiting for its adventures to begin.<br> Ready to take the plunge down the<br> rabbit hole and add your first book?"
        noBooksRows.append(noBookData);
        const tableBody = document.querySelector("#tableBody");
        tableBody.append(noBooksRows)
    }
})