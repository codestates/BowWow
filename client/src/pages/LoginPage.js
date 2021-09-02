import React from 'react'
import NavBar from '../component/NavBar';
import Login from '../component/Login';
import Footer from '../component/Footer';

function LoginPage({
  loginHandler,
  setNavString,
  setIsLogedIn,
}) {

  return (
    <>
      <NavBar
        setNavString={setNavString}
      />
      <Login
        loginHandler={loginHandler}
        setIsLogedIn={setIsLogedIn}
      />
      <Footer />
    </>
  );
}

export default LoginPage