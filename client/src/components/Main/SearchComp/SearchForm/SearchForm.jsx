import React from "react";

const SearchForm = () => {
  return (
  <article id="search-form">
    <form>
      <h3>What are you looking for?</h3>
      <input type="text" name="book"/>
      <button type="submit">SEARCH</button>
    </form>
  </article>
  );
};

export default SearchForm;
