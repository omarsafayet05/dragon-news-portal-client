import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel_1 from "../../../Assets/Brands/Carousel_1.jpg";
import Carousel_2 from "../../../Assets/Brands/Carousel_2.jpeg";

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel_2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
