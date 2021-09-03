import React, { useState, useCallback, useEffect } from "react";
import { StyledPostForm, TextArea } from "./StyledPostForm";
import UploadImg from "./UploadImg";
import axios from "axios";
import useInput from '../../hooks/useInput';
import { useHistory } from "react-router-dom";
import Modal from "../Modal";

const PostEdit = ({ postId, setPostId }) => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  let history = useHistory();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [category, onChangeCategory, setCategory] = useInput("");
  const [date, onChangeDate, setDate] = useInput("");
  const [location, onChangeLocation, setLocation] = useInput("");
  const [mobile, onChangeMobile, setMobile] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  //* 이미지 미리보기
  const [image, setImage] = useState("");
  const [imgCheck, setImgCheck] = useState("false");
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImgCheck("true");
  };

  //*데이터 편집 후 전송
  const patchHandler = useCallback(
    (e) => {
      e.preventDefault();
      axios.get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
        {
          headers: {
            accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
            refreshtoken: document.cookie
              .split("refreshtoken=")[1]
              .split(";")[0],
          },
        }
      ).then((res) => {
          const userdata = new FormData();
                userdata.append("title", title);
                userdata.append("category", category);
                userdata.append("date", date);
                userdata.append("location", location);
                userdata.append("input-image", e.target[0].files[0]);
                userdata.append("imgCheck", imgCheck);
                userdata.append("content", content);
                userdata.append("mobile", mobile);
                userdata.append("userId", res.data.data.userinfo);

        axios
          .patch(
            `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`,
            userdata,
            {
              headers: { "Content-Type": "multipart/form-data" },
              withCredentials: true,
            }
          )
          .then((res) => {
            setModalSuccess(true);
            setOpenModal(true);
          })
          .catch((err) => {
            console.log(err);
            setModalSuccess(true);
            setOpenModal(true);
          });
      }).catch((err) => {
        console.log(err);
        setModalSuccess(false);
        setOpenModal(true);
      })
    },
    [title, category, content, mobile]
  );

  const cancelHandler = () => {
    alert("게시글이 수정이 취소되었습니다.");
    history.goBack();
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });


    axios
      .get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.data.posts.category_contents[0].category_id === 1) {
          setCategory("service");
        } else {
          setCategory("volunteer");
        }
        setContent(res.data.data.posts.content);
        setDate(res.data.data.posts.date || "");
        setLocation(res.data.data.posts.location || "");
        setMobile(res.data.data.posts.mobile);
        setTitle(res.data.data.posts.title);
        setImage(res.data.data.posts.image);
      });
  }, [
    postId,
    setCategory,
    setContent,
    setDate,
    setLocation,
    setMobile,
    setPostId,
    setTitle,
  ]);
  return (
    <StyledPostForm>
      <form
        onSubmit={(e) => {
          patchHandler(e);
        }}
      >
        <UploadImg image={image} imageHandler={imageHandler} />
        <div className="form-data">
          <label htmlFor="title">
            제목<span> (필수)</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            id="title"
            required
            name="title"
          />

          <label htmlFor="category">
            카테고리<span> (필수)</span>
          </label>
          <select
            required
            name="categoty"
            id="category"
            value={category}
            onChange={onChangeCategory}
          >
            <option value="">선택하세요</option>
            <option value="service">유기견 소개</option>
            <option value="volunteer">봉사 일정 공유</option>
          </select>

          <label htmlFor="date">
            날짜<span> (카테고리가 봉사일 경우 필수)</span>
          </label>
          <input
            id="date-picker"
            name="date"
            value={date}
            onChange={onChangeDate}
            type="datetime-local"
          />

          <label htmlFor="location">
            보호소 위치<span> (카테고리가 봉사일 경우 필수)</span>
          </label>
          <input
            name="location"
            value={location}
            onChange={onChangeLocation}
            type="text"
          />

          <label htmlFor="mobile">
            연락처<span> (필수)</span>
          </label>
          <input
            name="mobile"
            value={mobile}
            onChange={onChangeMobile}
            type="text"
            placeholder="Ex) 010-0000-0000"
            id="mobile"
          />

          <label htmlFor="content">컨텐츠</label>
          <TextArea
            required
            name="content"
            value={content}
            onChange={onChangeContent}
            placeholder="500자 내로 작성하세요."
          />

          <div className="button-wapper">
            <button type="submit">확인</button>
            <button onClick={cancelHandler}>취소</button>
          </div>
        </div>
      </form>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        modalSuccess={modalSuccess}
        modalText={
          modalSuccess === true
            ? "게시물이 수정되었습니다."
            : "게시글 수정에 실패했습니다."
        }
      />
    </StyledPostForm>
  );
};

export default PostEdit;