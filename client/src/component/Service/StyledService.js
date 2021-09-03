import styled from "styled-components";

const mainColor = '#48cfad';

// const anima = keyframes `
//   from {
//       margin-top: -50px;
//       -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
//       filter: alpha(opacity=0);
//       opacity: 0
//   }
//   to {
//       margin: auto;
//       -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
//       filter: alpha(opacity=100);
//       opacity: 1
//   }
// }
// `

  /* animation: ${anima} 2s; */

export const StyledService = styled.section`
    
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 100px 200px 50px;

  >.btn-box{
    text-align: center;
    > .buttons, a>.buttons {
    background: ${mainColor};
    border: none;
    border-radius: 10px;
    color: white;
    width: 100px;
    height: 40px;
    font-size: 16px;
    margin-top : 30px; 
  }
  >a>.buttons{
    background: #fff;
    border: 1px solid #48cfad;
    color: #48cfad;
    &:hover{
    background: #48cfad;
    border: none;
    color: #fff;
    transition: all 0.3s ease;
    }
  }
  >.more-btn:hover {
    background: #fff;
    border: 1px solid #48cfad;
    color: #48cfad;
    transition: all 0.3s ease;
  }
}
`;
export const StyledServiceList = styled.div`

  column-width: 200px;
  column-gap: 10px;
`;

export const ServiceListWrapper = styled.div`
 //figure === pic
    >figure{
  display : inline-block;
  //box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;

  position: relative;
  margin: 10px;
  backface-visibility: hidden;
  transition: all 0.5s ease;
} 
  >figure > .pic-caption {
    top: 30%;
    left: 0;
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    text-align: center;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
    filter: alpha(opacity=0);
    opacity: 0;
    &:hover{
      transition: all 0.5s ease;
      top: -6px;
      left: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
      filter: alpha(opacity=100);
      opacity: 1;
      user-select: none;
    }
    >.title{
    color : #fff;
    letter-spacing: -1px;
    margin-top : 20px;
    background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.8s;
    background-image: linear-gradient(transparent 60%, #F8CD07 40%);
    &:hover{
      transition: all 0.3s ease-in-out;
      background-size: 100% 100%;
    }
  }
  }
  >figure > img{
    width : 100%;
    transform:scale(1);
    transition:.3s;
    &:hover{
    transform:scale(1.1);
    }
  }
`