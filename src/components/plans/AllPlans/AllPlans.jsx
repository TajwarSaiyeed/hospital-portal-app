import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AllPlanCard from "./AllPlanCard";
import ChoosePlan from "./ChoosePlan";
import Loading from "../../Loading/Loading";

const AllPlans = () => {
  const [active, setActive] = useState("Monthly");
  const [loading, setLoading] = useState(false);
  const [selectPlan, setSelectPlan] = useState(null);

  const handleActive = (e) => {
    setLoading(true);
    setActive(e.target.innerText);
  };

  const {
    data: plans = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["plans", active],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_serveraddress}/plans?plan=${active}`
        );
        const data = await res.json();
        setLoading(false);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex mt-5 mb-10 flex-col justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="md:text-6xl font-bold text-[#0011AD]">
          Choose Your Pricing Plan
        </h1>
        <div className="tabs tabs-boxed">
          <button
            onClick={handleActive}
            className={`tab tab-lg ${active === "Monthly" && "tab-active"}`}
          >
            Monthly
          </button>
          <button
            onClick={handleActive}
            className={`tab tab-lg ${active === "Yearly" && "tab-active"}`}
          >
            Yearly
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          {plans?.map((plan) => {
            return (
              <AllPlanCard
                setSelectPlan={setSelectPlan}
                key={plan?._id}
                plan={plan}
                active={active}
              />
            );
          })}
        </div>
      )}

      {selectPlan && (
        <ChoosePlan
          refetch={refetch}
          setSelectPlan={setSelectPlan}
          selectPlan={selectPlan}
        />
      )}
    </div>
  );
};

export default AllPlans;
