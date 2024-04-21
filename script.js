const myLibrary = [];

function Book(Name, 
    Author, 
    Page,
    Status,
    Genre 
    ) {
        this.Name = Name;
        this.Author = Author;
        this.Page = Page;
        this.Status = Status;
        this.Genre = Genre;

  // the constructor...
  

}

Book.prototype.prints = function () {
    return "add";
  }

function addBookToLibrary(Name, 
    Author, 
    Page,
    Status,
    Genre ) {
  // do stuff here
if ((typeof Name) == (String)){
    let newBook = new Book(Name, 
        Author, 
        Page,
        Status,
        Genre )
        myLibrary.push(newBook)
}
else {
    myLibrary.push(Name)
}

  
}



let book1 = new Book("a","b","c","d","e")
let book2 = new Book("f","g","h","I","e")
let book3 = new Book("a","b","c","d","e")
let book4 = new Book("a","b","c","d","e")

addBookToLibrary(book1)
addBookToLibrary(book2)
let core = function (book) {
    let childNode = document.createElement("tr")
    let name = document.createElement("td")
    name.textContent = book.Name
    childNode.appendChild(name)
    let author = document.createElement("td")
    author.textContent = book.Author
    childNode.appendChild(author)
    let page = document.createElement("td")
    page.textContent = book.Page
    childNode.appendChild(page)
    let status = document.createElement("td")
    status.textContent = book.Status
    childNode.appendChild(status)
    let Genre = document.createElement("td")
    Genre.textContent = book.Genre
    childNode.appendChild(Genre)
    let ButtonRead =  document.createElement("td")
    let ReadB = document.createElement("button")
    ReadB.textContent = "READ"
    ButtonRead.appendChild(ReadB)
    childNode.appendChild(ButtonRead)
    let table = document.querySelector(".table")
    table.appendChild(childNode)
}
myLibrary.map(core)

let table = document.querySelector(".table")
let childNode = document.createElement("tr")
let chh = document.createElement("td")
chh.textContent = "ehbehfbefhfbfehf"

childNode.appendChild(chh)
table.appendChild(childNode) 
