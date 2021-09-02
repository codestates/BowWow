import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideTitle = styled.h2`
  padding: 20px;
  margin-left : 20px;
  text-align: left;
  font-size: 40px;
  font-weight: bolder;
  color: #F8CD07;
`;

const ImgSlide = styled.img`
  margin : 0 auto 30px;
  width : 80%;
  border-radius: 10px;
`

const Container = styled.div`
  margin-left : 170px ;
  width : 375px;
  height : 66%;
  border-radius : 50px;
  background: #fff;
  padding :40px 0px ;
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
const SlideH3 = styled.h3`
text-align: center;
margin: 50px 30px 50px;
font-weight: 500;
font-size : 22px;
letter-spacing: -1px;
`

function MainSlider() {
  const settings = {
    dots: true,  // 슬라이드 밑에 점 보이게
    lazyLoad : true,
    infinite: true,  // 무한으로 반복
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,  // 넘어가는 속도
    slidesToShow: 1,  // 1장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };
  return (
    <>
    <Container id = 'main-side-container'>
      <Slider {...settings} >
          <div className='slider-wrapper'>
            <SlideTitle>Service</SlideTitle>
            <ImgSlide src = '/../../images/sample_img1.jpg' alt = 'sample-img1'/>
            <SlideH3>유기견 봉사활동일정을<br/> 한눈에 볼 수 있어요.</SlideH3>
          </div>
          <div className='slider-wrapper'>
            <SlideTitle>Search</SlideTitle>
            <ImgSlide src = '../../images/sample_img4.jpg' alt = 'sample-img4'/>
            <SlideH3>전국의 모든 유기견 보호소를<br/> 찾을 수 있어요.</SlideH3>
          </div>
          <div className='slider-wrapper'>
            <SlideTitle>Volunteer</SlideTitle>
            <ImgSlide src = '../../images/sample_img2.jpg' alt = 'sample-img3'/>
            <SlideH3>생생한 입양 및 봉사후기를<br/> 볼 수 있어요.</SlideH3>
          </div>
      </Slider>
      </Container>
    </>
  )
}

export default MainSlider
