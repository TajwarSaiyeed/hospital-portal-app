import React from "react";
import aboutImage from "../../assets/about.png";
import HowItWorks from "./HowItWorks";
import Subscribe from "../shared/Subscribe/Subscribe";
import AboutSectionOne from "./AboutSectionOne";
import AboutSectionThree from "./AboutSectionThree";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import AllPlans from "../../components/plans/AllPlans/AllPlans";

const AboutUs = () => {
  return (
    <div>
      <div className="min-h-96 w-full">
        <img className="w-full object-cover h-full" src={aboutImage} alt="" />
      </div>
      <HowItWorks />
      <AboutSectionOne />
      <HomeAboutService />
      <AboutSectionThree />
      <AllPlans />
      <Subscribe />
    </div>
  );
};

export default AboutUs;
