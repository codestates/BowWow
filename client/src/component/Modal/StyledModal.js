import styled,{keyframes} from 'styled-components'

const showModal = keyframes`
  from {
    opacity: 0;
    margin-top: -30px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`
const showModalBg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const tickle = keyframes`
  0% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(10%);
  }
`
export const StyledModal = styled.section`
>.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${showModalBg} .4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >.popup-box {
  padding: 40px 20px;
  margin: 0 auto;
  width: 375px;
  height : 200px;
  box-sizing: border-box;
  text-align: center;
  max-width: 400px;
  background-color: white;
  border-radius: 10px;
  animation: ${showModal}.4s;
  >h1{
    font-family: "Nanum Gothic Coding", monospace;
    line-height: 30px;
    letter-spacing: -1px;
    margin-bottom: 30px;
  }
  >.modal-btn{
    width : 100px;
    border : none;
    padding:10px;
    border-radius: 10px;
    background: #48cfad;
    color : white;
    letter-spacing: 1px;
    margin : 30px 10px 0;
    font-size: 16px;
    &:hover{

      border: 1px solid #48cfad;
        background: #fff;
        color: #48cfad;
    }
  }
  >form{
    >.modal-btn, a>.modal-btn{
      border-radius: 2px;
      white-space: nowrap;
      margin-top: 10px;
      width: 320px;
      height: 40px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5rem;
      font-family: "Nanum Gothic Coding", monospace;

      border: none;
      text-align: center;
      transition: all 0.4s ease-in-out;
      background: #48cfad;
      color: #fff;
  
      &:hover {
        border: 1px solid #48cfad;
        background: #fff;
        color: #48cfad;
        }
    }
    >.oath-btn{
      background: yellow;
      color : black;
      font-family: "Nanum Gothic Coding", monospace;
      border : none;
      width: 320px;
      margin-top: 12px;
    }
    >input{
      width: 300px;
      border: 1px solid #d9d9d9;
      margin: 12px 0;
    }
    >input,.oath-btn{
    height: 40px;
    padding-left: 14px;
    border-radius: 4px;
    flex: none;
    flex-grow: 0;
    font-size: 16px;
    }
    >p{
      width : 100%;
      margin : 0;
      padding : 0 0 0 12px;
      text-align: left;
      color : red;
    }
    > h2 {
    clear: both;
    }
    }
  >.close-btn-x {
      font-size: 20px;
      width: 20px;
      height: 20px;
      margin: -20px 0;
      padding: 0;
      float: right;
      border: none;
      background: none;
      color : #48cfad;
      &:hover{
        background: white;
        border : none;
        animation: ${tickle} 0.3s 0s ease infinite alternate-reverse;
      }
    }
  }
}
`