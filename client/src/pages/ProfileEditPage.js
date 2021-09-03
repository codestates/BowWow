import React, { useEffect } from "react";
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import ProfileEdit from '../component/SignupOrProfileEdit/ProfileEdit';

const ProfileEditPage = ({
  logoutHandler,
  setNavString,
  isLogedIn,
  navString,
}) => {
useEffect(() => {
  if (navString === "service") {
    window.scrollTo({
      top: 940,
    });
  }
}, []);

  return (
    <>
      <NavBar
        logoutHandler={logoutHandler}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
        navString={navString}
      />
      <ProfileEdit />
      <Footer />
    </>
  );
};

export default ProfileEditPage