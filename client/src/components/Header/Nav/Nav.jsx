import { React, useContext } from "react";
// import Cookies from 'js-cookie'
import BurgerMenu from './BurgerMenu'
import Logo from '../../../assets/logo.png'
import BurgerMenuPic from '../../../assets/burger-menu.png'
import { UserContext } from "../../../context/UserContext";

const Nav = () => {

  const { username } = useContext(UserContext);
  
  return (
  <nav>
    <div id="logo-container">
      <img src={Logo} alt="app-logo" />
      <span>Fantasea.</span>
    </div>
    <img id="bg-menu-pic" src={BurgerMenuPic} alt="" />
  </nav>
  );
};

export default Nav;
