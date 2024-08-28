// src/components/Popup.js
import React from "react";
import "./Popup.css"; // Import CSS for the popup

function Popup({ onClose }) {
  // Function to handle click events within the popup
  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent click events from bubbling up
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      {/* Ensure clicking inside the popup does not propagate to close the popup */}
      <div className="popup" onClick={handlePopupClick}>
        <h2>Start Your Free Trial</h2>
        <p>Popup content goes here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
