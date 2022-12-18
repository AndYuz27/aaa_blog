import React from "react";
import "./style.css";
import AllPosts from "../AllPosts";
import {Link} from "react-router-dom"

export default () => {
  return (
    <div className="home-page">
<div className="title_lend">
<h1 className="lend_hdr">Welcome to the blogging world</h1>
<Link to="/aaa_blog/allposts" className="letsgo_btn">Let's Go</Link>
</div>

      {/* <AllPosts/> */}
    </div>
  );
};
