import React from 'react'
import {StyledVolunteerList,ServiceVolunteerWrapper } from './StyledVoluteer'
import { useHistory } from 'react-router-dom'
import Fade from "react-reveal/Fade"

const VolunteerList = ({slice ,setPostId }) => {
  let history = useHistory();

  const postClickHandler = (id) => {
    const dataId = id;
    setPostId(dataId);
    return history.push(`/posts/${id}`);
  };

  return (
    <StyledVolunteerList className = 'volunteer-list-container'>
      {slice.map((el) => {
        return (
          <ServiceVolunteerWrapper
            onClick={() => {
              postClickHandler(el.post.id);
            }}
            key={el.post.id}
            id="columns"
            className={"service-img-" + el.post.id}
          >
            <Fade top>
              <figure>
                <img src={el.post.image} alt="dog-img" />
                <figcaption className="title">{el.post.title}</figcaption>
                <figcaption className="updated-at">
                  {(el.post.updatedAt || "").split("T")[0].replaceAll("-", ".")}
                </figcaption>
              </figure>
            </Fade>
          </ServiceVolunteerWrapper>
        );
      })}
    </StyledVolunteerList>
  );
}

export default VolunteerList
