import React, {useState, useContext} from "react";
import Modal from "../Modal";
import "./style.css";
import {Ctx} from "../../App";

export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    const {userName} = useContext(Ctx);
    return <header>
        <a href="/" className="header__logo">Andy's Blog</a>
        <nav className="header__menu">
            <a href="/" className="header__btn">Create post</a>
            {!userName && <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(true);
                }}
            >Sign in</a>}
            {!userName && <a href="/" 
                className="header__btn" 
                onClick={(e) => {
                    e.preventDefault();
                    setModal(!modalView);
                    setModalAuth(false);
                }}
            >Sign up</a>}
            {userName && <a href="/">{userName}</a>}
            {userName && <a href="/">Log Out</a>}
        </nav>
        {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}
    </header>
}