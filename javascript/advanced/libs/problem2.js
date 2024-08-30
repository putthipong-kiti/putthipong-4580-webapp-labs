function Book(title, author) {
    this.title = title;
    this.author = author;
}

const Library = {
    titles: [],
    authors: [],
    addBook: function(book) {
        this.titles.push(book.title);
        this.authors.push(book.author);
        document.write("Added: " + book.title + "<br/>");
    },
    searchBooks: function(search) {
        found = false;
        for (let i = 0; i < this.titles.length; i++) {
            if (this.titles[i] === search || this.authors[i] === search) {
                document.write("Found: " + this.titles[i] + " by " + this.authors[i] + "<br/>");
                found = true;
            }
        } if (found === false) {
            document.write("Book with query " + search + " is not found" + "<br/>");
        }
    }
}

function displayBooks() {
    for (let i = 0; i < titles.length; i++) {
        document.write(`${i+1}. ${titles[i]} by ${author[i]} <br/>`);
    }
}

// Adding books to the library
Library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
Library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
Library.addBook(new Book("1984", "George Orwell"));
Library.addBook(new Book("Pride and Prejudice", "Jane Austen"));
Library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));


// Demonstrating functionality
document.write("<br/>Searching for the book with author 'Harper Lee':<br/>");
Library.searchBooks("Harper Lee");


document.write(
    "<br/>Searching for the book with title 'The Great Gastby':<br/>");
Library.searchBooks("The Great Gatsby");


document.write(
    "<br/>Searching for the book with title 'Design Thinking':<br/>");
Library.searchBooks("Design Thinking");


titles = Library.titles;
author = Library.authors
document.write("<br/>These are the books in the library:<br/>");
displayBooks();
