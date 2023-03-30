import React from "react";
import "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="bg-secondary-subtle mx-auto">
      <nav className="navbar">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div>
            <a className="navbar-brand" href="#">
              <img src="logo.png" alt="" />
            </a>
          </div>
          <div>
            <a className="me-3" href="/home">
              Home
            </a>
            <a className="me-3" href="/blogs">
              Blogs
            </a>
            <a className="me-3" href="/about-us">
              About Us
            </a>
            <img className="me-3 rounded-circle" src="user.jpg" alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
