import { React, useContext, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from "../../../context/UserContext";

const Home = () => {
  
  const { setUsername } = useContext(UserContext);
  const location = useLocation();
  const userName = new URLSearchParams(location.search).get('user');
  setUsername(userName)
  

  // Intento de sacar el usuario antes de darme cuenta de que ya lo tenia sacado con la linea 8.
  // useEffect(() => {
  //   const getUser = async () => {
  //   let res = await axios.get(`http://localhost:3000/api/users/${userName}`)
  //   let user = res.data;
  //   console.log(user)
  //   }
  // getUser()
  // }, [userName])

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
};

export default Home;
