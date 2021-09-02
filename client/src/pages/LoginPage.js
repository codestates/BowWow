import React, {useEffect} from 'react'
import NavBar from '../component/NavBar';
import Login from '../component/Login';
import Footer from '../component/Footer';

function LoginPage({
  loginHandler,
  setNavString,
  setIsLogedIn,
}) {

  useEffect(() => {
      window.scrollTo({ top: 0 });
  }, [])

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