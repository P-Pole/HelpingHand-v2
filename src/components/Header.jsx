import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

import Logo from "/images/logo.png";

// export const SearchContext = createContext();

const Header = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container align-items-center d-flex flex-wrap">
          <Link to="/" className="me-4">
            <img width="90" src={Logo} alt="Logo" />
          </Link>
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link className="nav-link link-dark px-2 active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-dark px-2 active" to="/charities">
                Charities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-dark px-2 active" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>

          <ul className="nav">
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link link-dark px-2 active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link link-dark px-2 active"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
            {user && (
              <li className="nav-item">
                <button
                  className="nav-link link-dark px-2 active"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {/* <header className="py-3 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </header> */}
    </>
  );
};

export default Header;
