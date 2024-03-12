import React, { useEffect, useState } from 'react';
import axios from '../../../../../api/axios';
const GET_FANTASY_BOOKS_URL = '/api/category/fantasy';

const Fantasy = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(GET_FANTASY_BOOKS_URL)
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className='individual-category-section'>
      <h1>Fantasy books</h1>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </section>
  );
};

export default Fantasy;
