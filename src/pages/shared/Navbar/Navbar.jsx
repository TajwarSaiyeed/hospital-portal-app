import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const signout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <>
      <li>
        <Link className="text-sm font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-sm font-semibold" to="/pricing">
          Pricing
        </Link>
      </li>
      <li>
        <Link className="text-sm font-semibold" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="text-sm font-semibold" to="/hospitals">
          Hospitals
        </Link>
      </li>
      <li>
        <Link className="text-sm font-semibold" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="text-sm font-semibold" to="/aboutus">
          About
        </Link>
      </li>
      {!user?.email && (
        <li>
          <Link className="bg-[#00B2FE] text-white" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className={`flex btn btn-ghost gap-3 normal-case text-xl`}>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={logo} alt="" />
            </div>
          </div>
        </Link>
      </div>
      <div className="hidden lg:navbar-end lg:flex">
        <ul className="menu menu-horizontal p-0 gap-1">{menuItems}</ul>
      </div>
      {user && (
        <div className="hidden lg:block dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="mb-2 justify-between">
                Profile
              </Link>
            </li>
            {!isAdmin && (
              <li>
                <Link to="/profile" className="mb-2 justify-between">
                  Dashboard
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/profile" className="mb-2 justify-between">
                  Admin Dashboard
                </Link>
              </li>
            )}

            <li>
              <button onClick={signout} className="btn btn-error">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
      {/* {isAdmin && (
        <div className="navbar-end lg:hidden">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
