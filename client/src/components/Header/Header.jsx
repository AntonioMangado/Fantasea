import { useContext } from "react";
import Nav from './Nav'
import AuthContext from "../../context/AuthProvider";


const Header = () => {

  const { auth } = useContext(AuthContext)

  return (
  <>
    {auth.username 
        ? <header><Nav/></header>
        : <></>
      }
  </>
  );
};

export default Header;
