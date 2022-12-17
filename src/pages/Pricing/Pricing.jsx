import React from "react";
import pricingImage from "../../assets/pricing.png";

const Pricing = () => {
  return (
    <div>
      <div className="min-h-96 w-full relative">
        <img className="w-full object-cover h-full" src={pricingImage} alt="" />
      </div>
    </div>
  );
};

export default Pricing;
