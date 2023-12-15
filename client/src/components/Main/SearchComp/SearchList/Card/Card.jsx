import React from "react";

const Card = ({ title, author, year, image }) => {
  return (
  <article className="card">
    <img src={image} alt={title} className="search-cover-img"/>
    <div className="main-info">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{year}</p> 
    </div>
  </article>
  );
};

export default Card;