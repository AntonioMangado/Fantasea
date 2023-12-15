import { React, useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import axios from "axios"

const DetailedView =  () => {

  const location = useLocation();
  const bookTitle = new URLSearchParams(location.search).get('title');
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      let res = await axios.get(`http://localhost:3000/api/books/${bookTitle}`)
      let data = res.data // => [{}]
      setBook(data)
    }
    getBook()
  }, [bookTitle]);

  return (
    <section id="detailed-view">
      { book.length != 0 ? 
        <>
          <img src={book[0].image} alt={book[0].name}/>
          <h1>{book[0].name}</h1>
          <h2>{book[0].author}</h2>
          <h2>{book[0].genre}</h2>
          <h3>{book[0].year}</h3>
          <p>{book[0].description}</p>
          <button>READ</button>
          <button>TO READ</button>
          <button>READING</button>
        </> : [] }
    </section>
  );
};

export default DetailedView;
