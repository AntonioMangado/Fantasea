import { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import { Link } from 'react-router-dom'

const Nav = () => {

  const { auth } = useContext(AuthContext)
  
  return (
  <nav>
    <div id="welcome-container">
      <p>Welcome,</p>
      <h2>{auth.username}</h2>
    </div>
    <div id="search-bar-container">
      <input type="text" name="search-bar" id="search-bar" />
    </div>
  </nav>
  );
};

export default Nav;
