import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import { Helmet } from 'react-helmet';



const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    {/* <Companies /> */}
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Helmet>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/98f7d71e-9d9d-4070-8720-583e06eb9404/webchat/config.js" defer></script>
    </Helmet>
  </div>
  )
}

export default Website