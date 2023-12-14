import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
  <section id="home-page">
    <h1>Welcome to Fantasea.</h1>
    <h3>Your cosy nook to escape reality</h3>
    <p>Explore our fantasy collection and find your next read, catered for you, handpicked for you.</p>
    <Link to='/search'>
      <button>Find your next adventure!</button>
    </Link>
  </section>
  );
};

export default Home;
