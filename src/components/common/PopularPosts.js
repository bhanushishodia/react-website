import React from 'react';
import Slider from 'react-slick';
import './PopularPosts.css'; // Import the CSS file for styling
import InstagramIcon from '../../assets/images/icons/instagram.svg';
import WhatsAppIcon from '../../assets/images/icons/Whatsapp.webp';
import MessengerIcon from '../../assets/images/icons/Messenger.webp';

const PopularPosts = () => {
  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on desktop
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide change speed
    responsive: [
      {
        breakpoint: 768, // For tablets and mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
      <div
        style={{
          backgroundColor: 'transparent',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="popular-posts related Posts section-padding pb-100">
      <div className="container">
        <h5 className="fw-bold text-uppercase mb-5">You might also like</h5>        
        <Slider {...settings} className="related-postes-slider position-relative">
          <div className="slide-item">
            <a href="instagram" className="card h-100 text-lg-start">  
              <div className="icon">
                <img src={InstagramIcon} alt="Instagram" />
              </div>
              <div className="info mt-20">
                <h5 className="card-title">Instagram</h5>
                <p className="text">
                  Trust our top minds to eliminate workflow pain points, implement new tech & app.
                </p>
              </div>
            </a>
          </div>
          <div className="slide-item">
            <a href="../whatsapp-business-api" className="card style-5 h-100 text-lg-start">
              <div className="icon">
                <img src={WhatsAppIcon} alt="WhatsApp Business" />
              </div>
              <div className="info mt-20">
                <h5 className="card-title">WhatsApp Business</h5>
                <p className="text">
                  Trust our top minds to eliminate workflow pain points, implement new tech & app.
                </p>
              </div>
            </a>
          </div>
          <div className="slide-item">
            <a href="facebook-messenger" className="card style-5 h-100 text-lg-start">
              <div className="icon">
                <img src={MessengerIcon} alt="Facebook Messenger" />
              </div>
              <div className="info mt-20">
                <h5 className="card-title">Facebook Messenger</h5>
                <p className="text">
                  Trust our top minds to eliminate workflow pain points, implement new tech & app.
                </p>
              </div>
            </a>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default PopularPosts;
