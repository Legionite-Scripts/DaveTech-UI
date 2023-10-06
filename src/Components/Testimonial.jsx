import React from "react";
import { Container } from "react-bootstrap";
import imageOne from "./Images/image1.jpg";

export const Testimonial = () => {
  return (
    <Container fluid id="Testimonial">
      <div className="container" id="testimonialText">
        <h1 className="display-6">
          Why Choose <span>Davetech stores?</span>
        </h1>
        <div className="container" id="linkDiv">
          <li>Premium Quality Products</li>
          <li>Expert Customer Support</li>
          <li>Fast & Secure Shipping</li>
          <li>Hassle-Free Returns</li>
        </div>
        <div className="container" id="testimonialButtonDiv">
          <a href="https://wa.me/+2348023225559" target="blank">
            <button>Shop Now</button>
          </a>
        </div>
      </div>
      <div className="container" id="testimonialImageDiv">
        <img src={imageOne} alt="Testimonial" />
      </div>
    </Container>
  );
};
