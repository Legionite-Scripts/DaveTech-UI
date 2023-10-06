import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for sidenav
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigationbar = () => {
  return (
    <Navbar expand="lg" id="navbar">
      <Navbar.Brand href="/" id="first">
        DaveTech
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggleBtn" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Navbar.Brand href="/" id="second">
            DaveTech
          </Navbar.Brand>
          <Link to="/" id="link">
            Home
          </Link>
          <Link to="/about" id="link">
            About Us
          </Link>
          <Link to="/product" id="link">
            Products
          </Link>
          <Link to="/testimonial" id="link">
            Testimonial
          </Link>

          <a href="mailto:daveonwuka80@gmail.com">
            <button id="contactBtn">E-mail</button>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
