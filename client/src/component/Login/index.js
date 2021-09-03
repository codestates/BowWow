import React , {useState} from 'react'
import { useForm } from 'react-hook-form';
import {StyledLogin} from './StyledLogin'
import { Link, useHistory} from 'react-router-dom'
import Modal  from '../Modal'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";
function Login({ setIsLogedIn, loginHandler }) {
  
  // 모달
  const [modalSuccess , setModalSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    return axios
      .post(
        "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/users/login",
        data,
        { withCredentials: true }
      )
      .then((res) => {
        loginHandler(res.data.data.userinfo.id);
        setIsLogedIn(true);
        document.cookie = `accesstoken=${res.data.data.accesstoken}`;
        document.cookie = "refreshtoken" + "=" + res.data.data.refreshtoken;
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setOpenModal(true)
        setModalSuccess(false)
      });
  };

  return (
    <StyledLogin>
      <div className="login-wrapper">
        <h3>
          로그인 하시고
          <br />더 많은 서비스를 이용하세요.
        </h3>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="example@email.com"
            type="email"
          />
          {errors.email && <p>정확한 이메일주소를 입력하세요.</p>}
          <input
            {...register("password", { required: true, minLength: 8 })}
            placeholder="password"
            type="password"
          />
          {errors.password && <p>정확한 비밀번호를 작성해주세요.</p>}

          <button className="modal-btn" type="submit">
            로그인
          </button>
          <Link to="/signup">
            <button className="modal-btn">아직 회원이 아니신가요?</button>
          </Link>
        </form>
      </div>

      <Modal 
      openModal = {openModal}
      closeModal = {closeModal}
      modalSuccess = {modalSuccess}
      modalText ={ modalSuccess===true ? 
        '로그인에 성공했습니다.' : '로그인에 실패했습니다.'}
      />
    </StyledLogin>
  );  
}

export default Login;

