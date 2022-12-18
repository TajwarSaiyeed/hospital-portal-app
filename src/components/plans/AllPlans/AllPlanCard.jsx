import React from "react";

const AllPlanCard = ({ plan, active }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl my-3 w-80 h-[620px] flex flex-col justify-between items-center pb-5 gap-5 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)">
      <div
        className="w-full text-4xl font-bold  shadow-lg shadow-white rounded-2xl min-h-[200px] flex flex-col justify-center items-center"
        style={{
          background: "rgba(0, 178, 254, 0.5)",
        }}
      >
        <h1 className="">{plan?.plan}</h1>
        <p>
          ${plan?.price} /{active === "Monthly" ? "Monthly" : "Yearly"}
        </p>
      </div>
      <ul>
        {plan?.features?.map((feature, i) => (
          <li style={{ listStyle: "outside" }} className="text-xl" key={i}>
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-wide btn-primary">Choose Plan</button>
    </div>
  );
};

export default AllPlanCard;
