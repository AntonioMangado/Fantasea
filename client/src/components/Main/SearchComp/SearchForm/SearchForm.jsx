import React from "react";
import axios from 'axios'

const SearchForm = ({updateList}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = e.target.book.value;
    let res = await axios.get(`http://localhost:3000/api/books/${query}`)
    let data = res.data // => [{}, {}, {}...]
    // Tratamiento de datos
    let books = data.map(item => ({
      id: item.id,
      title: item.title,
      author: item.author,
      genre: item.genre,
      year: item.year,
      image: item.image
    }))
    // console.log(books)
    updateList(books)
  }

  return (
  <article id="search-form">
    <form onSubmit={handleSubmit}>
      <h3>What are you looking for?</h3>
      <input type="text" name="book"/>
      <button type="submit">SEARCH</button>
    </form>
  </article>
  );
};

export default SearchForm;
