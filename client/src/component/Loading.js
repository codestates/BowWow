import React from "react";
import styled,{keyframes} from 'styled-components';
import loadingImg from '../images/loadingPaw.gif'

/*const showPaws = keyframes
  from{
    opacity : 0;
    transform: translateY(-10px) scale(0.5);
  }
  to{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
*/

const loadingTextOpacity = keyframes`
  0%  {opacity: 0}
  20% {opacity: 0.5}
  50% {opacity: 1}
  100%{opacity: 0}
`

const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-iteration-count: infinite;
  >paw_img{
    width : 100px;
    height :100px;
  }
  >h2{
      animation: ${loadingTextOpacity} 3s linear 0s infinite normal;
      
      font-size: 30px;
      font-weight: bold;
      margin-top: 45px;
      opacity: 0;
      text-transform: uppercase;
    }
`;

function Loading() {
  return (
    <StyledLoading className= ' loading-box'>
      <img class = 'paw_img' src={loadingImg} alt="loading-gif" />
      <h2>Loading...</h2>
    </StyledLoading>
  );
}

export default Loading;
