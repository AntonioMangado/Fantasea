import React from "react";
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';

const SearchList = ({ bookList}) => {

  const renderCards = () => {
    return bookList.map(item => (
      <Card 
            key={uuidv4()}
            id={item.id}
            title={item.title} 
            author={item.author} 
            year={item.year} 
            image={item.image}/>
    ))
  }
  return <section id="card-container">{renderCards()}</section>;
};

export default SearchList;
