import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { state } = useLocation();
  const { planName, price, monthlyOrYearly } = state.query;
  return (
    <div className="my-5 gap-10 flex flex-col w-full justify-center items-center">
      <div className="w-1/2">
        <h3 className="text-3xl">Payment for {planName} plan</h3>

        <p className="text-xl">
          Please Pay <strong className="text-error">${price}</strong> for Your{" "}
          <span className="badge badge-secondary badge-lg">
            {monthlyOrYearly}
          </span>{" "}
          Plan{" "}
          <span className="text-green-500 font-black">{planName} plan</span>
        </p>
      </div>
      <div className="w-1/2">
        <Elements stripe={stripePromise}>
          <CheckOutForm plan={state.query} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
