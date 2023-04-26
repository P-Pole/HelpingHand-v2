import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Charities = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/charities/");
      const data = await response.json();
      const confirmedCharities = data.filter(charity => charity.confirmed === true);
      setCharities(confirmedCharities);
    } catch (error) {
      console.error("Error fetching charities:", error);
    }
  };

  return (
    <div className="container">
      <h2>Discover Charities Today!

      </h2>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charities;
