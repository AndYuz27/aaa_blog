import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import posts from "./data/posts.json";
export default () => {
    return <>
        <Header/>
        <Main data={posts}/>
        <Footer/>
    </>
}