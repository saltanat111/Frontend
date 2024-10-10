const books = [
    { title: "War and Peace", author: "Leo Tolstoy", isAvailable: true },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", isAvailable: false },
    { title: "The Master and Margarita", author: "Mikhail Bulgakov", isAvailable: true },
    { title: "The Idiot", author: "Fyodor Dostoevsky", isAvailable: false }
  ];
  
  function getBooksByAuthor(books, author) 
  {
    return books
      .filter(book => book.author === author)  
      .map(book => book.title);
  }
  
  function countAvailableBooks(books) 
  {
    return books
      .filter(book => book.isAvailable)  
      .length; 
  }
  
  function lendBook(books, title) 
  { 
    const book = books.find(book => book.title === title);  
    
    if (book) {  
        if (book.isAvailable) 
          {
          book.isAvailable = false;  
          return `The book ${title} has been successfully lent!`;
        } 
        else 
        {
          return `The book ${title} is not available!`;
        }
    } 
    else 
    {
        return `The book ${title} was not found in the library!`;  
    }
  }
  
  console.log(getBooksByAuthor(books, "Fyodor Dostoevsky"));
  console.log(countAvailableBooks(books));
  console.log(lendBook(books, "War and Peace"));
  console.log(lendBook(books, "War and Peace"));