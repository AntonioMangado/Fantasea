import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom'

const Home = () => {

  let authenticated = localStorage.getItem("authenticated");

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <section id="home-page">
        <div id="hero-container">
          <h1>Welcome to Fantasea.</h1>
          <h3>Your cosy nook to escape reality.</h3>
        </div>
        <p>Explore our fantasy collection and find your next read, catered for you, handpicked for you.</p>
        <Link to='/search'>
          <button>Find your next adventure!</button>
        </Link>
      </section>
  );
  }
  
};

export default Home;
