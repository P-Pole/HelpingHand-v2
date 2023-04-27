import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useBasket } from "./BasketContext";

const Basket = () => {
  const { user } = useAuth();
  const { items, removeFromBasket, clearBasket } = useBasket();
  const [amount, setAmount] = useState("");
  const [isSubscription, setIsSubscription] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      charity_ids: items.map((item) => item.id),
      amount: parseInt(amount),
      subscription: isSubscription,
      user_id: user.id,
    };

    console.log("Payload:", payload);

    const apiEndpoint = "http://127.0.0.1:8000/transactions/";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response:", response);
      console.log("Response status:", response.status);

      if (response.ok) {
        clearBasket();
        setSuccessMessage(
          "Transaction completed successfully! Basket is now empty."
        );
      } else {
        setSuccessMessage("Transaction failed!");
      }
    } catch (error) {
      console.error("Error submitting the transaction:", error);
    }
  };
  if (!user) {
    return <div className="container">Please login first!</div>;
  }

  return (
    <div className="container">
      <h2>Your Basket</h2>
      <ul className="list-group mb-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <img
                src={item.image_url}
                alt={item.name}
                className="img-thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
              <span className="ml-3">{item.name}</span>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => removeFromBasket(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isSubscription"
            checked={isSubscription}
            onChange={(e) => setIsSubscription(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="isSubscription">
            Monthly Subscription
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Complete Transaction
        </button>
      </form>
      <div className="container">{successMessage}</div>
    </div>
  );
};

export default Basket;
