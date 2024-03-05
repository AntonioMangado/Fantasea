import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom'
import NewReleases from './NewReleases'
import Trending from './Trending'

const Home = () => {

  let authenticated = localStorage.getItem("authenticated");

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <NewReleases/>
        <Trending/>
      </>
  );
  }
  
};

export default Home;
