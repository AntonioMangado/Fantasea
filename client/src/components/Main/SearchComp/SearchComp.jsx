import React, {useState, useEffect} from "react";
import SearchForm from './SearchForm'
import SearchList from './SearchList'



const SearchComp = () => {

  const [bookList, setBookList] = useState([])

  const updateBookList = (data) => {
    setBookList(data)
  }

  return (
  <section id="search-container">
    <SearchForm updateList={updateBookList}/>
    <SearchList bookList={bookList}/>
  </section>
  );
};

export default SearchComp;
