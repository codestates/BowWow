import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import PostEdit from "../component/PostFormOrEdit/PostEdit";

const PostEditPage = ({
  logoutHandler,
  setPostsData,
  setNavString,
  postId,
  isLogedIn,
  
}) => {
  return (
    <>
      <NavBar
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
      />
      <PostEdit postId={postId} />
      <Footer />
    </>
  );
};

export default PostEditPage;
