import styled from "styled-components";

export const StyledSignUp = styled.div`

  width: 375px;
  margin: 60px auto;
  margin-bottom: 30px;
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: column;
  font-family: "Nanum Gothic Coding", monospace;
  > form {
    height: 800px;
    display: flex;
    flex-direction: column;
  }

  > form .image-container > input {
    display: none;
  }

  > form .image-container img {
    cursor: pointer;
    width: 100px;
  }

  > form label {
    margin: 16px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  > form > input {
    padding: 0;
    margin: 0;
    position: static;
    padding-left: 14px;
    width: 360px;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    flex: none;
    flex-grow: 0;
    font-size: 16px;
    margin-bottom: 4px;
  }

  > form .user-info-content {
    padding: 0;
    margin: 0;
    position: static;
    padding-top: 10px;
    padding-left: 14px;
    width: 360px;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    flex: none;
    flex-grow: 0;
    font-size: 16px;
    height: 80px;
    resize: none;
  }

  > form > .button-wapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  > form button {
    border-radius: 10px;
    white-space: nowrap;
    margin-right: 10px;
    width: 100px;
    height: 48px;

    padding: 10px 30px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5rem;

    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: all 0.5s ease-in-out;

    border: 2px solid #48cfad;
    background: #48cfad;
    color: #fff;

    &:last-child {
      border: 2px solid #48cfad;
      background: #fff;
      color: #48cfad;
      margin-right:15px;
    }
    &:hover {
      background: #fff;
      color: #48cfad;
      border: 2px solid #48cfad;

      &:last-child {
        border: 2px solid #48cfad;
        background: #48cfad;
        color: #fff;
      }
    }
  }
`;


export const StyledUserImgUpload = styled.div`
  width: 375px;
  height: 180px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  > .image-container {
    width: 375px;
    height: 110px;
    display: flex;
    align-items: flex-start;
  }

  > h3 {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  > div .image-wrapper {
    width: 100px;
    height: 100px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0e2e7;
    border: 1px solid #e0e2e7;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: 12px;
    order: 0;
    cursor: pointer;
    background-image: url("../../images/add-friend.png");
    margin-left: 10px;
  }

  > div .img-condition p {
    padding-top: 13px;
    color: #48cfad;
    font-size: 12px;
    font-weight: 700;
    line-height: 1rem;
    margin-left: 20px;
    padding-right: 15px;
  }
`;


export const InputReadOnly = styled.input`
  padding: 0;
  margin: 0;
  position: static;
  padding-left: 14px;
  width: 360px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  flex: none;
  flex-grow: 0;
  font-size: 16px;
  color: #adadad;
  background-color: #e5e5e5;
`;