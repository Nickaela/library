const myLibrary = [
    {title: "Ikigai", author: "Joseph", pages: 1},
    {title: "Ikiga", author: "Josep", pages: 1},
];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(){
    const theBook = new Book("Abakada", "Josephine", 10);
    myLibrary.push(theBook);
}

addBookToLibrary()

console.log(myLibrary)


const content = document.querySelector(".content");


myLibrary.forEach((library) => {
    const output = document.createElement("div");
    output.classList.add("library")
    content.appendChild(output);

    for (const property in library) {
        const bookDeets = document.createElement("div");
        output.appendChild(bookDeets);
        bookDeets.textContent = (`${property}: ${library[property]}`)
    }

});

const dialog = document.querySelector("#bookDialog");
const showBtn = document.querySelector("#showDialog");
const closeBtn = document.querySelector("dialog button");
const submit = document.querySelector("#submit");
const outputBox = document.querySelector("output");
const input = document.querySelector("input");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("close", (e) => {
    outputBox.value = dialog.returnValue === "default"
    ? "No return value."
    : `${dialog.returnValue}`;
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close(input.value);
});
