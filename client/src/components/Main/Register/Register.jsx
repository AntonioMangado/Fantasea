import { useContext, useState, useEffect, useRef  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import Logo from '../../../assets/logo.png'
import AuthContext from "../../../context/AuthProvider";
const REGISTER_URL = "api/users";

const Register = () => {

  const navigate = useNavigate()
  const { setAuth } = useContext(AuthContext)
  const errRef = useRef()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [pwd2, setPwd2] = useState("")
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    setErrMsg("")
  }, [email, pwd])

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (pwd == pwd2) {
        const response = await axios.post(REGISTER_URL,
          JSON.stringify({ username, email, pwd, pwd2 }),
          {
              headers: { 'Content-Type': 'application/json' }
          })
        const usernameForAuth = response?.data?.username
        const userEmail = response?.data?.email
        const accessToken = response?.data?.accessToken
        setAuth({ username: usernameForAuth, userEmail, accessToken })
        localStorage.setItem("authenticated", true)
        setUsername("")
        setEmail("")
        setPwd("")
        setPwd2("")
        navigate("/home")
      }
    } catch (error) {
      console.log(error)
      setErrMsg("Registration failed")
    }
  }

  return (
  <section id="register-section">
    <img src={Logo} alt="" id="register-logo"/>
    <h3>Create an account.</h3>
    <form onSubmit={handleRegister}>
      <label htmlFor="username">Username</label>
      <input 
          type="text" 
          name="username"
          id="username" 
          placeholder="Your username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required/>
      <label htmlFor="email">Email</label>
      <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Your email..." 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          autoComplete="off"/>
      <label htmlFor="password">Password</label>
      <input 
          type="password" 
          name="password"
          id="password" 
          placeholder="Your password..."
          onChange={(e) => setPwd(e.target.value)} 
          value={pwd}/>
      <label htmlFor="password2">Repeat your password</label>
      <input 
          type="password" 
          name="password2"
          id="password2" 
          placeholder="Repear your password..."
          onChange={(e) => setPwd2(e.target.value)} 
          value={pwd2}/>
      <button type="submit">Register</button>
    </form>
  </section>
  );
};

export default Register;
