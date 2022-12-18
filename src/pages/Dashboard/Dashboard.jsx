import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Booking</Link>
          </li>
          {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/addhospital">Add Hospital</Link>
              </li>
              <li>
                <Link to="/dashboard/adddoctor">Add Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
