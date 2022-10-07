

    import React, { useContext, useState, useEffect } from "react";
    import "./style.css"
    import { Ctx } from "../../App";
    import {setPersonInfo} from "../../api_stock.js"
    export default ({state, auth, updState}) => {

      const [name, setName] = useState("");
      const [description, setdDscr] = useState("");
      const [image, setImg] = useState("");
      const [authType,setAuthType] = useState(auth);
      const {db, updDb, updUName, updUId, updUEmail ,api} = useContext(Ctx);
      const {userId} = useContext(Ctx)
  
      // const handler = e => {
      //     e.preventDefault();
      //     if (authType)  {
      //         api.setPersonInfo(userId,{
      //                     name: name,
      //                     description: description,
      //                     image: image
      //                 })
      //                 .then(res => res.json())
      //                 .then(data =>{
      //                     console.log(data);
      //                     if(data.message === "ok" && userId === data.data._id){
      //                         updUId(data.data._id);
      //                         localStorage.setItem("userId", data.data._id)
      //                     }
      //                     setName("");
      //                     setdDscr("");
      //                     setImg("")
      //                     updState(false);
      //                     setAuthType(auth);
      //                 })
  
      //     }        
      // }
      // const changeAuthType = e => setAuthType(!authType)


      return (
        <div>
          <h1>Тут можно создать пост</h1>
          <form className="form-createpost" /*onSubmit={handler}*/>
                <input type="text" name="title" placeholder="Имя" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <br />
                <input className="post-text" type="text" name="text" placeholder="Описание"  value={description} onChange={(e) => {setdDscr(e.target.value)}}/>
                <br />
                <input type="url" placeholder="ссылка на картинку аватарки" name="img_link" value={image} onChange={(e) => {setImg(e.target.value)}}/>
                <br />
                <input type="text" name="tags" placeholder="Теги" />
                <br />
                <button type="submit">Изменить профиль</button>
                <button
                    placeholder="Изменить кота!!!"
                    onClick={() =>
                      setPersonInfo(userId, { name: setName,
                                              description: setdDscr,
                                              image: setImg
                                            })
                    }
                >Сменить паспорт</button>
            </form>
        </div>
  );
};
// const [name, setName] = useState("");
// const [description, setdDscr] = useState("");
// const [image, setImg] = useState("");
// const [authType,setAuthType] = useState(auth);
// const {db, updDb, updUName, updUId, updUEmail ,api} = useContext(Ctx);
// const {userId} = useContext(Ctx)