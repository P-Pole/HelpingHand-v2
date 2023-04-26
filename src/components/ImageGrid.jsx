import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

const ImageGrid = () => {
  const [charities, setCharities] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/charities/");
      const data = await response.json();
      setCharities(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {charities.map((charity) => (
          <div className="col-md-4" key={charity.id}>
            <div className="card">
              {charity.image && (
                <img
                  src={charity.image}
                  alt={charity.name}
                  className="card-img-top"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{charity.name}</h5>
                <p className="card-text">{charity.description}</p>
                {currentUser && (
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Like</button>
                    <button className="btn btn-success">Add to basket</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
