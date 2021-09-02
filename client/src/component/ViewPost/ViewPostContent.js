import React,{useState} from 'react'
import { 
  StyledViewPostContent,
  StyledViewPostProfile,
  StyledViewPostContentOne,
  ProfileInfoBtn
  } 
  from './StyledViewPost'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Modal from "../Modal";
axios.defaults.withCredentials = true;


function ViewPostContent({
  postInfo,
  userInfo,
  showButton,
  isLogedIn,
}) {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  let history = useHistory();
  if (!postInfo && !userInfo && !postInfo) {
    return null;
  }
  const { nickname, userImage } = userInfo;
  const { post_id, title, mobile, content, date, updatedAt, location, image, userId } = postInfo;
  const update = (updatedAt || "").split("T")[0].replaceAll("-", ".");

  const deletePostHandler = async () => {
    if (isLogedIn) {
      return axios
        .get(
          `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
          {
            headers: {
              accesstoken: document.cookie
                .split("accesstoken=")[1]
                .split(";")[0],
              refreshtoken: document.cookie
                .split("refreshtoken=")[1]
                .split(";")[0],
            },
          }
        )
        .then((res) => {
          if (res.data.data.userinfo === userId) {
            return axios
              .delete(
                `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${post_id}`
              )
              .then((res) => {
                setModalSuccess(true);
                setOpenModal(true);
              });
          } else {
            setModalSuccess(false);
            setOpenModal(true);
          }
        })
        .catch((err) => {
          setModalSuccess(false);
          setOpenModal(true);
        });
    } 
  };
  return (
    <StyledViewPostContent>
      <StyledViewPostProfile>
        <div className="profile-container">
          <div className="profile-img-wrapper">
            <img src={userImage} alt="user" width="60px" height="60px" />
          </div>
          <div className="profile-info-wrapper">
            <h2>{title}</h2>
            <p>
              {nickname}
              <span>{update}</span>
            </p>
          </div>
          {showButton ? (
            <ProfileInfoBtn>
              <button
                onClick={() => {
                  history.push("/postedit");
                }}
              >
                수정
              </button>
              <button type="button" onClick={deletePostHandler}>
                삭제
              </button>
            </ProfileInfoBtn>
          ) : null}
        </div>
      </StyledViewPostProfile>
      <StyledViewPostContentOne>
        <div className="img-wrapper">
          <img src={image} alt="post-info-pic" />
        </div>
        <div className="post-info-all">
          <div className="post-info-two">
            {date ? (
              <div className="post-info-date">봉사 날짜: {date}</div>
            ) : (
              <div className="post-info-date"></div>
            )}

            <div className="post-info-location">{location}</div>
          </div>
          <div className="post-info-mobile">{mobile}</div>

          <div className="post-info-content">{content}</div>
        </div>
      </StyledViewPostContentOne>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        modalSuccess={modalSuccess}
        modalText={
          modalSuccess === true
            ? "게시물이 삭제되었습니다."
            : "게시글 삭제에 실패했습니다."
        }
      />
    </StyledViewPostContent>
  );
}

export default ViewPostContent