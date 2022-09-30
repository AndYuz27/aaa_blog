import React,{useContext, useState} from "react";
import Post from "../Post";
import "./style.css";
import {Ctx} from "../../App";
export default () => {
  const {userName} = useContext(Ctx);

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
        <input type="submit" name="submit" className="submit" value="change" />

      </div>
      <div className="profile-post-container">
        <h2>Posts</h2>
        {/* <Post data={posts}/> */}
      </div>
    </div>
  );
};
