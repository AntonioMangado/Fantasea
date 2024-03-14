import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from '../../../../../api/axios';
import Card from '../../../SearchComp/SearchList/Card';
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
      <h2>Fantasy books</h2>
      <div className="book-list">
        {books.map((book) => (
        <Card
          key={uuidv4()}
          id={book.id} 
          title={book.title}
          author={book.author}
          year={book.year}
          image={book.image}/>
        ))}
      </div>
      
    </section>
  );
};

export default Fantasy;
