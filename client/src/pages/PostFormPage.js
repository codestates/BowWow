import React from 'react'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import PostForm from '../component/PostFormOrEdit/PostForm';

const PostFormPage = ({
  logoutHandler,
  setPostsData,
  setNavString,
  isLogedIn,
  setIsLogedIn,
}) => {
  
  return (
    <>
      <NavBar
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
        setIsLogedIn={setIsLogedIn}
      />
      <PostForm
        isLogedIn={isLogedIn}
        setIsLogedIn={setIsLogedIn}
      />
      <Footer />
    </>
  );
};

export default PostFormPage;