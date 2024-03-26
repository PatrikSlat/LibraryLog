/* Pseudocode: -> Create book object (objects stored in a array) 
-> Get user data from form -> Create new book object -> display new object */

const bookForm = document.querySelector(".book-form");

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const bookNameInput = document.querySelector("[name='book-name']").value;
    const bookAuthorInput = document.querySelector("[name='book-author']").value;
    const bookPagesInput = document.querySelector("[name='book-pages']").value;
    const bookStatusCheckbox = document.querySelector("[name='status']");

    const bookStatus = bookStatusCheckbox.checked ? true : false;

    console.log(bookAuthorInput, bookNameInput, bookStatus, bookPagesInput);
});


