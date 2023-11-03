import React from "react";

const Hospital = ({ hospital }) => {
  const {
    name,
    ein,
    hospital_bed_count,
    medicare_provider_number,
    street_address,
    zip_code,
    hospital_org_id,
  } = hospital;
  return (
    <div
      className={`${
        hospital_org_id % 2 === 0 ? "bg-yellow-500" : "bg-rose-500"
      } w-full md:w-80 p-3 rounded-lg`}
    >
      <h1 className="text-xl font-bold">{name}</h1>
      <p>Ein : {ein}</p>
      <p>Bed : {hospital_bed_count}</p>
      <p>Medicare : {medicare_provider_number}</p>
      <p>Address : {street_address}</p>
      <p>Zip : {zip_code}</p>
    </div>
  );
};

export default Hospital;
