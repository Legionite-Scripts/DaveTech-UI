import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container } from "react-bootstrap";
import ImageOne from "./Images/image1.jpg";
import ImageTwo from "./Images/image2.jpg";
import ImageThree from "./Images/image3.jpg";
import ImageFour from "./Images/image4.jpg";
import ImageFive from "./Images/image5.jpg";
import ImageSix from "./Images/image6.jpg";

export const Homepage = () => {
  return (
    <Container fluid id="Homepage">
      <Container fluid id="homepageText">
        <h1 className="display-6">
          Experience <span>Cutting-Edge </span>IT Gadgets & Accessories
        </h1>
        <p>Elevate your Tech Game with the Latest Gear</p>
        <a href="https://wa.me/+2348023225559" target="blank">
          <button className="btn btn-success">Shop Now</button>
        </a>
      </Container>
      <Container fluid id="homepageImageDiv">
        {/* First Inner Section */}
        <div className="container" id="firstImageInnerDiv">
          <div id="image">
            <img src={ImageOne} alt="Image One" />
          </div>
          <div id="color"></div>
          <div id="image">
            <img src={ImageTwo} alt="Image Two" />
          </div>
        </div>
        {/* Second inner Section */}
        <div className="container" id="firstImageInnerDiv">
          <div id="image">
            <img src={ImageThree} alt="Image Three" />
          </div>
          <div id="color"></div>
          <div id="image">
            <img src={ImageFour} alt="Image Four" />
          </div>
        </div>
        {/* Third inner Section */}
        <div className="container" id="firstImageInnerDiv">
          <div id="image">
            <img src={ImageFive} alt="Image Five" />
          </div>
          <div id="color"></div>
          <div id="image">
            <img src={ImageSix} alt="Image Six" />
          </div>
        </div>
      </Container>
    </Container>
  );
};
