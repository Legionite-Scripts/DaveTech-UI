import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container } from "react-bootstrap";
import AboutImage from "./Images/aboutPageImage.jpg";

export const About = () => {
  return (
    <Container fluid id="About">
      <div className="container" id="aboutText">
        <h1 className="display-6">About Us</h1>
        <p>
          At DaveTech, we live and breathe technology, and we're here to enhance
          your digital lifestyle in every way possible. With a deep passion for
          innovation, we're constantly on the lookout for the most cutting-edge
          IT gadgets, computer accessories, and digital devices that can bring a
          new dimension to your tech experience. Our commitment to excellence is
          unwavering. We meticulously curate a diverse range of products,
          handpicking only those that meet our stringent criteria for quality,
          performance, and style. We believe that technology should not only
          make your life easier but also be a reflection of your individuality.
          That's why we go the extra mile to offer you the very best tech gear
          available in the market.
        </p>
      </div>
      <div className="container" id="aboutImageDiv">
        <img src={AboutImage} alt="About Image" />
      </div>
    </Container>
  );
};
