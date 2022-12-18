import React from "react";
import pricingImage from "../../assets/pricing.png";
import AllPlans from "../../components/plans/AllPlans/AllPlans";
import Subscribe from "../shared/Subscribe/Subscribe";

const Pricing = () => {
  return (
    <div>
      <div className="min-h-96 w-full relative">
        <img className="w-full object-cover h-full" src={pricingImage} alt="" />
      </div>
      <AllPlans />
      <Subscribe />
    </div>
  );
};

export default Pricing;
