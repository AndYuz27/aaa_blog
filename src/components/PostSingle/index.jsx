import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { useParams, Link } from 'react-router-dom';
import { Ctx } from "../../App";
import { useNavigate } from "react-router-dom";

export default ({ post }) => {

    const navigate = useNavigate();

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

    const handle = () => {
        api.deletePost(id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                
            })
            navigate("/")
    };



  return (
    <div className="pcard-single">
        <section className="post-page">
        <Link className="post-page__link" to="/"> &#10148; Домой</Link>
            { isLoad ? <h1 className="post-page__title">{isLoad && data.title !== null ? data.title :"No Description"}</h1> : console.log("waiting")}
            <div className="post-page__wrapper">
                <div className="fffddd">
                {
                    isLoad ? <div className="img_blank-single" style={{backgroundImage: `url(${data.image !== undefined ? data.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"})`}}></div>:console.log("Loading...")
                }
                </div>
                <button className="post-page__modal-btn" onClick={handle}>Delete Post</button>
                
            </div>
        </section>
    </div>
);
};
