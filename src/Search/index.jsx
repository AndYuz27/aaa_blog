import React, {useContext, useState, useEffect} from "react";
import "./style.css";
// import posts from "../../data/posts.json";
import Api from "../../api";
import { Link } from 'react-router-dom';
import { Ctx } from "../../App";
import axios from "axios";

export default () => {
      const {api} = useContext(Ctx);


const [apiData, setApiData] = useState([])
const [isLoad, setIsLoad] = useState(false);



 useEffect(() => {
  axios.get(`https://srv.petiteweb.dev/api/blog/posts`)
  .then((GetData) => {
    setApiData(GetData.data.data)
    setIsLoad(true);
    console.log("Data Posts",GetData.data.data)
  })
 })



  return (
    <div>
      <h1>All Posts</h1>
      
      
      <div className="mmain">
        {apiData.map((post) => {
          return ( <div className="pcard">
            <div className="img_blank" style={{backgroundImage: `url(${post.image !== undefined ? post.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"})`}}></div>
          <div className="jj">
          <p className="ptitle">{/*{data.title}*/}
          <Link to={`/blog-react/post/${post._id}`}>{post.title}</Link>
          </p>
          </div>
          {/* <p className="ptitle">{data.text}</p> */}
          {/* <img src={data.image} alt="pic" width="256px"/> */}
          </div>
          )
        })}

    </div>
    </div>
  );
};
 