import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { useParams, Link } from 'react-router-dom';
import { Ctx } from "../../App";


export default ({ post }) => {

    const { userId, api } = useContext(Ctx);
    const [isLoad, setIsLoad] = useState(false);
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        api.getPost(id)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                setIsLoad(true);
                // console.log("fff", data.data)
            });
    }, [data, api, id])


  return (
    <div className="pcard-single">
        <section className="post-page">
        <Link className="post-page__link" to="/"> &#10148; Домой</Link>
            <h1 className="post-page__title">{isLoad && data.title}</h1>
            <div className="post-page__wrapper">
                <div className="fffddd">
                {
                    isLoad ? <div className="img_blank-single" style={{backgroundImage: `url(${data.image !== undefined ? data.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"})`}}></div>:console.log("Loading...")
                }
                </div>
                
            </div>
        </section>
    </div>
);
};
