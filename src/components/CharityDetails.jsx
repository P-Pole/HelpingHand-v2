import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "/images/logo.png";

const CharityDetails = () => {
  const { charityId } = useParams();
  const [charity, setCharity] = useState(null);

  useEffect(() => {
    fetchCharity();
  }, []);

  const fetchCharity = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/charities/${charityId}/`);
      const data = await response.json();
      setCharity(data);
    } catch (error) {
      console.error("Error fetching charity details:", error);
    }
  };

  return (
    charity ? (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Logo}
              className="my-4"
              alt="Logo"
              width="90"
            />
          </div>
        </div>
        <h2>{charity.name}</h2>
        <p>{charity.full_description}</p>
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default CharityDetails;
