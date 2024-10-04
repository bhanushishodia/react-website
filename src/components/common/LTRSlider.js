import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getImage } from '../../utils/getImage';  // Correct path to utility
  // Fetching images dynamically using getImage function
  const bigCommerce = getImage('big-commerce.webp');
  const dialogflowLogo = getImage('dialogflow-logo.svg');
  const dropbox = getImage('dropbox.webp');
  const getresponse = getImage('getresponse.webp');
  const googleAnalytics = getImage('google-analytics.webp');
  const googleBusinessMessages = getImage('Google-Business-Messages.svg');
  const helpdesk = getImage('helpdesk.webp');
  const hubspot = getImage('hubspot.webp');
  const instagram = getImage('instagram.svg');
  const logoLine = getImage('Logo-LINE.svg');
  const logoPipedrive = getImage('Logo-Pipedrive.svg');
  const logoTelegram = getImage('Logo-Telegram.svg');
  const logoViber = getImage('Logo-Viber.svg');
  const logoWeChat = getImage('Logo-WeChat.svg');
  const messenger = getImage('Messenger.webp');
  const pipedrive = getImage('pipedrive.webp');
  const salesforce = getImage('salesforce.webp');
  const shopify = getImage('shopify.webp');
  const teamviewer = getImage('teamviewer.webp');
  const twilio = getImage('twilio.webp');
  const whatsapp = getImage('Whatsapp.webp');
  const wooCommerce = getImage('woo-commerce.webp');
  const wordpress = getImage('wordpress.webp');
  const zapier = getImage('zapier.webp');
  const zendesk = getImage('zendesk.webp');
const LTRSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false // LTR configuration
  };

  return (
    <Slider {...settings}>
      <div className="logo-slide-item">
        <img src={bigCommerce} alt="Logo 1" />
      </div>
      <div className="logo-slide-item">
        <img src={dialogflowLogo} alt="Logo 2" />
      </div>
      <div className="logo-slide-item">
        <img src={dropbox} alt="Logo 3" />
      </div>
      <div className="logo-slide-item">
        <img src={getresponse} alt="Logo 4" />
      </div>
      <div className="logo-slide-item">
        <img src={googleAnalytics} alt="Logo 5" />
      </div>
      <div className="logo-slide-item">
        <img src={googleBusinessMessages} alt="Logo 6" />
      </div>
      <div className="logo-slide-item">
        <img src={helpdesk} alt="Logo 7" />
      </div>
      <div className="logo-slide-item">
        <img src={hubspot} alt="Logo 8" />
      </div>
      <div className="logo-slide-item">
        <img src={instagram} alt="Logo 9" />
      </div>
      <div className="logo-slide-item">
        <img src={logoLine} alt="Logo 10" />
      </div>
      <div className="logo-slide-item">
        <img src={logoPipedrive} alt="Logo 11" />
      </div>
      <div className="logo-slide-item">
        <img src={logoTelegram} alt="Logo 12" />
      </div>
      <div className="logo-slide-item">
        <img src={logoViber} alt="Logo 13" />
      </div>
      <div className="logo-slide-item">
        <img src={logoWeChat} alt="Logo 14" />
      </div>
      <div className="logo-slide-item">
        <img src={messenger} alt="Logo 15" />
      </div>
      <div className="logo-slide-item">
        <img src={pipedrive} alt="Logo 16" />
      </div>
      <div className="logo-slide-item">
        <img src={salesforce} alt="Logo 17" />
      </div>
      <div className="logo-slide-item">
        <img src={shopify} alt="Logo 18" />
      </div>
      <div className="logo-slide-item">
        <img src={teamviewer} alt="Logo 19" />
      </div>
      <div className="logo-slide-item">
        <img src={twilio} alt="Logo 20" />
      </div>
      <div className="logo-slide-item">
        <img src={whatsapp} alt="Logo 21" />
      </div>
      <div className="logo-slide-item">
        <img src={wooCommerce} alt="Logo 22" />
      </div>
      <div className="logo-slide-item">
        <img src={wordpress} alt="Logo 23" />
      </div>
      <div className="logo-slide-item">
        <img src={zapier} alt="Logo 24" />
      </div>
      <div className="logo-slide-item">
        <img src={zendesk} alt="Logo 25" />
      </div>
      {/* Add more LTR logos as needed */}
    </Slider>
  );
};

export default LTRSlider;
