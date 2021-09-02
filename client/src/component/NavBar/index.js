import React, { useState, useCallback } from "react";
import { StyledNavBar } from "./StyledNavBar";
import { Link, useHistory } from "react-router-dom";
import Modal from '../Modal'
import axios from 'axios'
axios.defaults.withCredentials = true;
// import axios from "axios";
//setPostsString : 스트링으로 데이터 요청을 보내고

const NavBar = ({
  setNavString,
  logoutHandler,
  isLogedIn,
  handleTop,
  handleClickSignup,
}) => {
  // console.log("navlogin", isLogedIn)
  const [openModal, setOpenModal] = useState(false);
  const modalSuccess = true;
  const closeModal = () => {
    setOpenModal(false);
  };

  const logOut = () => {
    logoutHandler();
  }

  let history = useHistory();

  const selectNavHandler = (string) => {
    const postsString = string;
    setNavString(postsString);
    history.push("/");
  };
  const menu = [{ name: "service" }, { name: "search" }, { name: "volunteer" }];
  const accessPost = useCallback(() => {
    if (isLogedIn) {
      history.push("/postform");
    } else {
      setOpenModal(true);
    }
  }, [history, isLogedIn]);

  return (
    <StyledNavBar id="navBar">
      <ul>
        <div className="leftNav">
          {/*로고 */}
          <Link to="/">
            <img onClick={handleTop} src="../images/logo.png" alt="logo img" />
          </Link>

          {menu.map((menuItem, idx) => {
            return (
              <li
                className="nav"
                key={menuItem.name}
                onClick={() => selectNavHandler(menuItem.name)}
              >
                {menuItem.name}
              </li>
            );
          })}
          <button onClick={accessPost}>
            <li className="post">Post</li>
          </button>
        </div>
        {!isLogedIn ? (
          <div className="rightNav">
            <Link to="/login">
              <button>로그인</button>
            </Link>
            <Link to="/signup">
              <button onClick={handleClickSignup}>회원가입</button>
            </Link>
          </div>
        ) : (
          <div className="rightNav">
            <Link to="/profile">
              <button
                onClick={() => {
                  history.push("/profile");
                }}
              >
                프로필
              </button>
            </Link>

            <Link to="/">
              <button onClick={logOut}>로그아웃</button>
            </Link>
          </div>
        )}
      </ul>

      {!isLogedIn ? (
        <Modal
          openModal={openModal}
          closeModal={closeModal}
          modalText="로그인이 필요한 서비스입니다."
        ></Modal>
      ) : null}
    </StyledNavBar>
  );
};

export default NavBar;
