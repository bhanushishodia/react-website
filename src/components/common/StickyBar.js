import React from "react";
import "./StickyBar.css"; // Assuming you have a CSS file for styles
import { getImage } from '../../utils/getImage';  // Correct path to utility
  // Fetching images dynamically using getImage function
  const facebook = getImage('fb.png');
  const instagram = getImage('insta.jpg');
  const linkedin = getImage('linkdin.png');
  const youtube = getImage('youtube.webp');
  const ShareSection = () => {
  return (
    <div className="UTQd8b d-none d-lg-block">
      <div className="arrow"></div>
      <div
        className="cCNe0"
        data-title="Copper Artifacts"
        data-url="https://artsandculture.google.com/story/copper-artifacts/egVxAgrtKqx4IQ"
        data-galabel="share-bar"
        data-image="https://lh3.googleusercontent.com/ci/AL18g_RMl3qlNA7Pe7Td7AEHgLvfY0aiIMbQueg6RBFj2ZlofNGpLpGjWwz5X96fA299kuNEpANA1mM"
      >
        <div className="DIJzlf">
          <div 
            role="button"
            className="U26fgb"
            aria-label="Add to Favorites"
            aria-disabled="false"
          >
            <div
              className="VTBa7b"
              style={{
                top: "23.3333px",
                left: "23.6666px",
                width: "48px",
              }}
            ></div>
          </div>
        </div>

       
         <a className="zYxYi"
          href="https://www.facebook.com/anantyaai"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Share on Facebook">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>

    
       
        <a
          className="rw97Ub"
          href="https://ae.linkedin.com/company/anantya-technolgies"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Share on LinkedIn"
        >
         <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>

       

        <a
          className="instagramShare"
          href="https://www.instagram.com/anantya.ai/"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Share on Instagram"
        > <img src={instagram} alt="Instagram" className="social-icon" />
         
        </a>
        <a
          className="instagramShare"
          href="https://www.youtube.com/@Anantyaai"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Share on youtube"
        > <img src={youtube} alt="youtube" className="social-icon" />
         
        </a>
      </div>
    </div>
  );
};

export default ShareSection;
