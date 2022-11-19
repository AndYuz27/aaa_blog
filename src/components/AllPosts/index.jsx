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
 useEffect(() => {
  axios.get(`https://ithub-blog.herokuapp.com/api/posts`)
  .then((GetData) => {
    setApiData(GetData.data.data)
    console.log("Data Posts",GetData.data.data)
  })
 })

  return (
    <div>
      <h1>All Posts</h1>
      <div className="mmain">
        {apiData.map((data) => {
          return ( <div className="pcard">
            <div className="img_blank" style={{backgroundImage: `url(${data.image !== undefined ? data.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"})`}}></div>
          <p className="ptitle">{/*{data.title}*/}
          <Link to={`/blog-react/post/${data._id}`}>{data.title}</Link>
          </p>
          {/* <p className="ptitle">{data.text}</p> */}
          {/* <img src={data.image} alt="pic" width="256px"/> */}
          </div>
          )
        })}

    </div>
    </div>
  );
};
 