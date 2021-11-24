import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://the-one-api.dev/v2/book')
    .then(response => response.json())
    .then(books => setBooks([...books.docs]))
  }, [])

  function showBooks () {
    return (
        books.map(book => {
          return <li key={book._id}>{book.name}</li>
        })
    )
  }

  return (
    <div className="App">
      <h1>One Web App To Rule Them All</h1>
      <h2>Books:</h2>
      {showBooks()}
    </div>
  );
}

export default App;
