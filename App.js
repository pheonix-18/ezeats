import React from "react";
import { useState } from "react";
import "./App.css";
import Step1 from "./cuisine.js";
import Step2 from "./diet.js";
import Header from "./header";
import Home from "./home";
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstStepOption, setFirstStepOption] = useState("initial");
  const [secondStepOption, setSecondStepOption] = useState("second");

  return (
    <div className="backgroundImg">
      <Header />
      <Home />
      {/* <div className="whiteRectangle">
        {currentPage === 1 && (
          <Step1
            setValue={setFirstStepOption}
            nextPage={() => setCurrentPage(2)}
          />
        )}
        {currentPage === 2 && (
          <Step2
            setValue={setSecondStepOption}
            nextPage={() => setCurrentPage(1)}
          />
        )}
      </div> */}
    </div>
  );
}