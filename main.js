/* Pseudocode: -> Create book object (objects stored in a array) 
-> Get user data from form -> Create new book object -> display new object */

const bookForm = document.querySelector(".book-form");
const myLibrary = [];
const noBooksRows = document.createElement("tr");
noBooksRows.id = "no-data-row";
const noBookData = document.createElement("td");
noBookData.id = "no-data";
const tableBody = document.querySelector("#tableBody");
let flag = false;
let counter = 0;
/* Event listeners */

bookForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const bookNameInput = document.querySelector("[name='book-name']").value;
    const bookAuthorInput = document.querySelector("[name='book-author']").value;
    const bookPagesInput = document.querySelector("[name='book-pages']").value;
    const bookStatusCheckbox = document.querySelector("[name='status']");

    const bookStatusState = bookStatusCheckbox.checked ? true : false;

    const newBook = new Book(bookNameInput, bookAuthorInput, bookPagesInput, bookStatusState);
    appendBook(newBook);
    checkList();
    displayBooks(myLibrary);
});


document.addEventListener("DOMContentLoaded", () => {
    checkList();
})

/* Functions */

function Book(bookName, bookAuthor, bookPages, bookStatus){
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookStatus = bookStatus;
}

function appendBook(book){
    myLibrary.push(book)
}

function displayBooks(Array){
    const bookArray = Array;
    for(counter; counter < bookArray.length; counter++){
        const currentBook = bookArray[counter];
        currentBookName = currentBook.bookName;
        currentBookAuthor = currentBook.bookAuthor;
        currentBookPages = currentBook.bookPages;
        currentBookStatus = currentBook.bookStatus;
        const dynamicRow = document.createElement("tr");
        dynamicRow.classList.add("appended-row");
        dynamicRow.id=`${counter}`;
        const tableDataName = document.createElement("td");
        const tableDataAuthor = document.createElement("td");
        const tableDataPages = document.createElement("td");
        const tableDataStatus = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.id = `${counter}`;
        deleteButton.innerHTML = "Delete"
        tableDataName.innerHTML = currentBookName
        tableDataAuthor.innerHTML = currentBookAuthor
        tableDataPages.innerHTML = currentBookPages
        tableDataStatus.innerHTML = currentBookStatus
        tableBody.append(dynamicRow);
        dynamicRow.append(tableDataName, tableDataAuthor, tableDataPages, tableDataStatus, deleteButton);
    
        /*
        for(let j=0; j < 7; j++){
            const tableData = document.createElement("td");
            tableData.id = `${i}`;
            dynamicRow.append(tableData);
            tableBody.append(dynamicRow);
        };*/
    };
}

function checkList(){
    if(flag == false){
        if(myLibrary.length === 0){
            noBookData.innerHTML = "Curiouser and curiouser! Looks like this list is<br> still waiting for its adventures to begin.<br> Ready to take the plunge down the<br> rabbit hole and add your first book?";
            noBooksRows.append(noBookData);
            tableBody.append(noBooksRows);
        }else{
            flag = true;
            tableBody.removeChild(noBooksRows);
        };
    };
}
