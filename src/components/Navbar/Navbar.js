import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <div></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-center align-items-center m-auto">
            <Link to="/" className="btn btn-outline-primary mx-2 my-1">
              Home
            </Link>
            <Link to="/create-user" className="btn btn-outline-primary mx-2 my-1">
              Create User
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
