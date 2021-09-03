/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { StyledProfileInfo, ProfileBtnLink } from "./StyledProfile";

const ProfileInfo = ({ userInfo }) => {
  const { email, nickname, image, introduce } = userInfo;
  return (
    <StyledProfileInfo>
      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img src={image} alt="user-photo" width="100px" height="100px" />
        </div>
        <div className="profile-info-wrapper">
          <div className="profile-info-nickname-btn">
            <h3>{nickname}</h3>
            <ProfileBtnLink to="/profileedit">프로필 수정</ProfileBtnLink>
          </div>

          <div className="profile-info-email">{email}</div>
        </div>
      </div>
      <div className="profile-info-content">{introduce}</div>
    </StyledProfileInfo>
  );
};

export default ProfileInfo
