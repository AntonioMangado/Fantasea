import { useContext, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import AuthContext from '../../../../context/AuthProvider'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const BurgerMenu = () => {

  const { auth } = useContext(AuthContext)
  
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right >
        <a id="home" className="menu-item" href="/home">HOME</a>
        <a id="about" className="menu-item" href="#"> MY MOVIES</a>
      </Menu>
    );
  
}
export default BurgerMenu;
