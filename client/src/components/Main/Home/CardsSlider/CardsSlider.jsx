import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "../../SearchComp/SearchList/Card";

const CardsSlider = ({books}) => {

  const renderBooks = () => {
    return books.map((book) => (
      <Card
        key={uuidv4()}
        id={book.id} 
        title={book.title}
        author={book.author}
        year={book.year}
        image={book.image}/>
    ))
  }

  return <article className="card-slider">{books.length > 0 ? renderBooks() : <p>There are no books</p>}</article>;
};

export default CardsSlider;
