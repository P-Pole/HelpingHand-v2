import React from 'react';
import { useAuth } from "./AuthContext";

const Basket = () => {
    const { user } = useAuth();
     return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Basket;
