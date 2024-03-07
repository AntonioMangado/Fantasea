import React from "react";
import { Link } from 'react-router-dom'

const Card = ({ id, title, author, year, image }) => {

  const queryUrl = `/search/details/${id}?title=${title}&author=${author}`
  return (
  <Link to={queryUrl} > 
    <article className="card">
      <div className="book-cover">
      <img 
        src={image}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png";
        }}
      />
      </div>
      <div className="book-info">
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </article>
  </Link>
  );
};

export default Card;