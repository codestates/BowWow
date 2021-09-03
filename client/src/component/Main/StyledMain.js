import styled from 'styled-components'

const mainColor = '#48cfad';

export const StyledMain  = styled.main`
  display: flex;
  align-items: center;
  height : 100vh;
  background : linear-gradient(#37bc9b,${mainColor});
  >.logo-box{
    display: flex;
    align-items: center;
    width: 60%;
    height : 66%;

    background: #fff;
    padding : 30px;
    text-align: center;
    border-radius : 0 50px 50px 0;

    z-index :4;
    animation-delay:2s;
    transition: all 0.3s ease;
    >.logo{
      width : 300px; height : 300px;
    }
    >.home-text {
      text-align : left;
      margin-left: 50px;
      /* font-family: "Nanum Gothic Coding", monospace;
      letter-spacing: -2px; */
      >h1{
      margin : 3px 0px;
      font-size: 40px;
      letter-spacing: 2px;
      }
      >button{
      width: 150px;
      height: 50px;
      color: #fff;
      border-radius: 5px;
      margin-top: 30px;
      padding: 10px 25px;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 500;
      font-size: 20px;
      background: transparent;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
      box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
      7px 7px 20px 0px rgba(0,0,0,.1),
      4px 4px 5px 0px rgba(0,0,0,.1);

      background: #48cfad;
      background: linear-gradient(10deg, #37bc9b 0%, #48cfad 100%);
      width: 150px;
      height: 50px;
      line-height: 50px;
      padding: 0;
      border:none;
      
      >.shape{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px 20px;
      }
      >.shape:hover{
        color:#48cfad;
        border-radius: 10px 20px;
        z-index : 1000;
      }
      >.shape:before,.shape:after{
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: #48cfad;
        transition: all 0.3s ease;
        border-radius: 10px 20px;
      }
      >.shape:before{
        width: 2px;
        height: 0%;
      }
      >.shape:after{
        width: 0%;
        height: 2px;
      }
      >.shape:hover:before{
        height: 100%;
      }
      >.shape:hover:after{
        width: 100%;
      }
    }
    /*커스텀 버튼 */
    >button::before,button::after{
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: #48cfad;
        transition: all 0.3s ease;
      }
      >button::before{
        height: 0%;
        width: 2px; 
      }
      >button::after{
        width: 0%;
        height: 2px;
      }
      >button:hover{
        background: transparent;
        box-shadow: none;
      z-index : 1000;
      }
      >button:hover:before{
        height: 100%;
      z-index : 1000;
      }
      >button:hover:after{
        width: 100%;
      }
    }
  }
`
export const SlideTitle = styled.h2`
  padding: 20px;
  margin-left : 20px;
  text-align: left;
  font-size: 40px;
  font-weight: bolder;
  color: #F8CD07;
`;

export const ImgSlide = styled.img`
  margin : 0 auto;
  width : 90%;
  border-radius: 10px;
`

export const Container = styled.div`
  margin : 0 80px;
  width : 375px;
  height : 66%;
  border-radius : 50px;
  background: #fff;
  padding : 0 20px -10px 0;
  box-sizing: border-box;
  >ul{
    margin-bottom : 30px;
    >.slick-active{
    padding :0;
    background-color: #F8CD07;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
  }
`;
export const SlideH3 = styled.h3`
text-align: center;
margin: 20px 30px 50px;
font-weight: 500;
letter-spacing: -1px;
`