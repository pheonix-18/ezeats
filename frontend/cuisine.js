import React from "react";
import "./cuisinestyle.css";
import './index.css';
import './style.css';
import logo from './images/chinese.jpg';
import logo2 from './images/mexican.jpg';
import logo3 from './images/italian.jpg';
import logo4 from './images/indian.jpg';
import logo5 from './images/korean.jpg';
import logo6 from './images/japanese.jpg';
import logo7 from './images/jamaican.jpg';
import logo8 from './images/american.jpg';
import logo9 from './images/philippine.jpg';


export default function Step1({ setValue, nextPage }) {
    const handleClick = (event) => {
        console.log(event.target.alt);
        setValue(event.target.alt);
        nextPage();
    }

    const cuisines = [
        {
            key: 1,
            name: "Chinese",
            image: logo,
            alt: "Chinese",
        },
        {
            key: 2,
            name: "Mexican",
            image: logo2,
            alt: "Mexican",
        },
        {
            key: 3,
            name: "Italian",
            image: logo3,
            alt: "Italian",
        },
        {
            key: 4,
            name: "Indian",
            image: logo4,
            alt: "Indian",
        },
        {
            key: 5,
            name: "Korean",
            image: logo5,
            alt: "Korean",
        },
        {
            key: 6,
            name: "Japanese",

            image: logo6,
            alt: "Japanese",
        },
        {
            key: 7,
            name: "Jamaican",
            image: logo7,
            alt: "Jamaican",
        },
        {
            key: 8,
            name: "American",
            image: logo8,
            alt: "America",
        },
        {
            key: 9,
            name: "Philippine",
            image: logo9,
            alt: "Philippine",
        },
    ];
    const cuisineList = cuisines.map(cuisine =>
        <div key={cuisine.key} onClick={handleClick} className="card">
            <img className="card-image" src={cuisine.image} alt={cuisine.alt} />
            <div className="container-width-parent">
                <h4>
                    <b>{cuisine.name}</b>
                </h4>
            </div>
        </div>
    );
    return (
        <>
            <div className="container-center">
                {cuisineList}
            </div>
        </>
    )
}





