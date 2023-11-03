import React from "react";
import aboutImage from "../../assets/about.png";
import HowItWorks from "./HowItWorks";
import AboutSectionOne from "./AboutSectionOne";
import AboutSectionThree from "./AboutSectionThree";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";

const AboutUs = () => {
  return (
    <div>
      <div className="relative min-h-96 w-full">
        <img className="w-full object-cover h-full" src={aboutImage} alt="" />
        <h1 className="absolute tracking-widest top-1/4 right-5 uppercase text-white text-4xl md:text-8xl font-black">
          About Us
        </h1>
      </div>
      <HowItWorks />
      <AboutSectionOne />
      <HomeAboutService />
      <AboutSectionThree />
      <div className="my-8" />
    </div>
  );
};

export default AboutUs;
