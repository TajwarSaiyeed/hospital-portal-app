import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-hot-toast";

const AllDoctors = () => {
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_serveraddress}/doctors`,
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

  // delete a doctor
  const deleteDoctor = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_serveraddress}/doctors/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      if (data.deletedCount > 0) {
        toast.success("Doctor Deleted Successfully");
        refetch();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {doctors.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Degree Or Department</th>
                <th>Fee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, i) => (
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={doctor.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold capitalize">
                          {doctor.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{doctor.email}</td>
                  <td className="capitalize">
                    <p className="badge badge-primary">{doctor.degree}</p>
                  </td>
                  <td>${doctor.fee}</td>
                  <th>
                    <button
                      onClick={() => deleteDoctor(doctor._id)}
                      className="btn btn-error btn-xs"
                    >
                      X
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-3xl">No Doctor Available</h1>
        </div>
      )}
    </>
  );
};

export default AllDoctors;
