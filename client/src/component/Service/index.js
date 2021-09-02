import React, { useEffect, useState } from "react";
import { StyledService } from "./StyledService";
import ServiceList from "./ServiceList";
// import axios from "axios";

const Service = ({ postsData, setPostId}) => {
  
  const [maxDogList, setMaxDogList] = useState(9);
  const [slice, setSlice] = useState([]);
  
  const moreButtonHandler = () => {
    setMaxDogList(maxDogList + 9);
    setSlice(postsData.slice(0, maxDogList));
  };

  useEffect(() => {
    window.scrollTo({
      top: 940,
      behavior: "smooth",
    });

    if (postsData) {
      setSlice(postsData.slice(0, maxDogList));
    } else {
      return null;
    }
  }, [maxDogList, postsData]);
  
  return (
    <StyledService id="service-container">
      <ServiceList
        setPostId={setPostId}
        slice={slice}
      />
      <div className = 'btn-box'>
      <button 
      onClick={moreButtonHandler} 
      className="buttons more-btn">
        More
      </button>
      </div>
    </StyledService>
  );
};

export default Service;
