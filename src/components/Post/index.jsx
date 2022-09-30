import React from "react";
import "./style.css";

export default ({ data }) => {
  return (
    <div>
      <div className="cards">
        {data.map((post) => (
          <div
            className="post"
            key={post.name}
           
          >
          <div className="post__block">
            <div className="post-card__pic" style={{backgroundImage: post.image && `url(${post.image})`}}>

              </div>
                <span>{post.name}</span>
                <span>{post.author}</span>
              </div>
              <div className="post__block">
                {post.description
                  .split(".")
                  .map(
                    (p, i, arr) =>
                      i !== arr.length - 1 && <p key={i}>{p + "."}</p>
                  )}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};