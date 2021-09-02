import styled from 'styled-components'

export const StyledVolunteer = styled.section`
  
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 100px 200px 50px;

>.more-btn{
  border :none;
  width: 100px;
  font-size: 16px;
  padding : 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #48cfad;
  color : white;
  margin-top : 30px; 
  :hover{
    background: #fff;
    border: 1px solid #48CFAD;
    color: #48CFAD;
    transition: all 0.3s ease;
  }
}
`
export const StyledVolunteerList = styled.div`

column-width: 200px;
column-gap: 10px;
  
`
export const ServiceVolunteerWrapper = styled.div`
  >figure{
  display : inline-block;
  border : 1px solid rgba(0,0,0,0.2);
  //box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 10px;
  }
  >figure > img{
    width : 100%;
    transform:scale(1);
    transition:.3s;
    &:hover{
    transform:scale(1.1);
    }
  }
  >figure > .title{
    font-size: 18px;
    margin : 10px 0;
    padding : 0 5px;
    letter-spacing: -1px;
    background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.8s;
    color: #000;
    background-image: linear-gradient(transparent 60%, #F8CD07 40%);
    &:hover{
      transition: all 0.3s ease-in-out;
      background-size: 100% 100%;
    }
  }
  >figure>.updated-at{
    text-align :right;
    color : grey;
    font-size: 14px;
    padding : 0 5px;
  }
`