import React, { useState, useEffect } from 'react'
import Main from '../component/Main'
import NavBar from '../component/NavBar'
import Service from '../component/Service'
import Volunteer from '../component/Volunteer'
import Footer from '../component/Footer'
// import Loding from '../component/Loading'
import Search from '../component/Search'

function HomePage({
  logoutHandler,
  setPostsData,
  postsData,
  setNavString,
  navString,
  setPostId,
  postId,
  isLogedIn,
  logutOpenModal
}) {
  /*스크롤 상태저장*/
  const [ScrollY, setScrollY] = useState(0);
  /*맨 위로 이동*/

  const navBar = document.getElementById("navBar")
  const handleClickForService = () => {
    window.scrollTo({
      top: navBar.offsetTop,
      behavior: "smooth",
    });
    setScrollY("navBar"); // ScrollY 의 값을 초기화
  };

  const handleClickSignup = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
  };

  /*로고 scroll 구현*/
  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
  };

  useEffect(() => {
    //console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  
  //
  return (
    <>
      <Main handleClickForService={handleClickForService} />
      <NavBar
        logoutHandler={logoutHandler}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
        handleTop={handleTop}
        handleClickSignup={handleClickSignup}
        logutOpenModal = {logutOpenModal}
      />
      {navString === "service" || navString === "" ? (
        <Service postsData={postsData} setPostId={setPostId} />
      ) : navString === "volunteer" ? (
        <Volunteer postsData={postsData} setPostId={setPostId} />
      ) : (
        <Search />
      )}
      <Footer />
    </>
  );
}

export default HomePage
