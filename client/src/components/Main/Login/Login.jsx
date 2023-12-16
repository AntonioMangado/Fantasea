import React from "react";
import Logo from '../../../assets/logo.png'

const Login = () => {
  return (
  <section id="login-section">
    <img src={Logo} alt="" id="login-logo"/>
    <h2>Welcome to Fantasea.<br />Login to start exploring.</h2>
    <form action="">
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Your username..."/>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Your email..."/>
      <button type="submit">LOG IN</button>
    </form>
    <p>or <a href="/register">register</a> if you don't have an account.</p>
  </section>
  );
};

export default Login;
