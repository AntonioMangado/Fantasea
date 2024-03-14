import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from '../../../../../api/axios';
import Card from '../../../SearchComp/SearchList/Card';
const GET_URBANFANTASY_BOOKS_URL = '/api/category/urbanfantasy';

const Urban = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(GET_URBANFANTASY_BOOKS_URL)
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className='individual-category-section'>
      <h2>Urban Fantasy books</h2>
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

export default Urban;
