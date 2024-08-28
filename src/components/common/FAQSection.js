// src/components/FAQSection.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FAQSection.css'; // Ensure you have the CSS file in the same directory
const FAQSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section container">
      <h2 className='pb-4'>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button 
            className="faq-question" 
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span className="faq-toggle-icon">{activeIndex === index ? '-' : '+'}</span>
          </button>
          <div 
            className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

FAQSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQSection;
