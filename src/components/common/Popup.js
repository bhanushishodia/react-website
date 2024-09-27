import React, { useState } from "react";
import "./Popup.css"; // Import your popup CSS

function PopupComponent({ closePopup }) { // Accept closePopup as a prop
  const [teamId, setTeamId] = useState("");

  // Handle input change and validate input
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setTeamId(value);
    } else {
      console.log("Space or Special Character Detected");
    }
  };

  // Handle the proceed button click
  const handleProceed = () => {
    if (!teamId.trim()) {
      console.log("Team ID is empty");
      return;
    }
    window.location.href = `https://${teamId}.anantya.ai`;
  };

  // Handle popup click to prevent closing when clicking inside
  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent click events from bubbling up
  };

  return (
    <div className="popup-overlay" onClick={closePopup}> {/* Close on outside click */}
      <div className="popup login-box py-2 px-md-5 px-4" onClick={handlePopupClick}>
        <div className="popup-header">
          <h3 className="modal-title mx-auto fw-bold">Start Your Free Trial</h3>
          <button type="button" className="btn-close" onClick={closePopup} aria-label="Close"></button>
        </div>
        <h5 className="text-center py-3">
          Everything you need to grow your business on WhatsApp
        </h5>
        <p className="text-center">
          Get ready to see how Anantya.ai can help your business to engage your customers on WhatsApp.
        </p>
        <form className="pb-4 pt-2">
          <div className="user-box text-center row px-5 my-auto">
            <input
              id="LoginPage_TeamId"
              className="form-control form-control-lg col-9 w-75"
              type="text"
              value={teamId}
              onChange={handleInputChange}
              required
              placeholder="My Company"
            />
            <span className="col-3 ml-0 my-auto"><strong>.anantya.ai</strong></span>
            <p className="mx-auto pt-3" style={{ color: '#ee5639' }}>xyz.anantya.ai</p>
          </div>
          <a
            role="button"
            className="login_button nav-link w-25 mx-auto p-2"
            href="#"
            title="Proceed"
            onClick={handleProceed}
            style={{ borderWidth: '1px' }}
          >
            Proceed
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </form>
      </div>
    </div>
  );
}

export default PopupComponent;
