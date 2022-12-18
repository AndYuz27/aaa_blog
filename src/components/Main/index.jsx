import React from "react";
import "./style.css";
import posts from "../../data/posts.json";
import Home from "../Home/index.jsx";
import AllPosts from "../AllPosts/index.jsx";
import CreatePost from "../CreatePost/index.jsx";
import Profile from "../Profile/index.jsx";
import ProfileEdit from "../ProfileEdit";
import { Routes, Route } from "react-router-dom";
import PostSingle from "../PostSingle";

export default () => {
  return (
    <main>
      <Routes>
        <Route exact path="/aaa_blog" element={<Home data={posts} />} />
        <Route path="/aaa_blog/allposts" element={<AllPosts />} />
        <Route path="/aaa_blog/createpost" element={<CreatePost />} />
        <Route path="/aaa_blog/profile" element={<Profile />} />
        <Route path="/aaa_blog/profile-edit" element={<ProfileEdit />} />
        <Route path="/aaa_blog/post/:id" element={<PostSingle />} />
      </Routes>
    </main>
  );
};
