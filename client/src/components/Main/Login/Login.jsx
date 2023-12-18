import React from "react";
import Logo from '../../../assets/logo.png'

const Login = () => {
  return (
  <section id="login-section">
    
    <h2>Welcome to </h2><img src={Logo} alt="" id="login-logo"/>
    <h3>Login to start exploring.</h3>
    <form action="https://fantasea.onrender.com/api/login" method="post">
      <label htmlFor="username">Email</label>
      <input type="email" name="email" placeholder="Your email..."/>
      <label htmlFor="email">Password</label>
      <input type="password" name="password" placeholder="Your password..."/>
      <button type="submit">LOG IN</button>
    </form>
    <p>or <a href="/register">register</a> if you don't have an account.</p>
  </section>
  );
};

export default Login;
