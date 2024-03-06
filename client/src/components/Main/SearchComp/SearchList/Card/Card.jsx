import React from "react";
import { Link } from 'react-router-dom'

const Card = ({ id, title, author, year, image }) => {

  const queryUrl = `/search/details/${id}?title=${title}&author=${author}`
  return (
  <Link to={queryUrl}> 
    <article className="card">
      <div className="book-cover">
        <img src={image} alt={title} className="search-cover-img"/>
      </div>
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </article>
  </Link>
  );
};

export default Card;