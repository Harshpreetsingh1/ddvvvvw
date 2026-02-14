import { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'S. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = (e) => {
    e.preventDefault();

    if (bookTitle.trim() === '' || author.trim() === '') {
      alert('Please enter both book title and author');
      return;
    }

    const newBook = {
      id: Date.now(),
      title: bookTitle,
      author: author
    };

    setBooks([...books, newBook]);

    setBookTitle('');
    setAuthor('');
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Library Management System</h1>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <form className="add-book-form" onSubmit={addBook}>
          <input
            type="text"
            className="form-input"
            placeholder="Book Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-input"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit" className="add-button">
            Add Book
          </button>
        </form>

        <div className="book-list">
          {filteredBooks.length === 0 ? (
            <p className="no-books">No books found</p>
          ) : (
            filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-info">
                  <h2 className="book-title">{book.title}</h2>
                  <p className="book-author">by {book.author}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeBook(book.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
