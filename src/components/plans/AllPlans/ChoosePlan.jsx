import React, { useContext, useState } from "react";
import SmallLoading from "../../SmallLoading/SmallLoading";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const ChoosePlan = ({ selectPlan, setSelectPlan, refetch }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleBook = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const planName = form.planName.value;
    const price = form.price.value;
    const phone = form.phone.value;

    const book = {
      name,
      email,
      planName,
      price,
      phone,
      monthlyOrYearly: selectPlan?.monthly ? "Monthly" : "Yearly",
    };
    fetch(`${process.env.REACT_APP_serveraddress}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booked");
          setLoading(false);
          setSelectPlan(null);
          refetch();
          form.reset();
        } else {
          toast.error(data.message);
          setSelectPlan(null);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="addToCart" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setSelectPlan(null)}
            htmlFor="addToCart"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">
            {selectPlan?.plan}{" "}
            <span className="badge badge-primary">
              {selectPlan?.monthly ? selectPlan?.monthly : selectPlan?.yearly}{" "}
              Plan
            </span>
          </h3>
          <form onSubmit={handleBook}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                required
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Eamil</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                required
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Plan Name</span>
              </label>
              <input
                type="text"
                name="planName"
                defaultValue={selectPlan?.plan}
                disabled
                required
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="number"
                name="price"
                defaultValue={selectPlan?.price}
                disabled
                min={0}
                required
                className="input input-bordered"
                placeholder=""
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Phone</span>
              </label>
              <input
                type="number"
                min={0}
                name="phone"
                className="input input-bordered"
                placeholder=""
                required
              />
            </div>

            <div className="my-3">
              <button
                type="submit"
                className="btn border-none hover:bg-[#0011AD] bg-[#0011AD]/25 w-full"
              >
                {loading ? <SmallLoading /> : "Book"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChoosePlan;
