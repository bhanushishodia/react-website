import React from 'react';
import Slider from 'react-slick';
import './LogoCarousel.css'; // Adjust the path as per your project structure
import { getImage } from '../../utils/getImage';  // Correct path to utility

// Fetching images dynamically using getImage function
const img1 = getImage('/whatsapp-pricing/fullmarks.png');
const img2 = getImage('/whatsapp-pricing/government.png');
const img3 = getImage('/whatsapp-pricing/isha.png');
const img4 = getImage('/whatsapp-pricing/kempinski.png');
const img5 = getImage('/whatsapp-pricing/meena-bazar.png');
const img6 = getImage('/whatsapp-pricing/Nestle.png');
const img7 = getImage('/whatsapp-pricing/orange.png');
const img8 = getImage('/whatsapp-pricing/sebi.png');
const img9 = getImage('/whatsapp-pricing/suzuki.png');
const img10 = getImage('/whatsapp-pricing/symbiosis.png');

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

const LogoCarousel2 = () => {
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

export default LogoCarousel2;
