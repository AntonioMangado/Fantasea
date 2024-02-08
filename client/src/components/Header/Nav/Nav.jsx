import { React, useContext } from "react";
import Logo from '../../../assets/logo.png'
import BurgerMenu from './BurgerMenu'
import AuthContext from "../../../context/AuthProvider";
import { Link } from 'react-router-dom'

const Nav = () => {

  const { auth } = useContext(AuthContext)
  
  return (
  <nav>
    <div id="logo-container">
      <img src={Logo} alt="app-logo" />
    </div>
    <div id="end-container">
      {auth.username != "" && auth.username != null ?
      <><form action="http://localhost:3000/api/logout" method="get"><button type="submit">LOG OUT</button></form></>:
      <><Link to="/login"><button id="nav-login-btn">LOG IN</button></Link></>}
      <BurgerMenu/>
    </div>
  </nav>
  );
};

export default Nav;
