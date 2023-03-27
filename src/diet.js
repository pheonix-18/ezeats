import React, { useState } from "react";
import "./diet.css";
import "./App.css";
import logo2 from './images/vegetarian.jpg';
import logo3 from './images/vegan.jpg';
import logo4 from './images/none.jpg';


export default function Step2({ setValue, nextPage }) {
    const [selectedOption, setSelectedOption] = useState(null);


    const handleClick = (event) => {
        setValue(event.target.alt);
        console.log(event.target.alt);
        nextPage();
    };

    const preferences = [
        {
            key: 1,
            id: "none",
            name: "None",
            image: logo4,
            alt: "None",
            h: "No Restrictions",
            p: "No limitations on food choices.",
        },
        {
            key: 2,
            id: "vegetarian",
            name: "Vegetarian",
            image: logo2,
            alt: "Vegetarian",
            h: "Vegetarian",
            p: "No meat or fish.",
        },
        {
            key: 3,
            id: "vegan",
            name: "Vegan",
            image: logo3,
            alt: "Vegan",
            h: "Vegan",
            p: "No meat, fish, eggs, or dairy.",
        },
    ];

    const render_div = preferences.map(preference =>
        <div key={preference.key}
            id={preference.id}
            onClick={handleClick}
            className={`card`}>
            <img
                className="cardImg"
                src={logo4}
                alt={preference.alt}
                style={{ width: "100%" }}
            />
            <div className="container">
                <h4>
                    <b>{preference.h}</b>
                </h4>
                <p>{preference.p}</p>
            </div>
        </div>
    );

    return (
        <>
            <div>
                <div className="center">
                    <h1 className="prompt">Any dietary restrictions?</h1>
                </div>
                <div className="container-center cardcontainer" id="special">
                    {render_div}
                </div>
                <div className="buttonContainer">
                    <button
                        className="btn"
                        onClick={() => {
                            nextPage(0);
                        }}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </>
    );
}







