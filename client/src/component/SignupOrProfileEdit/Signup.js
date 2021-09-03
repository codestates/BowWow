import React, { useState, useCallback } from "react";
import { StyledSignUp } from "./StyledSignUp";
import { ErrorMessage } from "../ErrorMessage";
import camera from "../../images/bros_blank.jpeg";
import UserImgUpload from "./UserImgUpload";
import useInput from "../../hooks/useInput";
import Modal from "../Modal";
import axios from "axios";

const SignUp = () => {
  // 모달
  const [modalSuccess, setModalSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  //* image preview
  const [userImage, setUserImage] = useState(camera);
  const [imgCheck, setImgCheck] = useState("false");
  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setUserImage(e.target.files[0]);
    setImgCheck("true");
  };

  //* user data
  //email
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [introduce, onChangeIntroduce] = useInput("");

  //*user data password
  const [password, setPassword] = useState("");
  const [passwordRegError, setPasswordRegError] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    let pwRegExp = /^[a-zA-Z0-9]{6,16}$/;
    setPasswordRegError(!pwRegExp.test(e.target.value));
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  //* form submit
  const signupHandler = useCallback((e) => {
    e.preventDefault();
    setOpenModal(true)

      if (password !== passwordCheck) {
        return setPasswordError(true);
      }

      const userdate = new FormData();
      userdate.append("email", email);
      userdate.append("nickname", nickname);
      userdate.append("introduce", introduce);
      userdate.append("password", password);
      userdate.append("input-image", e.target[3].files[0]);
      userdate.append("imgCheck", imgCheck);
      axios
        .post(
          "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/users/signup",
          userdate,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        )
        .then((res) => {
          setModalSuccess(true)
        })
        .catch((err) => {
          console.log(err);
          alert("중복된 이메일이 있습니다. 다시 입력해주세요.");
          setModalSuccess(false);
          setOpenModal(true);
        });

      //중복된 이메일이 있습니다는 뜨는데, 회원가입 완료시에는 다른메시지가 뜨게하고, 홈으로이동
    },
    [password, email, nickname, imgCheck]
  );

  return (
    <StyledSignUp>
      <form
        onSubmit={(e) => {
          signupHandler(e)
        }}
      >
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={onChangeEmail}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        {passwordRegError ? (
          <ErrorMessage>
            "비밀번호는 최소 6자리에서 16자리의 영문,숫자 조합이어야 한다."
          </ErrorMessage>
        ) : null}
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input
          name="passwordCheck"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        {passwordError ? (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        ) : null}
        <UserImgUpload imageHandler={imageHandler} userImage={userImage} />
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          name="nickname"
          value={nickname}
          required
          onChange={onChangeNickname}
        />
        <label htmlFor="introduce">유저 소개</label>
        <textarea
          name="introduce"
          type="text"
          className="user-info-content"
          placeholder="50자 이내로 입력해주세요."
          value={introduce}
          onChange={onChangeIntroduce}
        />
        <div className="button-wapper">
          <button type="submit">확인</button>
          <button
            onClick={() => {
              window.history.back();
            }}
          >
            취소
          </button>
        </div>
      </form>

      <Modal 
      openModal = {openModal}
      closeModal = {closeModal}
      modalSuccess = {modalSuccess}
      modalText = {modalSuccess===true ? '회원가입에 성공했습니다' : '회원가입에 실패했습니다.'}
      />
    </StyledSignUp>
  );
};

export default SignUp;
