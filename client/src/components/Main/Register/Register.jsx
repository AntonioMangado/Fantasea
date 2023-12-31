import { React, useContext  } from "react";
import Logo from '../../../assets/logo.png'
import { UserContext } from "../../../context/UserContext";

const Register = () => {

  // const { username, updateUsername } = useContext(UserContext);

  // const handleChange = (e) => {
  //   let newUsername = e.target.value;

  //   updateUsername(newUsername)
  // }

  return (
  <section id="register-section">
    <img src={Logo} alt="" id="register-logo"/>
    <h3>Create an account.</h3>
    <form action="https://fantasea.onrender.com/api/users" method="post">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="Your username..."/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="Your email..."/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Your password..."/>
      <label htmlFor="password2">Repeat your password</label>
      <input type="password" name="password2" placeholder="Your password..."/>
      <button type="submit">Register</button>
    </form>
  </section>
  );
};

export default Register;
