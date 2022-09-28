import React, {createContext, useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import posts from "./data/posts.json";
import Api from "./api";

export const Ctx = createContext({});
export const App = () => {
    /*
        users = [{name: "", pwd: "", email: ""}] => db
    */
    const [db, updDb] = useState(JSON.parse(localStorage.getItem("db") || "[]"));
    const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

    return <Ctx.Provider value={{
        db: db,
        userId: userId,
        userName: userName,
        api: new Api(),
        updDb: updDb,
        updUId: setUserId,
        updUName: setUserName
    }}>
        <Header/>
        <Main data={posts}/>
        <Footer/>
    </Ctx.Provider>
}