/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { StyledUserImgUpload } from "./StyledSignUp";
/* eslint-disable jsx-a11y/img-redundant-alt */
const UserImgUpload = ({ userImage, imageHandler }) => {
  return (
    <StyledUserImgUpload>
      <h3>유저 사진</h3>
      <div className="image-container">
        <label htmlFor="input-image">
          <div className="image-wrapper">
            <img src={userImage} alt="user-image" />
          </div>
        </label>
        <input
          type="file"
          id="input-image"
          accept="image/*"
          onChange={imageHandler}
        />
        <div className="img-condition">
          <p>
            등록조건
            <br />
            170x280(px), 25KB 이하,
            <br />
            jpg, jpeg, png만 가능
          </p>
        </div>
      </div>
    </StyledUserImgUpload>
  );
};

export default UserImgUpload
