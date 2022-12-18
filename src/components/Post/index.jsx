import React, {useState} from "react";
import "./style.css";
import { Link } from 'react-router-dom';
export default ({ post }) => {


// console.log("Data from post" ,{post})


  return (
    <div className="pcard">
        <div className="img_blank" style={{backgroundImage: `url(${post.image !== undefined ? post.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"})`}}></div>
            <p className="ptitle">
            <Link className="btn-post" to={`/aaa_blog/post/${post._id}`}>{post.title}</Link>
            </p>
            {/* <p>{post._id}</p> */}

    </div>
);
};
