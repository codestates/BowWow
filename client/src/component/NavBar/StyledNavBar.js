import styled,{keyframes} from "styled-components";

const rotateLogo = keyframes`
100%{
  transform: rotate(360deg);
}
`
export const StyledNavBar = styled.nav`
  width: 100%;
  height : 80px;
  background : linear-gradient(#48cfad,#37BC9B);
  position : sticky;
  top:0;
  z-index:10000;

>ul{
  display: flex;
  margin :0;
  padding : 0 20px;
  >.leftNav{
    width : 60%;
    height : 80px;
    display: flex;
    align-items: center;
    >li{
      background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.8s;
      color: #000;
      background-image: linear-gradient(transparent 60%, #F8CD07 40%);

      list-style: none;
      cursor: pointer;
      margin : 0 15px;
      font-size: 18px;
      color :white;
      text-transform: uppercase;
      letter-spacing: 2px;        
      font-family: lato;
      &:hover{
        transition: all 0.3s ease-in-out;
        background-size: 100% 100%;
      }
    }
    >button{
      border : none;
      background: none;
    }
    >button > .post{
        background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        transition: background-size 0.8s;
        color: #000;
        background-image: linear-gradient(transparent 60%, #F8CD07 40%);
        
        list-style: none;
        cursor: pointer;
        margin : 0 15px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: lato;
        color :white;
        &:hover{
        transition: all 0.3s ease-in-out;
        background-size: 100% 100%;
      }
      }
    >a{
      text-decoration: none;
      >img{
        margin-right: 20px;
        width : 50px; height :50px;
        border-radius: 50%;
        animation : ${rotateLogo} 6s linear infinite; 
        transform-origin : 50% 50%;
        &:hover{
          animation-play-state : paused;
        }
      }
      >li{
        list-style: none;
        margin : 0 15px;
        font-size: 18px;
        color :white;
        &:hover{
          transform: scale(1.1);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
  >.rightNav{
      width : 40%;
      height : 80px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    >a>button, button{
      border-radius: 5px;
      white-space: nowrap;
      width: 80px;
      padding: 10px ;
      font-size: 14px;
      font-weight: 700;

      outline: none;
      border: none;
      text-align: center;
      transition: all 0.5s ease-in-out;

      font-family: lato;
      text-transform: uppercase;
      letter-spacing: 2px;
  
      background: #fff;
      color: #48cfad;
      margin : 0 5px;
    &:hover {
      border: 2px solid #48cfad;
      background: #48cfad;
      color: #fff;
      }
    }
    }
  }
`;
