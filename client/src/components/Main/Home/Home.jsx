import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom'
import NewReleases from './NewReleases'
import Trending from './Trending'
import Categories from './Categories'

const Home = () => {

  let authenticated = localStorage.getItem("authenticated");

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <NewReleases/>
        <Trending/>
        <Categories/>
      </>
  );
  }
  
};

export default Home;
