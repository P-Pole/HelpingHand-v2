import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Charities from "./Charities";
import AboutUs from "./aboutUs";
import Login from "./Login";
import Register from "./register";
import CharityDetails from "./CharityDetails";

const Feed = () => {
  return (
    <div className="feed">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/charities/:charityId" element={<CharityDetails />} />
      </Routes>
    </div>
  );
};

export default Feed;
