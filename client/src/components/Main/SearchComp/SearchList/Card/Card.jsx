import React from "react";
import { Link } from 'react-router-dom'

const Card = ({ id, title, author, year, image }) => {

  const queryUrl = `/search/details/${id}?title=${title}&author=${author}`
  return (
  <Link to={queryUrl}> 
    <article className="card">
      <img src={image} alt={title} className="search-cover-img"/>
      <div className="main-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{year}</p> 
      </div>
    </article>
  </Link>
  );
};

export default Card;