import React from "react";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import Subscribe from "../shared/Subscribe/Subscribe";
import serviceImage from "../../assets/services.png";
import GrowHospital from "../../components/GrowHospital/GrowHospital";
import AllPlans from "../../components/plans/AllPlans/AllPlans";

const Services = () => {
  return (
    <div>
      <div className="min-h-96 w-full">
        <img className="w-full object-cover h-full" src={serviceImage} alt="" />
      </div>
      <GrowHospital />
      <HomeAboutService />
      <AllPlans />
      <Subscribe />
    </div>
  );
};

export default Services;
