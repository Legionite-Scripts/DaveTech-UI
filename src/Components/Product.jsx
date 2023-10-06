import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container } from "react-bootstrap";
import ImageThree from "./Images/image3.jpg";
import ImageFour from "./Images/image4.jpg";
import ImageFive from "./Images/image5.jpg";

export const Product = () => {
  return (
    <Container fluid id="Product">
      <div className="container" id="ProductOne">
        <img src={ImageFive} alt="Product" />
        <p>
          Davetech is a tech enthusiast's dream come true! From the latest
          smartphones to innovative smart home devices, they have it all. What
          sets Davetech apart is their commitment to offering top-notch products
          at competitive prices. Their knowledgeable staff is always ready to
          assist, making the shopping experience both enjoyable and informative.
        
        </p>
      </div>
      <div className="container" id="productTwo">
        <img src={ImageThree} alt="Product" />
        <p>
          Davetech boasts an impressive range of gadgets and devices, catering
          to tech lovers of all kinds. Their selection is not only vast but also
          curated to ensure the highest quality. I've purchased several products
          from Davetech, and I've always been impressed with the performance and
          durability of their offerings.
        </p>
      </div>
      <div className="container" id="productThree">
        <img src={ImageFour} alt="Product" />
        <p>
          At Davetech, quality doesn't come with a hefty price tag. I've been
          consistently amazed by the affordability of their products, especially
          considering the high level of quality they maintain. From
          budget-friendly options to premium devices, Davetech has something for
          every budget
        </p>
      </div>
    </Container>
  );
};
