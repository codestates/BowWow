import React from 'react'
import { useForm } from 'react-hook-form';
import {StyledLogin} from './StyledLogin'
import { Link, useHistory} from 'react-router-dom'
import axios from 'axios';
//import { initialState } from '../dummyData'
axios.defaults.baseURL = "http://localhost:3000";
function Login({ setHasUserId, setIsLogedIn, loginHandler }) {
  let history = useHistory();
  //? 로그인 완료시 모달 용
  // const [signinSuccess, setSigninSuccess] = useState(false);
  //formData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/users/login",
        //"http://localhost:4000/users/login",
        data,
        { withCredentials: true, credentials: 'include' }
      )
      .then((res) => {
        console.log("res123",res)
        // console.log("첫콘솔", res.data.data.accesstoken);
        // console.log("refresh", res.data.data.refreshtoken)
        // setHasAccessToken(res.data);

        // setIsLogedIn(res.data.data.userinfo.id);
        loginHandler(res.data.data.userinfo.id);
        setHasUserId(res.data.data.userinfo.id);
       // document.cookie = "accesstoken" + "=" + res.data.data.accesstoken;
        //document.cookie = "refreshtoken" + "=" + res.data.data.refreshtoken;
        // console.log(document.cookie.split(" "));
        history.push("/")
      })
      .catch((err) => {
        console.log("login에러", err);
        alert("로그인에 실패하였습니다.");
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
          <button className="oath-btn">카카오</button>

          <button className="modal-btn" type="submit">
            로그인
          </button>
          <Link to="/signup">
            <button className="modal-btn">아직 회원이 아니신가요?</button>
          </Link>
        </form>
      </div>
    </StyledLogin>
  );
}

export default Login;

