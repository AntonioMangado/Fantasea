import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";


const Footer = () => {

  const { auth } = useContext(AuthContext)



  return (
  <>
    {auth.username 
        ? <footer><p>Fantasea.</p><p>2023, ™️</p></footer>
        : <></>
    }
  </>
  );
};

export default Footer;
