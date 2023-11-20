// Define an array to store the books
const books = [
    { id: 1, title: 'Start with why', author: 'Simon Sinek', price: 80.0, quantity: 13 },
    { id: 2, title: 'But how do it know', author: 'J. Clark Scott', price: 59.9, quantity: 22 },
    { id: 3, title: 'Clean Code', author: 'Robert Cecil Martin', price: 50.0, quantity: 5 },
    { id: 4, title: 'Zero to One', author: 'Peter Thiel', price: 45.0, quantity: 12 },
    { id: 5, title: `You don't know JS`, author: 'Kyle Simpson', price: 39.9, quantity: 9 }
  ];
  
  // Function to add a new book
  function addBook(book) {
    books.push(book);
  }
  
  // Function to update a book
  function updateBook(id, updatedBook) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
    }
  }
  
  // Function to delete a book
  function deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
    }
  }
  
  // Function to query a book by id, title, or author
  function queryBook(query) {
    return books.filter(book => {
      return (
        book.id === query ||
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
  
  // Function to sell book(s) and generate an invoice
  function sellBooks(bookTitle, quantity, balance) {
    const book = books.find(book => book.title.toLowerCase() === bookTitle.toLowerCase());
    if (book && book.quantity >= quantity && balance >= book.price * quantity) {
      book.quantity -= quantity;
      const totalAmount = book.price * quantity;
      console.log('Invoice:');
      console.log('--------------------------------------');
      console.log('Book Title:', book.title);
      console.log('Quantity:', quantity);
      console.log('Total Amount:', totalAmount);
      console.log('--------------------------------------');
    } else {
      console.log('Book not available or insufficient quantity/balance.');
    }
  }
  
  // cllaing functions
  console.log("List of Books:");
  console.log(books);
  addBook({ id: 6, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', price: 55.0, quantity: 8 });
  updateBook(3, { price: 55.0 });
  deleteBook(5);
  const searchResults = queryBook('start');
  console.log(searchResults);
  sellBooks('Start with why', 5, 500.0);