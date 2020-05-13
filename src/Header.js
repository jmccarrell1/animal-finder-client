import React from "react";

export const Header = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top shadow-sm bg-white">
      <a href="index.html" className="navbar-brand">
        Bootstrap 101
      </a>
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="navbar-text ml-lg-3">
          <a href="#" className="btn btn-primary text-white shadow">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};
