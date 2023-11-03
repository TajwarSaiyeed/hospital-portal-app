import React from "react";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import serviceImage from "../../assets/services.png";
import GrowHospital from "../../components/GrowHospital/GrowHospital";

const Services = () => {
  return (
    <div>
      <div className="relative min-h-96 w-full">
        <img className="w-full object-cover h-full" src={serviceImage} alt="" />
        <h1 className="absolute tracking-widest top-1/4 right-5 uppercase text-white text-4xl md:text-8xl font-black">
          Services
        </h1>
      </div>
      <GrowHospital />
      <HomeAboutService />
    </div>
  );
};

export default Services;
