import React from 'react';
import './Breadcrumb.css'; // Ensure the CSS file is in the same directory
import { getImage } from '../../utils/getImage'; // Correct path to utility

// Fetching default images dynamically using getImage function
const defaultBackground = getImage('inner5_back.png');
const defaultSideImage = getImage('integration.webp');

const Breadcrumb = ({ links, backgroundImage = defaultBackground, title, sideImage = defaultSideImage }) => {
  return (
    <section 
      className="breadcrumb" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="content">
          <div className="links">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                {index > 0 && ' > '}
                <a href={link.href}>{link.text}</a>
              </React.Fragment>
            ))}
          </div>
          <h2>{title}</h2>
          {sideImage && <img src={sideImage} alt="" className="side-img" />}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
