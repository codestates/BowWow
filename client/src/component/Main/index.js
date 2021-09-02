import React from "react";
import { StyledMain } from "./StyledMain";
import Fade from "react-reveal/Fade"
import MainSlider from "./MainSlider";

const Home = ({ handleClickForService }) => {

  return (
    <StyledMain>
      <Fade left>
      <div className="logo-box stagger-wrapper">
        <img className="logo" src="../images/logo.png" alt="logoImg/" />
        <div className="home-text">
          <h1 className = 'stagger-item'>유기견 보호 커뮤니티,</h1>
          <h1 className = 'stagger-item'>
            <span 
            style={{ color: "#48cfad", fontSize: "52px", fontWeight: "800" }}>
              BowWow
            </span>{" "}
            와 <br/>함께하세요.{" "}
          </h1>
          
        <Fade bottom>
              <button onClick={handleClickForService}>
          <span className = 'shape stagger-item'>Get Start!</span>
        </button>
        </Fade>
        </div>
      </div>
      </Fade>
      <MainSlider/>
    </StyledMain>
  );
};

export default Home;
