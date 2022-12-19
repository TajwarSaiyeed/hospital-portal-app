import React, { useState } from "react";
import SmallLoading from "../../components/SmallLoading/SmallLoading";
import { useForm } from "react-hook-form";
import { FcInfo } from "react-icons/fc";
import { toast } from "react-hot-toast";

const AddDoctor = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    setLoading(true);
    const { name, email, degree, image, fee } = data;

    const userImage = image[0];
    const formData = new FormData();
    formData.append("image", userImage);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const doctor = {
          name,
          email,
          degree,
          image: imgData.data.display_url,
          fee,
        };

        fetch(`${process.env.REACT_APP_serveraddress}/doctors`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              setLoading(false);
              toast.success("Doctor Added Successfully");
            }
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="md:text-6xl font-bold">Add Doctor</h1>
      <div className="w-3/4">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Required" })}
              className="input input-bordered"
            />
            {errors.name && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.name?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Required" })}
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.email?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Degree Or Department</span>
            </label>
            <input
              type="degree"
              {...register("degree", { required: "Required" })}
              placeholder="Degree"
              className="input uppercase input-bordered"
            />
            {errors.degree && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.degree?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Fee $</span>
            </label>
            <input
              type="number"
              {...register("fee", { required: "Required" })}
              placeholder="Fee"
              className="input input-bordered"
            />
            {errors.fee && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.fee?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Select Your Image</span>
            </label>
            <input
              required
              type="file"
              name="image"
              accept="image/*"
              {...register("image")}
              className="file-input file-input-bordered w-full "
            />
            {errors.image && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.image?.message}
                </span>
              </label>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="btn border-none mt-5 hover:bg-[#0011AD] bg-[#0011AD]/20 w-full"
            >
              {loading ? <SmallLoading /> : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
