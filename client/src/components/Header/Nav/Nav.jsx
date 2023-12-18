import { React, useContext } from "react";
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
    <div id="end-container">
      {username != "" ?
      <><form action="http://localhost:3000/api/logout" method="get"><button type="submit">LOG OUT</button></form></>:[]}
      <img id="bg-menu-pic" src={BurgerMenuPic} alt="" />
    </div>
    
  </nav>
  );
};

export default Nav;
