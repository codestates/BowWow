import React, { useCallback, useState } from "react";
import useInput from "../../hooks/useInput";
import { StyledViewPostComment } from "./StyledViewPost";
import axios from "axios";
import Modal from "../Modal";
axios.default.withCredentials = true;
// import userPic from "../../images/bros_blank.jpeg";

function ViewPostComment({
  inputRef,
  commentInfo,
  setCommentInfo,
  postId,
  userId,
  isLogedIn,
}) {
  const [comment, onChangeComment, setComment] = useInput("");
  // 모달
  const [openModal, setOpenModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  const addCommentHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (comment !== "") {
        setOpenModal(true);
        const userData = {
          userId: userId,
          content: comment,
          postId: postId,
        };
        axios
          .post(
            `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments`,
            userData,
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            setComment("");
            axios
              .get(
                `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments?id=${postId}`
              )
              .then((res) => {
                if (res.data.data.comment.length === 1) {
                  setCommentInfo(res.data.data.comment[0].reverse());
                } else {
                  setCommentInfo(res.data.data.comment.reverse());
                }
              })
              .catch((err) => {
              });
          })
          .catch((err) => {
          });
      }

    },
    [comment, postId, setComment, setCommentInfo, userId]
  );

  //댓글삭제
  const removeCommentHandler = useCallback(
    (id, comment_id) => {

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
          if (res.data.data.userinfo === id) {
            return axios
              .delete(
                `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments?id=${comment_id}`,
                {
                  headers: { "Content-Type": "application/json" },
                }
              )
              .then((res) => {
                const filtered = commentInfo.filter(
                  (comment) => comment_id !== comment.id
                );
                setCommentInfo(filtered);
              })
              .catch((err) => {
              });
          } else {
            setModalSuccess(true)
            setOpenModal(true);
          }
        })
        .catch((err) => {
          
          setModalSuccess(false);
          setOpenModal(true);
        });
    },
    [commentInfo, setCommentInfo]
  );

  return (
    <StyledViewPostComment>
      <div className="post-comment-form-wrapper">
        <i className="fas fa-comment-dots"> 댓글 </i>
        
        <form
          className="flex-box"
          onSubmit={(e) => {
            addCommentHandler(e);
          }}
        >
          <textarea
            required
            ref={inputRef}
            type="text"
            name="comment"
            onChange={onChangeComment}
            value={comment}
            className="post-comment-text"
            placeholder="100자 이내로 댓글 입력해주세요."
          />
          <button onClick = {()=>{setOpenModal(true)}} 
          className="post-comment-text-submit">입력</button>
        </form>

        <div className="list-item-scroll">
          <ul className="post-comment-wrapper">
            {commentInfo &&
              commentInfo.map((el) => {
                return (
                  <li key={el.id} className="post-comment-list">
                    <div className="post-commnet-flexbox">
                      <img
                        className="profile-img"
                        src={el.user.image}
                        alt="img"
                      />
                      <div>
                        <p className="post-comment-nickname">
                          {el.user.nickname}
                        </p>
                        <p className="post-comment-date">
                          {el.updatedAt.split("T")[0].replaceAll("-", ".")}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          removeCommentHandler(el.user_id, el.id);
                        }}
                        className="remove-button"
                      >
                        삭제
                      </button>
                    </div>
                    <div className="post-comment-content">{el.content}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      {!isLogedIn ? (
        <Modal
          openModal={openModal}
          closeModal={closeModal}
          modalSuccess={modalSuccess}
          modalText="글쓰기 권한이 없습니다. 로그인해주세요" 
        />
      ) : null}
      {modalSuccess ? (
        <Modal
          openModal={openModal}
          closeModal={closeModal}
          modalText="작성자가 일치하지 않습니다."
        />
      ) : null}
    </StyledViewPostComment>
  );
}

export default ViewPostComment;
