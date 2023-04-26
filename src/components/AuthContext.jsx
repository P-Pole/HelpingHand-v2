import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  const login = async (email, password) => {
    // Your API call for login goes here.
    const response = await fetch("http://127.0.0.1:8000/user_auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(
        `Error occurred while logging in, status: ${response.status}`
      );
    }

    const data = await response.json();
    if (data.success) {
      const { user } = data;
      setUser(user);
      // setUser(data);
      return true;
    } else {
      setUser(null);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
