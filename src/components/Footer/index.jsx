import React from "react";
import "./style.css";

export default () => {
    return <footer>
        <span className="footer__copy">
            &copy;{new Date().getFullYear()}
        </span>
        <span> Made by&nbsp;
            <a 
                href="https://github.com/lekso4ka" 
                className="footer__author"
                target="_blank"
            >Leksa</a>
        </span>
    </footer>
}