import React from 'react';
import './InnerHeader.css'; // Adjust the path as per your project structure
import integrationImg from '../../assets/images/integration.webp'; // Adjust the path according to your project structure

const InnerHeader = () => {
  return (
    <section
      className="inner-header style-5">
      <div className="container">
        <div className="content">
          <div className="links">
            <a href="#">Home</a>
            <a href="#">Anantya Support</a>
          </div>
          <h2>Resources</h2>
          <img
            src={integrationImg}
            alt="Integration"
            className="side-img slide_up_down"
          />
        </div>
      </div>
    </section>
  );
};

export default InnerHeader;
