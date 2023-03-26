import React from "react";
import "./home.css";
import front1 from "./images/front1.jpg";
import front2 from "./images/front2.jpg";
import front3 from "./images/front3.jpg";

export default function Home() {
    return (
        <>
            <div id="content">
                <div id="wrapper">
                    <div id="landingContent">
                        <div id="mainText">
                            <h2 id="mainDesc">
                                Hungry for Something New? <br />
                                Discover Restaurants Near You Based on Your Taste and Dietary
                                Restrictions.
                            </h2>
                            <h3 id="shortDesc">Find your food match in three clicks.</h3>
                            <button className="button" onclick="location.href = 'cuisine.html'">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div id="picWrapper">
                        <img className="frontPic" id="front1" src={front1} alt="img" />
                        <img className="frontPic" id="front2" src={front2} alt="img" />
                        <img className="frontPic" id="front3" src={front3} alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}
