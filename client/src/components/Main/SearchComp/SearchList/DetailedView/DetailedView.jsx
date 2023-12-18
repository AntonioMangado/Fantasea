import { React, useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import axios from "axios"
import DropDownMenu from "./DropDownMenu";

const DetailedView =  () => {

  const location = useLocation();
  const bookTitle = new URLSearchParams(location.search).get('title');
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      let res = await axios.get(`https://fantasea.onrender.com/api/books/${bookTitle}`)
      let data = res.data // => [{}]
      setBook(data)
    }
    getBook()
  }, [bookTitle]);

  return (
    <section id="detailed-view">
      { book.length != 0 ? 
        <>
          <img src={book[0].image} alt={book[0].title} id="detailed-view-img"/>
          <div id="main-info-cont">
            <h2 id="title">{book[0].title}</h2>
            <h2 id="author">by {book[0].author}, {book[0].year}.</h2>
            <p>{book[0].description}</p>
            <p id="genre">Genre: {book[0].genre}</p>
            <DropDownMenu book={book}/>
          </div>
        </> : [] }
    </section>
  );
};

export default DetailedView;
