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
    const handleClick = () => {
        nextPage();
    }


    return (
        <>
            <div className="container-center">
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo} alt="Chinese Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Chinese</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo2} alt="Mexican Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Mexican</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo3} alt="Italian Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Italian</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo4} alt="Indian Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Indian</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo5} alt="Korean Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Korean</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo6} alt="Japanese Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Japanese</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo7} alt="Jamaican Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Jamaican</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo8} alt="American Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>American</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
                <div onClick={handleClick} className="card">
                    <img className="card-image" src={logo9} alt="Philippine Cuisine" />
                    <div className="container-width-parent">
                        <h4>
                            <b>Philippine</b>
                        </h4>
                        <p>Architect &amp; Engineer</p>
                    </div>
                </div>
            </div>
        </>
    )
}





