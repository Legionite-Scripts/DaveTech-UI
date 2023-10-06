import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid id="Footer">
      <div className="container" id="footerDetails">
        <div className="container" id="icons">
          <p>
            Stay connected with the latest gadgets and gears to elevate your
            tech game.
          </p>
          <div className="container" id="innerIconDiv">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div className="container" id="links">
          <div className="container" id="innerLink">
            <h6 className="display-6">Explore</h6>
            <a href="#">Devices</a>
            <a href="#">Laptops</a>
            <a href="#">Smartwatches</a>
            <a href="#">Utility</a>
          </div>
          <div className="container" id="innerLink">
            <h6 className="display-6">Statistics</h6>
            <a href="#">Device Availability</a>
            <a href="#">Discounts</a>
          </div>
          <div className="container" id="innerLink">
            <h6 className="display-6">Company</h6>
            <a href="#">About Us</a>
            <a href="#">Career</a>
            <a href="#">Support</a>
            <a href="#">Partners</a>
          </div>
          <div className="container" id="innerLink">
            <h6 className="display-6">Resources</h6>
            <a href="#">Help Center</a>
            <a href="#">Platform Status</a>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
        <div className="container" id="copyright">
          <div className="container" id="firstCopy">
            <p>© CopyRight 2023 - DaveTech</p>
          </div>
          <div className="container" id="secondCopy">
            <p style={{ marginRight: "3%" }}>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
