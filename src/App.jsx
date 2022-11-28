import React, {createContext,useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Api from "./api"
export const Ctx = createContext({})

export  const App = () => {
  const [db,updDb] = useState(JSON.parse(localStorage.getItem("db") || "[]"));
  const [userId,setUserId] = useState(localStorage.getItem("userId") || "");
  const [userName,setUserName] = useState(localStorage.getItem("author") || "");
  const [userDscr,setUserDscr] = useState(localStorage.getItem("description") || "");
  const [userEmail,setUserEmail] = useState(localStorage.getItem("email") || "");
  const [userImage,setUserImage] = useState(localStorage.getItem("image") || "");
  const [userPosts,setUserPosts] = useState(localStorage.getItem("posts") || "");

  const [postText, setPText] = useState(localStorage.getItem("postText") || "[]");
  const [postTitle, setPTitle] = useState(localStorage.getItem("postTitle") || "");
  const [postImg, setPImg] = useState(localStorage.getItem("postImg") || "");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  return (
    <Ctx.Provider value={{
      db: db,
      userId: userId,
      userName: userName,
      userEmail: userEmail,
      userDscr: userDscr,
      userImage: userImage,
      userPosts: userPosts,

      api: new Api(),
      updDb: updDb,
      updUId: setUserId,
      updUName: setUserName,
      updUEmail: setUserEmail,
      updUDscr: setUserDscr,
      updUImage: setUserImage,
      updUPosts: setUserPosts,
      isAuth: isAuth,
      setIsAuth: setIsAuth,

      //post CRUD
      postTitle: setPTitle,
      postText: setPText,
      postImg: setPImg,
      // updPId: setPostsId,
      updPTitle: setPTitle,
      updPText: setPText,
      updPImg: setPImg


    }}>
      <Header />
      <Main/>
      <Footer />
    </Ctx.Provider>
  );
};

















