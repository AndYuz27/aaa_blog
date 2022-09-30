import React, {useState, useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import {Ctx} from "../../App";


export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    const {userId,userName, updUId, updUName,api} = useContext(Ctx);



    const aa =   api.getUser(userId).then(res => res.json())
    .then(data =>{console.log(data.message)});
   console.log(aa)


    const logOut = (e) =>{
      e.preventDefault();
      updUId("");
      updUName("");
      localStorage.removeItem("userId");
      localStorage.removeItem("author");
    }

  return (
    <header>
      <a href="/" className="header__logo">
        Andy's Blog
      </a>

      <nav className="header__menu">
        <Link to="/" className="header__btn">
          Main Page
        </Link>

        <Link to="/allposts" className="header__btn">
          All Posts
        </Link>

        {userId && <Link to="/createpost" className="header__btn">
          Create Post
        </Link>}

        
        {!userId && <Link to="/login" 
        className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
            setModalAuth(true)
          }}>
              Sign In
          </Link>}

         {!userId && <Link to="/auth"  className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
            setModalAuth(false)
          }}>

              Sign Up
          </Link>}

          {userId && <Link to="/profile" className="header__btn" >{userName}</Link>}
          {userId && <a href="/" className="header__btn" onClick={logOut}>Log off</a>}
      </nav>
     
      {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}
    </header>
  );
};
