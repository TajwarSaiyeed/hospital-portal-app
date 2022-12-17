import React, { useEffect, useState } from "react";
import hospitalImage from "../../assets/hospitals.png";
import Subscribe from "../shared/Subscribe/Subscribe";
import Hospital from "./Hospital";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 30;

  const pages = Math.ceil(count / limit);

  useEffect(() => {
    fetch(`http://localhost:5000/hospitals?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data.hospitals);
        setCount(data.count);
      });
  }, [page]);

  return (
    <div>
      <img src={hospitalImage} alt="" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl text-[#0011AD] my-3 font-bold uppercase">
          Our Hospitals
        </h1>
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2">
          {hospitals.map((hospital) => {
            return <Hospital hospital={hospital} key={hospital._id} />;
          })}
        </div>
        <div className="btn-group">
          {[...Array(pages).keys()].map((page) => (
            <button
              className="btn btn-xs md:btn-md"
              onClick={() => setPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Hospitals;
