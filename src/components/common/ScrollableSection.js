import React from 'react';
import './ScrollableSection.css'; // Import the CSS file
import { getImage } from '../../utils/getImage'; // Correct path to utility

const whatsappMarketing = getImage("/whatsapp-pricing/ad1.jpg");
const whatsappChatbot = getImage("/whatsapp-pricing/ad2.jpg");

const ScrollableSection = () => {
  return (
    <div className="offer">
      <div className="container design">
        <div className="scrollable-images">
          <img src={whatsappMarketing} alt="WhatsApp Marketing" />
          <img src={whatsappChatbot} alt="WhatsApp Chatbot" />
          <img src={whatsappMarketing} alt="WhatsApp Marketing" />
          <img src={whatsappChatbot} alt="WhatsApp Chatbot" />
        </div>

        {/* New Diwali Festive Offer Section */}
        <div className="diwali-offer w-50">
          <h5>Diwali Festive Offer</h5>
          <h3>50% OFF</h3>
          <p>
            Get Started with only
            <br/> <del>₹1599</del> <strong> ₹799 </strong>
          </p>
          <a href="#myStickyForm" type="button" class="btn me-2 bg-green text-white btn-color mt-20">Grab the Offer!</a>

        </div>
      </div>
    </div>
  );
};

export default ScrollableSection;
