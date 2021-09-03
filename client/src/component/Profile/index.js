import React, { useEffect, useState } from "react";
import { StyeldProfile } from "./StyledProfile";
import ProfileInfo from './ProfileInfo';
import ProfileList from './ProfileList';
import axios from "axios";
axios.defaults.withCredentials = true;

const Profile = ({ isLogedIn, setPostId }) => {
  // console.logconsole.log(showTime(date));("profile:", hasAccessToken);
  // console.log("dummyuser:", dummyUser)
  const [userInfo, setUserInfo] = useState({});
  const [userPosts, setUserPosts] = useState([]);
      useEffect(() => {
        window.scrollTo({
          top: 0,
      });

    axios
      .get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
        {
          headers: {
            accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
            refreshtoken: document.cookie
              .split("refreshtoken=")[1]
              .split(";")[0],
          },
        }
      ).then((res) => {
        return axios.get(
            `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/profile/info?id=${res.data.data.userinfo}`,
            { withCredentials: true }
          )
          .then((res) => {
            setUserInfo({
              id: res.data.data.id,
              image: res.data.data.image,
              introduce: res.data.data.introduce,
              email: res.data.data.email,
              nickname: res.data.data.nickname,
            });
            setUserPosts(res.data.data.posts);
          })
          .catch((err) => {
            console.log(err);
          });
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyeldProfile>
      <ProfileInfo userInfo={userInfo} />
      <ProfileList userPosts={userPosts} setPostId={setPostId} />
    </StyeldProfile>
  );
};

export default Profile
