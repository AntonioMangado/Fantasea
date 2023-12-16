import React from "react";
import Logo from '../../../assets/logo.png'

const Register = () => {
  return (
  <section id="register-section">
    <img src={Logo} alt="" id="register-logo"/>
    <h2>Create an account.</h2>
    <form action="">
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Your username..."/>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Your email..."/>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Your password..."/>
      <label htmlFor="password2">Repeat your password</label>
      <input type="password2" placeholder="Your password..."/>
      <button type="submit">Register</button>
    </form>
  </section>
  );
};

export default Register;
