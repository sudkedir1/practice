// === 1. DATA LAYER (This was missing from your snippet) ===
const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// === 2. DOM REFERENCES ===
const dialog = document.querySelector("#book-dialog");
const newBookBtn = document.querySelector("#new-book-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const bookForm = document.querySelector("#book-form");
const libraryContainer = document.querySelector("#library-container");

// === 3. EVENT LISTENERS ===
newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  bookForm.reset();
  dialog.close();
});

// === 4. DISPLAY LAYER ===
function displayBooks() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    const titleEl = document.createElement("h3");
    titleEl.textContent = book.title;

    const authorEl = document.createElement("p");
    authorEl.textContent = `Author: ${book.author}`;

    const pagesEl = document.createElement("p");
    pagesEl.textContent = `Pages: ${book.pages}`;

    const readEl = document.createElement("p");
    readEl.textContent = book.read ? "Status: Read" : "Status: Not Read Yet";

    card.appendChild(titleEl);
    card.appendChild(authorEl);
    card.appendChild(pagesEl);
    card.appendChild(readEl);

    libraryContainer.appendChild(card);
  });
}

// Optional: Add two starter books so you can see them immediately on load
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
displayBooks();