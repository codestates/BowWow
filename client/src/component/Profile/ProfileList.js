import React from 'react'
import { useHistory } from 'react-router-dom';
import { StyledProfileList, StyledProfileListItem } from "./StyledProfile";

<<<<<<< HEAD
const ProfileList = ({ userPosts }) => {
  
  if (userPosts.length === 0) return null;
=======
const ProfileList = ({ userPosts, setPostId }) => {
  let history = useHistory();
  // console.log("프로파일 리스트:", userPosts);
  // if (userPosts.length === 0) return null;
  if (userPosts.length === 0) {
    return (
      <StyledProfileList>
        <h2>내 글 목록</h2>
        <div className="list-item-scroll"></div>
      </StyledProfileList>
    );
  }
  // const update = (updatedAt || "").split("T")[0].replaceAll("-", ".");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const postClickHandler = (id) => {
    const dataId = id;
    setPostId(dataId);
    return history.push(`/posts/${id}`);
  };
>>>>>>> 1497b9376901e1cd5947c60cc045599807ca52c9
  return (
    <StyledProfileList>
      <h2>내 글 목록</h2>
      <div className="list-item-scroll">
        {userPosts &&
          userPosts.map((post) => {
            return (
              <StyledProfileListItem key={post.id}>
                <div
                  onClick={() => { postClickHandler(post.id) }}
                  className="list-item-wrapper"
                >
                  <h4>{post.title}</h4>
                  <div>
                    {(post.updatedAt || "").split("T")[0].replaceAll("-", ".")}
                  </div>
                </div>
                <p>{post.content}</p>
              </StyledProfileListItem>
            );
          })}
      </div>
    </StyledProfileList>
  );
};

export default ProfileList
