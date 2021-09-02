import React from 'react'
import ViewPost from '../component/ViewPost'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

function ViewPostPage({
  logoutHandler,
  setNavString,
  postId,
  isLogedIn,
}) {
  return (
    <div>
      <NavBar
        logoutHandler={logoutHandler}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
      />
      <ViewPost
        postId={postId}
        isLogedIn={isLogedIn}
      />
      <Footer />
    </div>
  );
}

export default ViewPostPage