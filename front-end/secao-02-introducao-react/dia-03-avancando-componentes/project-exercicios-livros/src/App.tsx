import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Title from './components/title';
import Button from './components/button/Button';
import { booksList, bestMovie }  from './data';

import './App.css';


function App() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookPages, setBookPages] = useState(0)
  const [books, setBooks] = useState(booksList)

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }

  function handleAddClick(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(event.target.valueAsNumber)
  }

  function handlePagesChange() {
      const newBook = {
        title: bookTitle,
        pages: bookPages,
        isRead: false,
        isFavorite: false,
      };

      setBooks([...books, newBook]);
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          Meus livros:
        </Title>
        <ul className="books-list">
          {books.map((book) => (
            <Book key={book.title} book={book} />
          ))}
        </ul>
        <input 
        type="text" 
        placeholder='Titulo'
        value={bookTitle}
        onChange={handleNameChange}
        />

        <input 
        type="number" 
        placeholder='Quantidade de páginas'
        value={bookPages}
        onChange={handlePagesChange}
        />

        <Button 
        onClick={handleAddClick}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
