const myLibrary = [
    {title: "Ikigai", author: "Joseph", pages: 1},
    {title: "The Daily Stoic", author: "Ryan Holiday", pages: 78},
];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(a, b, c){
    const theBook = new Book(a, b, c);
    myLibrary.push(theBook);
}


const content = document.querySelector(".content");

function arrayBook(){

    content.innerHTML = "";
    
myLibrary.forEach((library) => {
    const output = document.createElement("div");
    output.classList.add("library")
    content.appendChild(output);

    for (const property in library) {
        const bookDeets = document.createElement("div");
        output.appendChild(bookDeets);
        bookDeets.textContent = (`${property}: ${library[property]}`);
       
    }

     let id = crypto.randomUUID();

    const iddiv = document.createElement("div");
    iddiv.classList.add("theId")
    iddiv.setAttribute("data-number", id);
    output.appendChild(iddiv)



const button = document.createElement("button");
        button.textContent = "Remove";
        output.appendChild(button);

        
        const theId = document.querySelector(".theId");

function theButton() {
      button.addEventListener("click", () => {
            console.log(theId.dataset.number)
        })
}

    theButton();
});

};





const dialog = document.querySelector("#bookDialog");
const showBtn = document.querySelector("#showDialog");
const closeBtn = document.querySelector("dialog button");
const submitBtn = document.querySelector("#submit");
let t = document.querySelector("#title");
let a = document.querySelector("#author");
let p = document.querySelector("#pages");

const form = document.getElementById("myForm");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary(t.value, a.value, p.value);
    arrayBook();
    t.value = "";
    a.value = "";
    p.value = "";
    dialog.close();
});



arrayBook();