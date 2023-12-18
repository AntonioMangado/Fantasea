import * as React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { UserContext } from '../../../../context/UserContext';
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const BurgerMenu = () => {

  const location = useLocation();
  const userName = new URLSearchParams(location.search).get('user');
  console.log(userName)
  const {username, setUsername} = React.useContext(UserContext)

  React.useEffect(() => {
    setUsername(userName)
  }, [userName])
    
    const myMoviesURL = `mymovies/u?user=${username}`
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right >
        <a id="home" className="menu-item" href="/home">HOME</a>
        <a id="about" className="menu-item" href={myMoviesURL}> MY MOVIES</a>
      </Menu>
    );
  
}
export default BurgerMenu;
