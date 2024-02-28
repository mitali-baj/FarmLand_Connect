import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with FarmLand Connect</span>
          <span className="secondaryText">
          Check out premium features with our subscription model.
            <br />
            
          </span>
          <button className="button" href>
            <a href="mailto:mitali.baj154@nmims.edu.in">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
