import React, { useContext } from "react";
import "./navbar.css";
import "../../index.css";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

export const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Umar.Booking.App</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navBtn">Register</button>
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navBtn">Login</button>
            </Link>
            <button className="headerBtn mobileNavBtn">
              Sign in / Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
