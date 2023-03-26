import React, { useState } from "react";
import "./diet.css";
import "./App.css";
import logo from './images/ezeatslogo.png';
import logo2 from './images/vegetarian.jpg';
import logo3 from './images/vegan.jpg';
import logo4 from './images/none.jpg';


export default function Step1({ setValue, nextPage }) {
    const [selectedOption, setSelectedOption] = useState(null);


    const handleClick = () => {
        if (selectedOption) {
            setValue(selectedOption);
            nextPage();
        } else {
            alert("Please select an option!");
        }
    };


    return (
        <>
            <div id="navBar">
                <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="index.html"
                >
                </a>
            </div>
            <div>
                <div className="center">
                    <h1 className="prompt">Any dietary restrictions?</h1>
                </div>
                <div className="container-center cardcontainer" id="special">
                    <div
                        id="none"
                        onClick={() => setSelectedOption("none")}
                        className={`card ${selectedOption === "none" ? "selected" : ""}`}
                    >
                        <img
                            className="cardImg"
                            src={logo4}
                            alt="Avatar"
                            style={{ width: "100%" }}
                        />
                        <div className="container">
                            <h4>
                                <b>No Restrictions</b>
                            </h4>
                            <p>No limitations on food choices.</p>
                        </div>
                    </div>
                    <div
                        id="vegan"
                        onClick={() => setSelectedOption("vegan")}
                        className={`card ${selectedOption === "vegan" ? "selected" : ""}`}
                    >
                        <img
                            className="cardImg"
                            src={logo3}
                            alt="Avatar"
                            style={{ width: "100%" }}
                        />
                        <div className="container">
                            <h4>
                                <b>Vegetarian</b>
                            </h4>
                            <p>Excludes meat, may include other animal products.</p>
                        </div>
                    </div>
                    <div
                        id="vegetarian"
                        onClick={() => setSelectedOption("vegetarian")}
                        className={`card ${selectedOption === "vegetarian" ? "selected" : ""
                            }`}
                    >
                        <img
                            className="cardImg"
                            src={logo2}
                            alt="Avatar"
                            style={{ width: "100%" }}
                        />
                        <div className="container">
                            <h4>
                                <b>Vegan</b>
                            </h4>
                            <p>Excludes all animal products.</p>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button
                        className="btn"
                        onClick={() => {
                            window.location.href = "cuisine.html";
                        }}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </>
    );
}







