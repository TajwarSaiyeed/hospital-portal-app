import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ plan }) => {
  const stripe = useStripe();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const elements = useElements();
  const { email, price, planName } = plan;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_serveraddress}/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(plan),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [plan]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error);
      setIsLoading(true);
    } else {
      setCardError("");
    }
    setSuccess("");
    setIsLoading(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: planName,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // payment

      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        planId: plan._id,
      };
      //  store payment info to the database

      fetch(`${process.env.REACT_APP_serveraddress}/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congrats! Your Payment Completed");
            setTransactionId(paymentIntent.id);
          }
        })
        .catch((err) => console.log(err));

      setIsLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="mt-5 w-36 btn btn-outline btn-success"
        disabled={!stripe || !clientSecret || isLoading}
      >
        Pay
      </button>
      {isLoading && (
        <div className="h-40 flex justify-center items-center">
          <button className="btn loading">loading</button>
        </div>
      )}
      {cardError && (
        <p className="uppercase text-error text-md">{cardError.message}</p>
      )}
      {success && (
        <>
          <p className="uppercase text-secondary text-xl">{success}</p>
          <p className="font-bold text-primary text-xl">
            Your TransactionId : {transactionId}
          </p>
        </>
      )}
    </form>
  );
};

export default CheckOutForm;
