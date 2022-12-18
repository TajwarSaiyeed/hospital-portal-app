import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Hospitals from "../pages/Hospitals/Hospitals";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Pricing from "../pages/Pricing/Pricing";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import MyBooking from "../pages/Dashboard/MyBooking";
import AddHospital from "../pages/Dashboard/AddHospital";
import AllUsers from "../pages/Dashboard/AllUsers";
import Payment from "../pages/Dashboard/Payment/Payment";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/hospitals",
        element: <Hospitals />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <MyBooking />,
          },
          {
            path: "/dashboard/payment/:id",
            element: <Payment />,
          },
          {
            path: "/dashboard/addhospital",
            element: (
              <AdminRoute>
                <AddHospital />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allusers",
            element: (
              <AdminRoute>
                <AllUsers />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);
