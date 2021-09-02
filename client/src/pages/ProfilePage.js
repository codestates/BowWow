import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import Profile from '../component/Profile'

const ProfilePage = ({
  logoutHandler,
  setPostsData,
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
      <Profile
        setPostsData={setPostsData}
      />
      <Footer />
    </>
  );
};

export default ProfilePage