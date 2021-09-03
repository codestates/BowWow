import React, { useState, useEffect} from "react";
import VolunteerList from "./VolunteerList";
import { StyledVolunteer } from "./StyledVoluteer";

const Volunteer = ({ postsData,  setPostId,}) => {
  const [maxDogList, setMaxDogList] = useState(6);
  const [slice, setSlice] = useState([]);
  const moreButtonHandler = () => {
    setMaxDogList(maxDogList + 6);
    setSlice(postsData.slice(0, maxDogList));
  };

  useEffect(() => {
window.scrollTo({
  top: 940,
  behavior: "smooth"
});

    if (postsData) {
      setSlice(postsData.slice(0, maxDogList));
    } else {
      return null;
    }
  }, [maxDogList, postsData]);
  
  return (
    <StyledVolunteer>
      <VolunteerList 
      slice={slice} 
      setPostId = {setPostId}/>
      <button 
      onClick={moreButtonHandler} 
      className="more-btn">
        More
      </button>
    </StyledVolunteer>
  );
};

export default Volunteer;
