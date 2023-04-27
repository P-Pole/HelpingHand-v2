import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useBasket } from "./BasketContext";

const Charities = () => {
  const [charities, setCharities] = useState([]);
  const { user } = useAuth();
  const { items, addToBasket } = useBasket();

  useEffect(() => {
    fetchCharities();
  }, []);

  const handleAddToBasket = (charity) => {
    addToBasket(charity);
  };

  const fetchCharities = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/charities/");

      const data = await response.json();
      const confirmedCharities = data.filter(
        (charity) => charity.confirmed === true
      );
      setCharities(confirmedCharities);
    } catch (error) {
      console.error("Error fetching charities:", error);
    }
  };

  // const likeCharity = async (charityId) => {
  //   try {
  //     const response = await fetch(`http://127.0.0.1:8000/charities/${charityId}/like/`);

  //     const data = await response.json();
  //     const confirmedCharities = data.filter(charity => charity.confirmed === true);
  //     setCharities(confirmedCharities);
  //   } catch (error) {
  //     console.error("Error fetching charities:", error);
  //   }
  // };

  // `http://127.0.0.1:8000/charities/${charityId}/`
  return (
    <div className="container">
      <h2>Discover Charities Today!</h2>
      <div className="row">
        {charities.map((charity) => (
          <div key={charity.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={charity.image_url}
                className="card-img-top"
                alt={charity.name}
              />
              <div className="card-body">
                <h4 className="card-title">
                  <Link to={`/charities/${charity.id}`}>{charity.name}</Link>
                </h4>
                <p className="card-text">{charity.description}</p>
              </div>
              {user && (
                <div className="d-flex justify-content-between">
                  {/* <button className="btn btn-primary" onClick={likeCharity(charity.id)}>Like</button> */}
                  <button
                    className={
                      items.some((item) => item.id === charity.id)
                        ? "btn btn-secondary"
                        : "btn btn-success"
                    }
                    onClick={() => handleAddToBasket(charity)}
                  >
                    {items.some((item) => item.id === charity.id)
                      ? "Added"
                      : "Add to basket"}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charities;
