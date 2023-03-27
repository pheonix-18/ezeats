import React from "react";
import { useState, useEffect } from "react";
// import await from "await";
import Wheel from "./Wheel";
export default function Step3({ option1, option2 }) {
    // Make http call to the backend here
    const [data, setData] = useState(null);
    const handleLogin = async (option1, option2) => {
        const lat = 28.066662;
        const long = -82.416664;
        await fetch('http://localhost:8000/', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                latitude: 28.066662,
                longitude: -82.416664,
                cusine: option1,
                preference: option2,
                radius: "2000"
            }),
        })
            // check the response status and print it in the console
            .then(response => response.json())
            .then(data => {
                // Do something with the JSON data here
                console.log(data.restraunts);
                setData(data.restraunts);
            })
    }

    handleLogin(option1, option2);
    return (
        <Wheel />
    );

}
