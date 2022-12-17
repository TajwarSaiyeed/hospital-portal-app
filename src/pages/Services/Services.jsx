import React from "react";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import Subscribe from "../shared/Subscribe/Subscribe";
import serviceImage from "../../assets/services.png";
import GrowHospital from "../../components/GrowHospital/GrowHospital";

const Services = () => {
  return (
    <div>
      <div className="h-96 w-full">
        <img className="w-full object-cover h-full" src={serviceImage} alt="" />
      </div>
      <GrowHospital />
      <HomeAboutService />
      <Subscribe />
    </div>
  );
};

export default Services;
