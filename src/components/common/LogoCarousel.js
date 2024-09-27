import React from 'react';
import Slider from 'react-slick';
import './LogoCarousel.css'; // Adjust the path as per your project structure
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import img9 from "../../assets/images/9.png";
import img10 from "../../assets/images/10.png";

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
