// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
        className="to_top rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-circle-up fs-6"></i>
      </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
