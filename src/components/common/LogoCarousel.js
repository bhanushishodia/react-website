import React from 'react';
import Slider from 'react-slick';
import './LogoCarousel.css'; // Adjust the path as per your project structure
import { getImage } from '../../utils/getImage';  // Correct path to utility

// Fetching images dynamically using getImage function
const img1 = getImage('1.png');
const img2 = getImage('2.png');
const img3 = getImage('3.png');
const img4 = getImage('4.png');
const img5 = getImage('5.png');
const img6 = getImage('6.png');
const img7 = getImage('7.png');
const img8 = getImage('8.png');
const img9 = getImage('9.png');
const img10 = getImage('10.png');

// Creating the logos array
const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200, // For larger tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // For tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For small tablets and large phones
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="logo-carousel container pt-4">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
