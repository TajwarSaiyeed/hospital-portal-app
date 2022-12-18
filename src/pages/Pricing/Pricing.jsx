import React from "react";
import pricingImage from "../../assets/pricing.png";
import AllPlans from "../../components/plans/AllPlans/AllPlans";
import Subscribe from "../shared/Subscribe/Subscribe";

const Pricing = () => {
  return (
    <div>
      <div className="relative min-h-96 w-full">
        <img className="w-full object-cover h-full" src={pricingImage} alt="" />
        <h1 className="absolute tracking-widest top-1/4 right-5 uppercase text-white text-4xl md:text-8xl font-black">
          Pricing
        </h1>
      </div>
      <AllPlans />
      <Subscribe />
    </div>
  );
};

export default Pricing;
