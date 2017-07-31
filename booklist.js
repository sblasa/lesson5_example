var titleName = document.getElementById("book-title"),
    authorFName = document.getElementById("author-first"),
    authorLName = document.getElementById("author-last"),
    addBtn = document.getElementById("add-button"),
    displayDiv = document.getElementById("book-list"),
    bookList = [];

var Book = function Book (titleName, authorFName, authorLName){
    this.titleName = titleName;
    this.authorFName = authorFName;
    this.authorLName = authorLName;

    this.greetFormally = function greetFormally() {
        return "This is the book title:" + this.titleName
        + "and the author's name is " + authorFName + " " 
        + authorLName
        + " \n";
    }

    this.toString = function toString(){
        return "Book title: <em>" + this.titleName + "</em>" + " and the author is " 
        + this.authorFName + " " + this.authorLName;
    }
}

var displayBooks = function displayCustomers(){
    displayDiv.innerHTML= "";

    for(var i = 0; i < bookList.length; i++){
        var curBook = bookList[i];
        displayDiv.innerHTML += curBook.toString() + "<br/>";
    }
}

addBtn.addEventListener("click", function(){
    var newBook = new Book(titleName.value,
        authorFName.value,
        authorLName.value);
    bookList.push(newBook);  
    displayBooks();

}); 