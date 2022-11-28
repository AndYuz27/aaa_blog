import React,{useContext, useState, useEffect} from "react";
import axios from "axios";
// import Post from "../Post";
import "./style.css";
import {Ctx} from "../../App";
import { useParams, Link } from 'react-router-dom';
export default () => {
  const [modalView, setModal] = useState(false);
  const [modalAuth, setModalAuth] = useState(true);
  const {userId,userName,userPosts,userDscr,userEmail,userImage, updUId, updUName,api} = useContext(Ctx);
  const [posts, setPosts] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  // console.log({data})
  useEffect(() => {
    axios.get(`https://ithub-blog.herokuapp.com/api/users/`)
    .then((GetData) => {
      setPosts(GetData.data.data)
      setIsLoad(true);
      console.log("Data user",GetData.data)
    })
   })
console.log(userPosts)

  return (
    <div>
      <h1>Мой профиль</h1>
      <div className="profile-container">
        <img src={userImage} alt="profile image" className="profile-img"></img>
        <h2>{userName}</h2>
        <h3>{userEmail}</h3>
        <h3>{userDscr}</h3>
        <h3>{userId}</h3>
        <Link to="/profile-edit" className="header__btn">
          Edit Profile
        </Link>

      </div>
      <div className="profile-post-container">
        <h2>Posts</h2>
        {/* <Post data={posts}/> */}

      </div>
    </div>
  );
};
