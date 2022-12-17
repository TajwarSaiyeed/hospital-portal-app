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

const Signup = () => {
  const [err, setErr] = useState(null);
  const { user, loading, createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
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

  const handleCreateUser = (data) => {
    setSmallLoading(true);
    setErr(null);
    const { name, email, password, cpassword, phone } = data;

    if (password !== cpassword) {
      setErr("Password and Confirm Password must be same");
      setSmallLoading(false);
      return;
    }
    const userObj = {
      displayName: name,
    };
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser(userObj)
          .then(() => {
            setErr(null);
            saveUser(name, email, phone);
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
  };

  // save user to database

  const saveUser = (name, email, phone) => {
    const user = { name, email, phone };
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
      <img src={authImage} alt="" />
      <div className="flex flex-col justify-center items-center w-full my-5">
        <div className="flex justify-center items-center flex-col">
          <img src={logo} alt="" />
          <h1 className="text-3xl font-bold text-[#00B2FE] uppercase">
            Sign Up
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(handleCreateUser)}
          className="w-3/4 md:w-1/2 flex flex-col items-center justify-center"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Required" })}
              className="input input-bordered"
              placeholder=""
            />
            {errors.name && (
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1">
                  <FcInfo /> {errors.name?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Phone Number</span>
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
              <span className="label-text">Password</span>
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
              <span className="label-text">Confirm Password</span>
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
          <div className="form-control w-full">
            <button
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
