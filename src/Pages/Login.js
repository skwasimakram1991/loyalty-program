/** @format */

// import logo from "./logo.svg";
// import "./App.css";

import React from 'react';
import logo from '../assets/images/logo.svg';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  // const navigate = useHistory();
  function goToHome() {
    // navigate.push('/');
  }
  return (
    <div>
      <section className='login-page'>
        <div className='wrap'>
          <img src={logo} alt='' />
          <h2>Login</h2>
          <form action=''>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              placeholder='Enter your user name or email here'
            />
            <label htmlFor=''>
              Password <span>*</span>
            </label>
            <input type='text' placeholder='*****************' />
            <div className='check-box'>
              <input type='checkbox' name='' id='' /> Remember me
            </div>
            <input type='submit' value='Login' onClick={goToHome} />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
