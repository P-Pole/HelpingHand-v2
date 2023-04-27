import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToBasket = (charity) => {
    if (!items.some((item) => item.id === charity.id)) {
      setItems((prevItems) => [...prevItems, charity]);
    }
  };

  const removeFromBasket = (charityId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== charityId));
  };

  const clearBasket = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider
      value={{ items, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  return useContext(BasketContext);
};
