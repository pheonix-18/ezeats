import React from "react";


import './cuisinestyle.css';
import './index.css';
import './style.css';
import logo from './images/ezeatslogo.png';


export default function Header() {
    return (
        <>
            <div id="navBar">
                <a style={{ textDecoration: "none", color: "inherit" }} href="index.html">
                    <div id="homeButtonContainer">
                        <img id="logo" src={logo} alt="EZ Eats Logo" />
                        <h1 id="logoText">EZ Eats</h1>
                    </div>
                </a>
            </div>
        </>
    );
}



