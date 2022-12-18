import React, { useContext, useState } from "react";
import authImage from "../../assets/auth.png";
import logo from "../../assets/logo.png";
import { Link, Navigate, useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { FcInfo } from "react-icons/fc";
import toast from "react-hot-toast";
import Subscribe from "../shared/Subscribe/Subscribe";
import SmallLoading from "../../components/SmallLoading/SmallLoading";

const Login = () => {
  const [err, setErr] = useState("");
  const { user, login, loading } = useContext(AuthContext);
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [smallLoading, setSmallLoading] = useState(false);
  const [token] = useToken(loginUserEmail);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let from = location.state?.from?.pathname || "/";

  if (token) {
    return <Navigate to={from}></Navigate>;
  }

  const handleLogin = (data) => {
    setSmallLoading(true);
    const { email, password } = data;

    login(email, password)
      .then(() => {
        setErr(null);
        toast.success("Login Successful");
        setLoginUserEmail(email);
        setSmallLoading(false);
      })
      .catch((err) => {
        const error = err.message.split("/")[1].split(").")[0];
        setErr(error);
        setSmallLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }
  if (user) {
    const locTok = localStorage.getItem("accessToken");
    if (locTok) {
      return <Navigate to={from}></Navigate>;
    }
  }

  return (
    <div>
      <div className="relative min-h-96 w-full">
        <img className="w-full object-cover h-full" src={authImage} alt="" />
        <h1 className="absolute tracking-widest top-1/4 right-5 uppercase text-white md:text-8xl font-black">
          Login
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full my-5">
        <div>
          <img src={logo} alt="" />
          <h1 className="text-3xl font-bold text-[#00B2FE] uppercase">Login</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="w-3/4 md:w-1/2 flex flex-col items-center justify-center"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
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
            <button
              type="submit"
              className="btn bg-[#00B2FE] hover:bg-[#0e6c94] border-none mt-4"
            >
              {smallLoading ? <SmallLoading /> : "Login"}
            </button>
          </div>
          {err && <p className="text-red-500 font-bold uppercase">{err}</p>}
        </form>
        <p className="my-4 text-xs sm:text-sm">
          Don’t have an account?{" "}
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
      <Subscribe />
    </div>
  );
};

export default Login;
