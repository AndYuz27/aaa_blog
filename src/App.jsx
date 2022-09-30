import React, {createContext,useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Api from "../api"
export const Ctx = createContext({})

export const App = () => {
  const [db,updDb] = useState(JSON.parse(localStorage.getItem("db") || "[]"));
  const [userId,setUserId] = useState(localStorage.getItem("userId") || "");
  const [userName,setUserName] = useState(localStorage.getItem("author") || "");
  const [userEmail,setUserEmail] = useState(localStorage.getItem("email") || "");

  return (
    <Ctx.Provider value={{
      db: db,
      userId: userId,
      userName: userName,
      userEmail: userEmail,
      api: new Api(),
      updDb: updDb,
      updUId: setUserId,
      updUName: setUserName,
      updUEmail: setUserEmail

    }}>
      <Header />
      <Main/>
      <Footer />
    </Ctx.Provider>
  );
};
















