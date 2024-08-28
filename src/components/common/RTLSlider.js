import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import bigCommerce from "../../assets/images/big-commerce.webp";
import dialogflowLogo from "../../assets/images/dialogflow-logo.svg";
import dropbox from "../../assets/images/dropbox.webp";
import getresponse from "../../assets/images/getresponse.webp";
import googleAnalytics from "../../assets/images/google-analytics.webp";
import googleBusinessMessages from "../../assets/images/Google-Business-Messages.svg";
import helpdesk from "../../assets/images/helpdesk.webp";
import hubspot from "../../assets/images/hubspot.webp";
import instagram from "../../assets/images/instagram.svg";
import logoLine from "../../assets/images/Logo-LINE.svg";
import logoPipedrive from "../../assets/images/Logo-Pipedrive.svg";
import logoTelegram from "../../assets/images/Logo-Telegram.svg";
import logoViber from "../../assets/images/Logo-Viber.svg";
import logoWeChat from "../../assets/images/Logo-WeChat.svg";
import messenger from "../../assets/images/Messenger.webp";
import pipedrive from "../../assets/images/pipedrive.webp";
import salesforce from "../../assets/images/salesforce.webp";
import shopify from "../../assets/images/shopify.webp";
import teamviewer from "../../assets/images/teamviewer.webp";
import twilio from "../../assets/images/twilio.webp";
import whatsapp from "../../assets/images/Whatsapp.webp";
import wooCommerce from "../../assets/images/woo-commerce.webp";
import wordpress from "../../assets/images/wordpress.webp";
import zapier from "../../assets/images/zapier.webp";
import zendesk from "../../assets/images/zendesk.webp";

const RTLSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true, // RTL configuration
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
      {/* Add more RTL logos as needed */}
    </Slider>
  );
};

export default RTLSlider;
