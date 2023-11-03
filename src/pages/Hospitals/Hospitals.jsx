import React, { useEffect, useState } from "react";
import hospitalImage from "../../assets/hospitals.png";
import Subscribe from "../shared/Subscribe/Subscribe";
import Hospital from "./Hospital";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 30;

  const pages = Math.ceil(count / limit);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_serveraddress}/hospitals?page=${page}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data.hospitals);
        setCount(data.count);
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      <div className="relative min-h-96 w-full">
        <img
          className="w-full object-cover h-full"
          src={hospitalImage}
          alt=""
        />
        <h1 className="absolute tracking-widest top-1/4 right-5 uppercase text-white text-4xl md:text-8xl font-black">
          Hospitals
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl text-[#ff67a6] my-3 font-bold uppercase">
          Our Hospitals
        </h1>
        {loading ? (
          <button className="btn btn-square loading my-2"></button>
        ) : (
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2">
            {hospitals.map((hospital) => {
              return <Hospital hospital={hospital} key={hospital._id} />;
            })}
          </div>
        )}
        <div className="btn-group">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={`${
                page === number && "btn-active"
              } btn btn-xs md:btn-md`}
              onClick={() => setPage(number)}
              key={number}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Hospitals;
