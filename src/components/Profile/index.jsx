import React,{useContext, useState} from "react";
import Post from "../Post";
import "./style.css";
import {Ctx} from "../../App";
import {Link} from "react-router-dom"
export default () => {
  const [modalView, setModal] = useState(false);
  const [modalAuth, setModalAuth] = useState(true);
  const {userId,userName, updUId, updUName,api} = useContext(Ctx);


  const {userEmail} = useContext(Ctx);
  // console.log({data})

function alert_tttt(e){
  alert(e)
}

  return (
    <div>
      <h1>Мой профиль</h1>
      <div className="profile-container">
        <img src="" alt="profile image" className="profile-img"></img>
        <h2>{userName}</h2>
        <h3>{userEmail}</h3>
        <h3>Description</h3>
        <Link to="/profile-edit" className="header__btn">
          All Posts
        </Link>

      </div>
      <div className="profile-post-container">
        <h2>Posts</h2>
        {/* <Post data={posts}/> */}

      </div>
    </div>
  );
};
