import styled from 'styled-components'

export const StyledLogin = styled.div`
>.login-wrapper{
  width : 375px;
  height : 63vh;
  margin : 100px auto 0;
  >h3{
    font-family: "Nanum Gothic Coding", monospace;
    line-height: 30px;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 20px;
  }
  >form{
    text-align: center;
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
    >.modal-btn{
      margin-top : 50px;
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
      margin: 20px 0 0;
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
      width : 300px;
      margin : 0 auto;
      padding : 10px 0 0;
      text-align: left;
      color : red;
    }
    > h2 {
    clear: both;
      }
    }
}
`