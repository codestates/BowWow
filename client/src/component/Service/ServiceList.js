import React from 'react'
import { useHistory } from 'react-router-dom';
import {
  StyledServiceList,
  ServiceListWrapper,
} from "./StyledService";
import Fade from "react-reveal/Fade"

const ServiceList = ({ setPostId, slice }) => {
  let history = useHistory();

  const postClickHandler = (id) => {
    const dataId = id;
    setPostId(dataId);
    return history.push(`/posts/${id}`);
  };
  return (
    <StyledServiceList className = 'service-list-container'>
      {slice.map((el) => {
        return (
          <ServiceListWrapper
            onClick={() => {
              postClickHandler(el.post.id);
            }}
            key={el.post.id}
            id="columns"
            className={"service-img-" + el.post.id}
          >

            <Fade top>
              <figure className="pic">
                <img src={el.post.image} alt="dog-img" />
                <figcaption className="pic-caption bottom-to-top">
                  <h1 className="title">{el.post.title}</h1>
                </figcaption>
              </figure>
            </Fade>
          </ServiceListWrapper>
        );
      })}
    </StyledServiceList>
  );
};

export default ServiceList

