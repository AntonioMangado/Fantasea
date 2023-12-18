import { React, useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import axios from "axios"

const MovieList = () => {

  const location = useLocation();
  const userName = new URLSearchParams(location.search).get('user');
  const [userList, setUserList] = useState({})

  let covers = {
    read: [],
    toread: [],
    reading: [],
  }

  useEffect(() => {
    const getUserLists = async () => {
      let res = await axios.get(`http://localhost:3000/api/users/${userName}`)
      let data = res.data;
      const userLists = {
        read: data.read,
        reading: data.reading,
        toread: data.toread
      }
      setUserList(userLists)
    }
    getUserLists()
    const getBookCovers = async () => {
      for await (const book of userList.read) {
        let readRes = await axios.get(`http://localhost:3000/api/books/${book}`);
        
        let info = readRes.data[0];
        let cover = info.image;
        covers.read.push(cover)
      }

      for await (const book of userList.reading) {
        let readingRes = await axios.get(`http://localhost:3000/api/books/${book}`);
        
        let info = readingRes.data[0];
        let cover = info.image;
        covers.reading.push(cover)
      }

      for await (const book of userList.toread) {
        let toReadRes = await axios.get(`http://localhost:3000/api/books/${book}`);
        
        let info = toReadRes.data[0];
        let cover = info.image || "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg";
        covers.toread.push(cover)
      }
      console.log(covers)
    }
    getBookCovers()
  },[userName])


  return (
  <section id="fav-books-container">
    {covers.read.length == 0 && covers.reading.length == 0 && covers.toread.length == 0 ? 
    <><h2>You didn't save any books</h2></> :
    <>
      <article id="read-section">
        <h3>READ</h3>
        <div></div>
      </article>
      <article id="reading-section">
        <h3>READING</h3>
        <div></div>
      </article>
      <article id="toread-section">
        <h3>TO READ</h3>
        <div></div>
      </article>
    </>}
  </section>
  );
};

export default MovieList;
