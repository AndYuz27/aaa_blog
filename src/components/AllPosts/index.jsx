import React, {useContext, useState, useEffect} from "react";
import "./style.css";
// import posts from "../../data/posts.json";
// import { Link } from 'react-router-dom';
import { Ctx } from "../../App";
import axios from "axios";
import Post from "../Post"

export default () => {
      const {api} = useContext(Ctx);


      const [posts, setPosts] = useState([]);
const [isLoad, setIsLoad] = useState(false);
// const [postTags, setPostTags] = useState([]);

const [querySearch, setQuerySearch] = useState("");
const [selectedTags, setSelectedTags] = useState([]);
// const {userId,userName,userDscr,userEmail,userImage, updUId, updUName} = useContext(Ctx);



 useEffect(() => {
  axios.get(`https://srv.petiteweb.dev/api/blog/posts`)
  .then((GetData) => {
    setPosts(GetData.data.data)
    setIsLoad(true);
    // console.log("Data Posts",GetData.data.data) //вывод данных на консоль
  })
 })



  return (
    <div>
      <h1>All Posts</h1>
      
      <div className="ffdd">
        <input className="ffddfff" onChange={(el) => setQuerySearch(el.target.value)} type="text" placeholder="Поиск..." />
          
                </div>
      
      <div className="mmain">
      {posts.filter(p => {
                        if (querySearch === "") {
                            return p;
                        } else if (p.title && p.title.toLowerCase().includes(querySearch.toLowerCase())) {
                            return p;
                        } 
                        return false;
                    }).map((post) => {
                        return <Post key={post._id} post={post}></Post>
                    })}

    </div>
    </div>
  );
};
 