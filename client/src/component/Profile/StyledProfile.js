import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyeldProfile = styled.div`
  margin: 60px auto;
  margin-bottom: 50px;
  font-size: 16px;
  width: 375px;
  display: flex;
  flex-direction: column;
`;

export const StyledProfileInfo = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 200px;
  border-bottom: 2px solid #000;

  > .profile-container {
    height: 100px;
    display: flex;
    justify-content: space-around;

    > .profile-img-wrapper {
      margin-left: 20px;
      margin-right: 20px;

      > img {
        border-radius: 150px;
        border: 1px solid #e8e8e8;
      }
    }

    > .profile-info-wrapper {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
    > .profile-info-wrapper > .profile-info-nickname-btn {
      height: 100%;
      width:100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 28px;

      > h3 {
        margin-right: 15px;
        align-self: flex-end;
      }
    }

    > .profile-info-wrapper {
      > .profile-info-email {
        font-size:16px;
        margin: 5px 0 12px 0 ;
      }
    }
  }

  > .profile-info-content {
    
    margin: 25px auto 10px;
    display: block;
    width: 335px;
    height: 50px;
    text-align: center;
    padding: 0 20px 0 20px;
  }
`;
//프로필 수정버튼
export const ProfileBtnLink = styled(Link)`
  box-sizing: border-box;
  padding: 5px 9px;
  border: 1px solid #000;
  background: transparent;
  color: #000;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  align-self: flex-start;
  margin: 5px 15px 0 0;
`;

export const StyledProfileList = styled.div`
  > h2 {
    margin: 25px 0 0 0;
    padding-left: 10px;
  }
  > .list-item-scroll {
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 420px;
    /* background: green; */
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      background-color: #fff;
      width: 5px;
      height: 8px;
      padding-top: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #48cfad;
      border-radius: 150px;
    }
  }

  /* > .list-item-scroll::-webkit-scrollbar {
    display: none;
  } */
`;

export const StyledProfileListItem = styled.div`
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  width: 95%;
  height: 95px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  /* border: 2px solid black; */
  //box-shadow
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  > .list-item-wrapper {
    display: flex;
    margin: 8px 0 12px 0;
    justify-content: space-between;

    > h4 {
      margin: 0;
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  //태그

  > p {
    font-size:14px;
    //3가지 말줄임 표
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :hover {
    width: 99%;
    height: 100px;
  }
`;