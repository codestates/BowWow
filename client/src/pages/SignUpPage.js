import React from "react";
import NavBar from '../component/NavBar';
import Signup from '../component/SignupOrProfileEdit/Signup';
import Footer from '../component/Footer';

function SignUpPage({ setNavString }) {
  
  return (


    <>
      <NavBar setNavString={setNavString}  />
      <Signup />

      <Footer />
    </>
  );
}

export default SignUpPage