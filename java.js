const myLibrary = [
    new Book("Ikigai", "Joseph", 1),
    new Book("The Daily Stoic", "Ryan Holiday", 78),
];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = true;
    
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
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
    output.dataset.id = library.id;

    content.appendChild(output);


    for (const property in library) {
        if (property === "id") continue;
        if (property === "toggleRead") continue;

        const bookDeets = document.createElement("div");
        output.appendChild(bookDeets);
        bookDeets.textContent = (`${property}: ${library[property]}`);
    
    }

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = library.read ? "Read" : "Not Read";
    output.appendChild(toggleBtn)

    toggleBtn.addEventListener("click", () => {
        const id = output.dataset.id;
        const book = myLibrary.find(b => b.id === id);
        book.toggleRead();
        arrayBook();
    });

    const button = document.createElement("button");
    button.textContent = "Remove";
    output.appendChild(button)
    
    button.addEventListener("click", () => {
        const id = output.dataset.id;
        const index = myLibrary.findIndex(book => book.id === id);
        myLibrary.splice(index, 1);
        arrayBook();
    });
});
};

arrayBook();






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
