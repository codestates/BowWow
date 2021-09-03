import styled from "styled-components";
const borderRadius = '1rem 1rem 1rem 1rem'
const searchMainColor = '#37BC9B;'

export const StyledSearch = styled.section`
display: flex;
justify-content: center;
align-items: center;
width : 100%;
height : 92vh;
>.searchWrapper{
  width :375px;
  height : 500px;
  background: ${searchMainColor};
  border-radius : ${borderRadius};
  text-align: center;
}
`;
export const StyledSearchBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
>form {
  margin : 30px 0px 20px;
}
>form > input {
  font-size: 18px;
  width : 240px;
  height : 50px;
  padding : 0 10px;
  border-radius : 5px 0 0 5px;
  border:none;
}
>form > button{
  background: #fff;
  width : 50px;
  height : 50px;
  font-size :18px;
  border : none;
  border-radius: 0 5px 5px 0;
  color : ${searchMainColor};
  &:hover{
    transition: all 0.3s ease-in-out;
    background:#48cfad;
    color : #fff;
  }
}
`
export const StyledSearchMapList = styled.div`
  border-radius : ${borderRadius};
  width : 80%; 
  height: 73%;
  margin : 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
    &::-webkit-scrollbar {
      background-color: #fff;
      width: 5px;
      height: 8px;
      padding-top: 1px;
      margin-left : 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #37BC9B;
      border-radius: 150px;
    }
  >.search-maplist-wrapper{
    border-radius: ${borderRadius};
    padding : 10px;
    margin : 5px 10px 0 5px;
    background: #fff;
    cursor: pointer;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover{
        transform : scale(1.05);
        transition: all 0.3s ease-in-out;
      }
      >h1{
        /* color : ${searchMainColor} */
        font-weight : 500;
        font-size: 18px;
      }
      >p{
        padding : 0 10px;
        margin-top: 10px;
        color : #48cfad;
        >span{
        font-size: 12px;
        color : black;
        }
        >.search-location,>.search-mobile{
          font-weight: 700;
          font-size: 14px;
          color : ${searchMainColor}; 
          margin-right: 10px;
        }
      }
  }

`
export const StyledSearchMap = styled.div`
  width :700px;
  height : 500px;
  border-radius : ${borderRadius};
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 80px;
  padding-top: 100px;
  box-sizing: border-box;
  text-align: center;
`
