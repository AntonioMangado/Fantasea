import React from "react";
import BurgerMenu from './BurgerMenu'
import Logo from '../../../assets/logo.png'
import BurgerMenuPic from '../../../assets/burger-menu.png'

const Nav = () => {
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
