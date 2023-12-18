import { React, useContext } from "react";
import Logo from '../../../assets/logo.png'
import BurgerMenu from './BurgerMenu'
import { UserContext } from "../../../context/UserContext";
import { Link } from 'react-router-dom'

const Nav = () => {

  const { username } = useContext(UserContext);
  
  return (
  <nav>
    <div id="logo-container">
      <img src={Logo} alt="app-logo" />
    </div>
    <div id="end-container">
      {username != "" && username != null ?
      <><form action="http://localhost:3000/api/logout" method="get"><button type="submit">LOG OUT</button></form></>:
      <><Link to="/login"><button id="nav-login-btn">LOG IN</button></Link></>}
      <BurgerMenu/>
    </div>
  </nav>
  );
};

export default Nav;
