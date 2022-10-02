import React, {useContext, useState, useEffect} from "react";
import Post from "../Post";
import "./style.css";
import posts from "../../data/posts.json";
import Api from "../../../api";
import { Ctx } from "../../App";
import axios from "axios";
import pic1 from "../../pictest.png"
export default () => {
      const {api} = useContext(Ctx);

  // function 
  // getLists() {
  //     this.setState({ loading: true }, () => {
  //       api.GetPosts()
  //         .then(res => res.json())
  //         .then(result =>
  //           this.setState({
  //             loading: false,
  //             alldata: result
  //           })
  //         )
  //         .catch(console.log);
  //     });
  //   }
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
      <h1>Все посты</h1>
      <input type="text" name="text" className="search" placeholder="Найти пост"/>
      <input type="submit" name="submit" className="submit" value="Найти" />
      
      
        {apiData.map((data) => {
          return ( <div className="pcard">
          <p className="ptitle">{data.title}</p>
          <img src={data.image} alt="pic" width="256px"/>
          </div>
          )
        })}

      {/* <Post data={posts} /> */}
    </div>
  );
};
 