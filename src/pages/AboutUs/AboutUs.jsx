import React from "react";
import aboutImage from "../../assets/about.png";
import HowItWorks from "./HowItWorks";
import Subscribe from "../shared/Subscribe/Subscribe";
import AboutSectionOne from "./AboutSectionOne";
import AboutSectionTwo from "./AboutSectionTwo";

const AboutUs = () => {
  return (
    <div>
      <div className="h-96 w-full">
        <img className="w-full object-cover h-full" src={aboutImage} alt="" />
      </div>
      <HowItWorks />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Subscribe />
    </div>
  );
};

export default AboutUs;
