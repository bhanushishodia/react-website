import React, { useState, useEffect } from "react";
import "./DiwaliPopup.css";
import { getImage } from "../../utils/getImage"; // Correct path to utility
// Fetching images dynamically using the getImage function
const diwaliImage = getImage("offer-2.jpg"); // Adjust path if necessary
const DiwaliPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Clear 'diwaliPopupSeen' from localStorage on page refresh (optional, as per your requirement)
    localStorage.removeItem("diwaliPopupSeen");
    
    // Fetch the user's location data based on IP
     fetch("https://ipapi.co/json/")
     .then((response) => response.json())
     .then((data) => {
       if (data.country === "IN") {
         // Show the popup only if the user is from India
         const isFirstVisit = localStorage.getItem("diwaliPopupSeen");
         if (!isFirstVisit) {
           setIsVisible(true); // Show popup for the first-time visitor
           localStorage.setItem("diwaliPopupSeen", "true"); // Mark the popup as seen
         }
       }
     })
     .catch((error) => console.error("Error fetching location data: ", error));
 }, []);

 const closePopup = () => {
   setIsVisible(false);
 };

 return (
    <>
      {isVisible && (
        <div className="diwali-popup-overlay">
          <div className="diwali-popup-content">
            <div className="diwali-popup-left my-auto">
              <a href="/whatsapp-pricing" className="diwali-popup-link">
                <img
                  src={diwaliImage}
                  className="img-fluid"
                  alt="Diwali Offer"
                />
              </a>
            </div>
            <div className="diwali-popup-right gradient">
              <h2 class="h3 text-center mt-0"> Unlock your Offer</h2>
              <small className="d-block text-center text-danger fs-11px mb-30">
  The field is required mark as *
</small>


              <form
                className="px-5 gradient"
                action="https://formspree.io/f/mdorezev"
                method="POST"
                id="myStickyForm"
              >
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="Name"
                  className="form-control bg-light mb-3"
                  id="name"
                  placeholder="Name"
                />

                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-light mb-3"
                  id="email"
                  placeholder="Your Email id*"
                />

                <label htmlFor="phone"></label>
                <input
                  type="text"
                  name="phone"
                  className="form-control bg-light mb-3"
                  id="phone"
                  placeholder="Phone Number*"
                />

                <label htmlFor="messages"></label>
                <input
                  type="text"
                  name="message"
                  className="form-control bg-light mb-3"
                  id="messages"
                  placeholder="Name of Organisation"
                />

                <label htmlFor="url"></label>
                <input
                  type="url"
                  name="url"
                  className="form-control bg-light mb-3"
                  id="url"
                  placeholder="Website URL"
                />

                <div className="mt-3 mx-auto text-center">
                  <input
                    type="submit"
                    className=" btn login_button"
                    value="Get Started Free"
                  />
                </div>
              </form>
            </div>
            <button className="diwali-popup-close-btn" onClick={closePopup}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DiwaliPopup;
