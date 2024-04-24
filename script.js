const myLibrary = [];

function Book(Name, 
    Author, 
    Page,
    
    Genre,
    Status,
    index 
    ) {
        this.Name = Name;
        this.Author = Author;
        this.Page = Page;
        this.Status = Status;
        this.Genre = Genre;
        this.index = index;

  // the constructor...
  

}

Book.prototype.prints = function () {
    return "add";
  }

function addBookToLibrary(Name, 
    Author, 
    Page,
    Status,
    Genre,
    index ) {
  // do stuff here
if ((typeof Name) == ("string")){
    let newBook = new Book(Name, 
        Author, 
        Page,
        Status,
        Genre,
    index )
        myLibrary.push(newBook)
}
else {
    myLibrary.push(Name)
}

  
}



addBookToLibrary("The Hobbit","J.R.R. Tolkien","295 pages","Fantasy","Not Read", 1)
let book2 = new Book("f","g","h","I","e")
let book3 = new Book("a","b","c","d","e")
let book4 = new Book("a","b","c","d","e")



let remove = function (parent, child){
    parent.removeChild(child) 
    
}

let clear = function () {

    let table = document.querySelector(".table")
    let listTable = table.querySelectorAll(".table>tr ")
    for (let x of listTable){
        remove(table, x)
    }


}






let core = function (book) {
    let childNode = document.createElement("tr")

    
    let index = document.createElement("td")
    index.textContent = book.index
    index.classList.add("index")
    childNode.appendChild(index)

    childNode.classList.add("created")
    let name = document.createElement("td")
    name.textContent = book.Name
    childNode.appendChild(name)
    let author = document.createElement("td")
    author.textContent = book.Author
    childNode.appendChild(author)
    let page = document.createElement("td")
    page.textContent = book.Page
    childNode.appendChild(page)
    
    let Genre = document.createElement("td")
    Genre.textContent = book.Genre
    childNode.appendChild(Genre)
    let status = document.createElement("td")
    status.textContent = book.Status
    childNode.appendChild(status)
    let ButtonRead =  document.createElement("td")
    let ReadB = document.createElement("button")
    ReadB.classList.add("ReadB")
    ButtonRead.classList.add("ReadB")
    ReadB.textContent = "READ"
    ButtonRead.appendChild(ReadB)

    let ButtonRemove =  document.createElement("td")
    let RemoveB = document.createElement("button")
    RemoveB.classList.add("RemoveB")
    ButtonRemove.classList.add("RemoveB")
    RemoveB.textContent = "REMOVE"
    ButtonRemove.appendChild(RemoveB)
    

    childNode.appendChild(ButtonRead)
    childNode.appendChild(ButtonRemove)
    let table = document.querySelector(".table")
    table.appendChild(childNode)
}
myLibrary.map(core)

let button = document.querySelector(".form")
button.addEventListener('click', function(e) {
    e.preventDefault();
    
});

button.addEventListener("click", ()=>{
    
    
    let Name = document.querySelector(".inputTable tr:nth-child(1) td:nth-child(1) div>input")
    let author = document.querySelector(".inputTable tr:nth-child(1) td:nth-child(2) div>input")
    let page = document.querySelector(".inputTable tr:nth-child(1) td:nth-child(3) div>input")
    let Genre = document.querySelector(".inputTable tr:nth-child(1) td:nth-child(4) div>input")
    
    if ((Name.value || author.value || page.value || Genre.value ) == ""){

    }
    else{
        addBookToLibrary(Name.value, 
            author.value, 
            page.value,
            Genre.value,"Not read", ((myLibrary.length) + 1));
    }

    
    
    
    clear()
    myLibrary.map(core)
    reapply()
    removes()
    
})


let reapply = function () {
    

let tab = document.querySelectorAll(".created")

for (let p of tab) {
    
    let ReadB = p.querySelector(".ReadB")
    let ReadB2 = ReadB.querySelector(".ReadB")
    let ind = p.querySelector(".index")
    
    ReadB2.addEventListener("click" , ()=> {
       
        myLibrary[(parseInt(ind.textContent) - 1)].Status = "Read"
        clear()
        myLibrary.map(core)
        reapply()
        removes()
       /***/
        
    } )

    
}
}


let removes = function () {
    

    let tab = document.querySelectorAll(".created")
    
    for (let p of tab) {
        
       
        let RemoveB = p.querySelector(".RemoveB")
        let RemoveB2 = RemoveB.querySelector(".RemoveB")
        let ind = p.querySelector(".index")
        
        RemoveB2.addEventListener("click" , ()=> {
            
            myLibrary.pop(ind)
            
            
            clear()
            myLibrary.map(core)
            removes()
            reapply()
           /***/
            
        } )
    
        
    }
    }






    removes()
reapply()

/*
let ReadB = p.querySelector(">.ReadB")
    let ReadB2 = p.querySelector(">.ReadB")
    let ind = p.querySelector(".index")
    ReadB2.addEventListener("click" , ()=> {
        console.log(p)
        ReadB2.classList.add(".crap")
    } )

*/