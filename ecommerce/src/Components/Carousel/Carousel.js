import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

import img1 from '../images/img.jpg'
import img2 from '../images/img1.jpg'
import img3 from '../images/img2.jpg'
import img4 from '../images/img4.jpg'


const carouselImages = [
  // Replace these with your actual image paths or URLs
  img4,
  img1,
  img2,
  img3

];

const Carousel = () => {
  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

