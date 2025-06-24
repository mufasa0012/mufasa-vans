<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure the logo exists in src/assets/
import './Navbar.css'; // Custom CSS for styling

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img
              src={logo}
              alt="Mufasa Vans Logo"
              className="brand-logo"
            />
            <h1 className="mb-0 brand-title">Mufasa Vans for Hire</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Fleet", path: "/fleet" },
                { name: "Tours", path: "/tour" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
                { name: "Local Booking", path: "/local-booking", highlight: true },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link nav-item-link ${
                      item.highlight ? "highlight-link" : ""
                    }`}
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Small Footer Text */}
      <div className="text-center small-text-footer py-2">
        <small>Created by Moses Hika | Phone: +254704095021</small>
      </div>
    </>
  );
};

export default Navbar;
=======
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Mufasa Vans</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/fleet">Fleet</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tour">Tours</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> 9ce5eece53e82ac57f3680925f259fc8f28b68f6
