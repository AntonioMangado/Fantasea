import { useContext, useState, useEffect, useRef  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import BackChevron from "../../../assets/icons/back-chevron.svg"
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

  const navigateLogin = () => {
    navigate("/login")
  }

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
    <img onClick={navigateLogin} src={BackChevron} alt="Go back chevron" />
    <h3>Create account</h3>
    <p>Please fill the following details</p>
    <form onSubmit={handleRegister}>
      <input 
          type="text" 
          name="username"
          id="username" 
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required/>
      <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          autoComplete="off"/>
      <input 
          type="password" 
          name="password"
          id="password" 
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)} 
          value={pwd}/>
      <input 
          type="password" 
          name="password2"
          id="password2" 
          placeholder="Confirm password"
          onChange={(e) => setPwd2(e.target.value)} 
          value={pwd2}/>
      <button type="submit" className="btn-white" disabled={ !username || !email || !pwd || !pwd2 ? true : false }>CREATE ACCOUNT</button>
    </form>
  </section>
  );
};

export default Register;
