import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcInfo } from "react-icons/fc";
import SmallLoading from "../../components/SmallLoading/SmallLoading";

const AddHospital = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddHospital = (data) => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_serveraddress}/hospitals`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
          setLoading(false);
        }
      });
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-6xl font-bold text-[#0011AD]">Add A Hospital</h1>
      <form
        className="w-full my-5 flex justify-center items-center flex-col p-5"
        onSubmit={handleSubmit(handleAddHospital)}
      >
        {/* hospital name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hospital Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Required" })}
            placeholder="Type here"
            className="input input-bordered w-full input-sm"
          />
          {errors.name && (
            <label className="label">
              <span className="label-text flex justify-center items-center gap-1">
                <FcInfo /> {errors.name?.message}
              </span>
            </label>
          )}
        </div>
        {/* hospital ein */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hospital EIN</span>
          </label>
          <input
            type="number"
            {...register("ein", { required: "Required" })}
            placeholder="Type here"
            className="input input-bordered w-full input-sm"
          />
          {errors.ein && (
            <label className="label">
              <span className="label-text flex justify-center items-center gap-1">
                <FcInfo /> {errors.ein?.message}
              </span>
            </label>
          )}
        </div>
        {/* hospital hospital_bed_count */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hospital Bed Count</span>
          </label>
          <input
            type="number"
            {...register("hospital_bed_count", { required: "Required" })}
            placeholder="Type here"
            className="input input-bordered w-full input-sm"
          />
          {errors.hospital_bed_count && (
            <label className="label">
              <span className="label-text flex justify-center items-center gap-1">
                <FcInfo /> {errors.hospital_bed_count?.message}
              </span>
            </label>
          )}
        </div>
        {/* hospital medicare_provider_number */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hospital Medicard Provider</span>
          </label>
          <input
            type="number"
            {...register("medicare_provider_number", { required: "Required" })}
            placeholder="Type here"
            className="input input-bordered w-full input-sm"
          />
          {errors.medicare_provider_number && (
            <label className="label">
              <span className="label-text flex justify-center items-center gap-1">
                <FcInfo /> {errors.medicare_provider_number?.message}
              </span>
            </label>
          )}
        </div>
        {/* hospital hospital_org_id */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hospital Org ID</span>
          </label>
          <input
            type="number"
            {...register("hospital_org_id", { required: "Required" })}
            placeholder="Type here"
            className="input input-bordered w-full input-sm"
          />
          {errors.hospital_org_id && (
            <label className="label">
              <span className="label-text flex justify-center items-center gap-1">
                <FcInfo /> {errors.hospital_org_id?.message}
              </span>
            </label>
          )}
        </div>
        {/* hospital street_address */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hospital Street Address</span>
          </label>
          <input
            type="text"
            {...register("street_address", { required: "Required" })}
            placeholder="Type here"
            className="input input-bordered w-full input-sm"
          />
          {errors.street_address && (
            <label className="label">
              <span className="label-text flex justify-center items-center gap-1">
                <FcInfo /> {errors.street_address?.message}
              </span>
            </label>
          )}
        </div>
        {/* hospital zip_code */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Hospital Zip Code</span>
          </label>
          <input
            type="number"
            {...register("zip_code", { required: "Required" })}
            placeholder="Type here"
            className="input input-bordered w-full input-sm"
          />
          {errors.zip_code && (
            <label className="label">
              <span className="label-text flex justify-center items-center gap-1">
                <FcInfo /> {errors.zip_code?.message}
              </span>
            </label>
          )}
        </div>

        {/* submit */}
        <div>
          <button
            type="submit"
            className="btn border-none mt-5 hover:bg-[#0011AD] bg-[#0011AD]/20 w-full btn-sm"
          >
            {loading ? <SmallLoading /> : "Add Hospital"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHospital;
