import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Subscribe from "../shared/Subscribe/Subscribe";
import authImage from "../../assets/auth.png";
import logo from "../../assets/logo.png";
import { FcInfo } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";
import Loading from "../../components/Loading/Loading";
import SmallLoading from "../../components/SmallLoading/SmallLoading";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [err, setErr] = useState(null);
  const { user, loading, createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [recap, setRecap] = useState();
  const [token] = useToken(createdUserEmail);
  const [smallLoading, setSmallLoading] = useState(false);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let from = location.state?.from?.pathname || "/";

  if (token) {
    return <Navigate to={from}></Navigate>;
  }
  function onChange(value) {
    setRecap(true);
  }

  const handleCreateUser = (data) => {
    setSmallLoading(true);
    setErr(null);
    const { name, email, password, cpassword, phone, image, role } = data;

    if (password !== cpassword) {
      setErr("Password and Confirm Password must be same");
      return;
    }
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
        const userObj = {
          displayName: name,
          photoURL: imgData.data.display_url,
        };
        createUser(email, password)
          .then((res) => {
            console.log(res.user);
            updateUser(userObj)
              .then(() => {
                setErr(null);
                saveUser(name, email, phone, role, imgData.data.display_url);
                toast.success("SignUp Successfull");
                setSmallLoading(false);
              })
              .catch((err) => {
                const error = err.message.split("/")[1].split(").")[0];
                setErr(error);
                setSmallLoading(false);
              });
            setErr(null);
          })
          .catch((err) => {
            const error = err.message.split("/")[1].split(").")[0];
            setErr(error);
            setSmallLoading(false);
          });
      });
  };

  // save user to database

  const saveUser = (name, email, phone, role, image) => {
    const user = { name, email, phone, role, image };
    fetch(`${process.env.REACT_APP_serveraddress}/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setCreatedUserEmail(email);
        }
      });
  };

  // if loading
  if (loading) {
    return <Loading />;
  }

  // user redirect
  if (user) {
    const locTok = localStorage.getItem("accessToken");
    if (locTok) {
      return <Navigate to="/"></Navigate>;
    }
  }

  return (
    <div>
      <div className="relative min-h-96 w-full">
        <img className="w-full object-cover h-full" src={authImage} alt="" />
        <h1 className="absolute tracking-widest top-1/4 right-5 uppercase text-white md:text-8xl font-black">
          Sign Up
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full my-5">
        <div className="flex justify-center items-center flex-col">
          <img src={logo} alt="" />
          <h1 className="text-3xl font-bold text-[#00B2FE] uppercase">
            Sign Up
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(handleCreateUser)}
          className="w-3/4 md:w-1/2 flex flex-col gap-4 items-center justify-center"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Required" })}
              className="input input-bordered"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.name?.message}
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
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Required" })}
              placeholder="Enter your email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.email?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Phone Number</span>
            </label>
            <input
              type="number"
              {...register("phone", { required: "Required" })}
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
            {errors.phone && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.phone?.message}
                </span>
              </label>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Passoword is Required",
                minLength: {
                  value: 6,
                  message: "Password Must be 6 Characters or long",
                },
              })}
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.password?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              {...register("cpassword", {
                required: "Passoword is Required",
                minLength: {
                  value: 6,
                  message: "Password Must be 6 Characters or long",
                },
              })}
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
            {errors.cpassword && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.cpassword?.message}
                </span>
              </label>
            )}
          </div>
          <div className="flex gap-2">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  {...register("role")}
                  type="radio"
                  value="PATIENT"
                  name="role"
                  className="radio checked:bg-red-500"
                  defaultChecked
                />
                <span className="label-text">PATIENT</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  {...register("role")}
                  type="radio"
                  value="NURSE"
                  name="role"
                  className="radio checked:bg-blue-500"
                />
                <span className="label-text">NURSE</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  {...register("role")}
                  type="radio"
                  value="RECEPTIONIST"
                  name="role"
                  className="radio checked:bg-green-500"
                />{" "}
                <span className="label-text">RECEPTIONIST</span>
              </label>
            </div>
          </div>

          <ReCAPTCHA
            sitekey="6LdjbYsjAAAAABDqBJE2onN8-D_VaWwJvmfZuXoP"
            onChange={onChange}
          />
          <div className="form-control w-full">
            <button
              disabled={!recap}
              type="submit"
              className="btn bg-[#00B2FE] hover:bg-[#0e6c94] border-none mt-4"
            >
              {smallLoading ? <SmallLoading /> : "Sign Up"}
            </button>
          </div>
          {err && <p>{err}</p>}
        </form>
        <p className="my-4 text-xs sm:text-sm">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </div>
      <Subscribe />
    </div>
  );
};

export default Signup;
