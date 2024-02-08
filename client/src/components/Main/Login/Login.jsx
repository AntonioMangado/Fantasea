import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import axios from "../../../api/axios";
import AuthContext from "../../../context/AuthProvider";
const LOGIN_URL = "api/login"

const Login = () => {

  const navigate = useNavigate()

  const { setAuth } = useContext(AuthContext)
  const errRef = useRef()

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    setErrMsg("")
  }, [email, pwd])

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ email, pwd }),
          {
              headers: { 'Content-Type': 'application/json' }
          })
      // console.log(response?.data)
      const username = response?.data?.username
      const userEmail = response?.data?.email
      const accessToken = response?.data?.accessToken
      setAuth({ username, userEmail, accessToken })
      setEmail("")
      setPwd("")
      navigate("/home")
      
  } catch (err) {
      if (!err?.response) {
          setErrMsg("No Server Response")
      } else if (err.response?.status === 400) {
          setErrMsg("Missing email or password")
      } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized")
      } else {
          setErrMsg("Login failed")
      }
      errRef.current.focus()
  }

  }

  return (
  <section id="login-section">
    
    <h2>Welcome to </h2><img src={Logo} alt="" id="login-logo"/>
    <h3>Login to start exploring.</h3>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <form onSubmit={handleLogin}>
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
      <button type="submit" disabled={ !email || !pwd ? true : false }>LOG IN</button>
    </form>
    <p>or <a href="/register">register</a> if you don't have an account.</p>
  </section>
  );
};

export default Login;
