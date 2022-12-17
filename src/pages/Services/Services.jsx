import React from "react";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import Subscribe from "../shared/Subscribe/Subscribe";
import ServicesSectionOne from "./ServicesSectionOne";

const Services = () => {
  return (
    <div>
      <ServicesSectionOne />
      <HomeAboutService />
      <Subscribe />
    </div>
  );
};

export default Services;
