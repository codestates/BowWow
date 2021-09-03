import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import ProfileEdit from '../component/SignupOrProfileEdit/ProfileEdit';

const ProfileEditPage = ({
  logoutHandler,
  setNavString,
  isLogedIn,
}) => {
  return (
    <>
      <NavBar
        logoutHandler={logoutHandler}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
      />
      <ProfileEdit
      />
      <Footer />
    </>
  );
};

export default ProfileEditPage