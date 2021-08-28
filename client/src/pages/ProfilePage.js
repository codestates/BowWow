import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import Profile from '../component/Profile'

const ProfilePage = ({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
}) => {
  return (
    <>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <Profile />
      <Footer />
    </>
  );
};

export default ProfilePage