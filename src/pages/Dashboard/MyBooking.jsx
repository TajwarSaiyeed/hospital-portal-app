import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myBookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myBookings", user?.emi],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_serveraddress}/orders?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Plan Name</th>
              <th>Price</th>
              <th>Monthly/Yearly</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((myBooking, i) => (
              <tr key={myBooking._id}>
                <th>{i + 1}</th>
                <td>
                  <p className="badge badge-primary font-bold">
                    {myBooking.planName}
                  </p>
                </td>
                <td>${myBooking.price}</td>
                <td>
                  <p className="badge badge-lg font-bold">
                    {myBooking.monthlyOrYearly}
                  </p>
                </td>
                <td>
                  {myBooking?.paid === true ? (
                    "Paid"
                  ) : (
                    <button className="btn btn-success btn-sm">Pay</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyBooking;
