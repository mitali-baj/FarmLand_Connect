import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={300} />
          <span className="secondaryText">
            Our vision is to facilitate seamless <br />
            farmland interactions for all your needs.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Vile Parle, Mumbai</span>
          <div className="flexCenter f-menu">
          
            <span><a href="/Properties">Listings</a></span>
            {/* <span><a href="/ChatBot">LegalAId</a></span> */}
            <a href="mailto:mitali.baj154@nmims.edu.in">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
