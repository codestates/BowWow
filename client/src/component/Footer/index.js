import React from 'react';
import { FooterContainer } from "./StyledFooter";

const Footer = () => {
  
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <h5>고객센터 </h5>
        <h2>02-1009-1009</h2>
        <p>평일 09:00 ~ 18:00(주말 & 공휴일 휴무)</p>
        <div className="about-company">
          <p>회사명: EtemMerge | 서비스명: BowWow </p>
        </div>
        <div className="admin-link">
          <span>공동 대표: </span>
          <a href="https://github.com/dydwns2441">허용준 GitHub |</a>
          <a href="https://github.com/22sook00.com">
            {" "}
            이숙영 GitHub |
          </a>
          <a href="https://github.com/xxrang"> 이재랑 GitHub |</a>
          <a href="https://github.com/Oh-Myeongjae"> 오명재 GitHub</a>
        </div>
        <small>BowWow © {new Date().getFullYear()} All rights reserved.</small>
      </div>
    </FooterContainer>
  );
}

export default Footer
