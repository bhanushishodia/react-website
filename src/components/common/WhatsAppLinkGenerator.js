import React, { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Import QRCodeSVG for QR code generation
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button from React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./WhatsAppLinkGenerator.css";

import { getImage } from '../../utils/getImage';  // Correct path to utility
function WhatsAppLinkGenerator() {
  const dpImage = getImage('dp.svg');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const qrRef = useRef(null); // Ref for QR code canvas

  const validateNumber = () => {
    return phoneNumber.length > 0;
  };

  const generateWhatsAppLink = () => {
    if (phoneNumber) {
      const baseUrl = "https://wa.me/";
      const link = `${baseUrl}${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      setGeneratedLink(link);
      setShowQR(true); // Show QR code
      setShowModal(true); // Show modal
    }
  };

  const handleClose = () => setShowModal(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink).then(() => {
      alert("Link copied to clipboard");
    });
  };

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "whatsapp-qr-code.png";
        link.click();
      }
    }
  };

  return (
    <div className="container py-5 px-5 bg-light rounded-5 ">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 " id="myForm">
          <div className="contact-column whatsapp-link-generator text-md-start px-4">
            <h2 className="fw-light">WhatsApp Link Generator</h2>
            <p>
              To generate your WhatsApp link, add your number and enter a
              pre-written message that your visitor can send in a single click.
            </p>
            <div className="whatsapp-form">
              <div className="form-field-container generator">
                <label htmlFor="telephone" className="field-label">
                  Type your WhatsApp number
                </label>

                <input
                  type="text" // Change type to "text" for better control over input
                  id="telephone"
                  placeholder="your WhatsApp number here"
                  className="form-field generator no-spinner form-control"
                  value={phoneNumber}
                  onChange={(e) => {
                    // Only allow digits and enforce a maximum length of 10
                    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
                    if (value.length <= 10) {
                      setPhoneNumber(value);
                    }
                  }}
                  maxLength={10} // Restrict input length
                />
                <label className="field-label tip small color-999">
                  Include country code without + symbol. Eg: 9876543210.
                </label>
              </div>

              <div className="form-field-container generator">
                <label htmlFor="message" className="field-label">
                  Welcome message (Optional)
                </label>
                <textarea
                id="message"
                placeholder="e.g., Hello, I want to know more about your service."
                className="form-field generator-message form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update message state
            ></textarea>
                
                <label className="field-label tip small color-999">
                  Automatically add a custom message to start a conversation.
                </label>
              </div>

              <Button
                onClick={generateWhatsAppLink}
                id="generate-url"
                type="button"
                className="btn me-md-2 mt-2 bg-green text-white btn-color generator"
                disabled={!validateNumber()}
              >
                Generate WhatsApp Link
              </Button>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 px-5">
          <div id="whatsapp-preview" className="whatsapp-preview">
            <div className="iphone-layout">
              <div className="status-bar">
                <span className="status-time">12:45 PM</span>
                <div className="status-icons">
                  <span class="wifi-icon">
                    <svg
                      class="message-preview__network-icon md:w-16 mr-3"
                      width="11"
                      height="9"
                      viewBox="0 0 11 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3.07031"
                        y="2.15967"
                        width="1.97402"
                        height="2.85136"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                      <rect
                        x="5.92188"
                        y="1.28271"
                        width="1.97402"
                        height="3.72871"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                      <rect
                        x="8.77344"
                        y="0.405273"
                        width="1.97402"
                        height="4.60605"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                      <rect
                        x="0.21875"
                        y="2.81787"
                        width="1.97402"
                        height="2.19336"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                      <rect
                        x="0.21875"
                        y="6.1084"
                        width="1.97402"
                        height="1.97402"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                      <rect
                        x="3.07031"
                        y="6.1084"
                        width="1.97402"
                        height="1.97402"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                      <rect
                        x="5.92188"
                        y="6.1084"
                        width="1.97402"
                        height="1.97402"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                      <rect
                        x="8.77344"
                        y="6.1084"
                        width="1.97402"
                        height="1.97402"
                        rx="0.658007"
                        fill="white"
                      ></rect>
                    </svg>
                  </span>
                  <span class="network-icon">
                    <svg
                      class="message-preview__wifi-icon mr-3"
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.7707 3.69856C8.82754 3.73675 8.88201 3.75584 8.93412 3.75584C9.01464 3.75584 9.23254 3.57685 9.5878 3.21889C9.94306 2.86092 10.1207 2.63898 10.1207 2.55307C10.1207 2.4958 10.097 2.44329 10.0496 2.39557C9.42438 1.76555 8.66648 1.27632 7.77596 0.927904C6.98017 0.544155 5.64439 0.419588 5.07597 0.405273C4.1665 0.405273 3.2665 0.579484 2.37598 0.927904C1.35653 1.43374 0.435425 2.11711 0.102302 2.39557C0.0549341 2.44329 0.03125 2.4958 0.03125 2.55307C0.03125 2.63898 0.208881 2.86092 0.564143 3.21889C0.715515 3.38149 1.04019 3.71653 1.12793 3.75584C1.21566 3.79515 1.37126 3.66721 1.43809 3.59833C1.57546 3.49333 1.76256 3.36685 1.9994 3.21889C2.34564 2.99074 2.6813 2.82791 2.80585 2.77501C3.10663 2.62705 3.45953 2.50057 3.86453 2.39557C4.26953 2.29056 4.67334 2.23806 5.07597 2.23806C5.75479 2.23806 6.35782 2.34306 6.88506 2.55307C7.7182 2.95529 8.48929 3.48433 8.7707 3.69856Z"
                        fill="white"
                      ></path>
                      <path
                        d="M5.07232 7.64368C4.97759 7.64368 4.75733 7.46828 4.41154 7.11747C4.06575 6.76666 3.89286 6.54353 3.89286 6.44807C3.89286 6.29534 4.04088 6.16647 4.33693 6.06147C4.63298 5.95647 4.87812 5.90397 5.07232 5.90397C5.26653 5.90397 5.51167 5.95647 5.80772 6.06147C6.10377 6.16647 6.25179 6.29534 6.25179 6.44807C6.25179 6.54353 6.0789 6.76666 5.73311 7.11747C5.38732 7.46828 5.16706 7.64368 5.07232 7.64368ZM6.99074 5.7035C6.98127 5.7035 6.88653 5.64384 6.70653 5.52452C6.52653 5.4052 6.28614 5.28588 5.98535 5.16655C5.68456 5.04723 5.38022 4.98757 5.07232 4.98757C4.76443 4.98757 4.46009 5.04723 4.1593 5.16655C3.85851 5.28588 3.6193 5.4052 3.44167 5.52452C3.26404 5.64384 3.16812 5.7035 3.15391 5.7035C3.06865 5.7035 2.8472 5.52452 2.48957 5.16655C2.13194 4.80859 1.95312 4.58665 1.95312 4.50074C1.95312 4.43869 1.97681 4.3838 2.02418 4.33607C2.39365 3.96856 2.85786 3.6798 3.4168 3.4698C3.97575 3.25979 4.52759 3.15479 5.07232 3.15479C5.61706 3.15479 6.1689 3.25979 6.72785 3.4698C7.28679 3.6798 7.751 3.96856 8.12047 4.33607C8.16784 4.3838 8.19153 4.43869 8.19153 4.50074C8.19153 4.58665 8.01271 4.80859 7.65508 5.16655C7.29745 5.52452 7.076 5.7035 6.99074 5.7035Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <span class="battery-icon">
                    <svg
                      class="message-preview__battery-icon"
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.57166 7.86269C2.05744 7.86269 1.56429 7.65841 1.20069 7.29479C0.837083 6.93117 0.632813 6.43799 0.632812 5.92376V2.3442C0.632813 1.82997 0.837083 1.33679 1.20069 0.973172C1.56429 0.609553 2.05744 0.405273 2.57166 0.405273H12.5244C13.0386 0.405273 13.5318 0.609553 13.8954 0.973172C14.259 1.33679 14.4633 1.82997 14.4633 2.3442V5.92376C14.4633 6.43799 14.259 6.93117 13.8954 7.29479C13.5318 7.65841 13.0386 7.86269 12.5244 7.86269H2.57166ZM2.57166 1.36963C2.22455 1.36963 1.89256 1.503 1.6469 1.74866C1.40125 1.99431 1.26788 2.32631 1.26788 2.67342V5.92376C1.26788 6.27087 1.40125 6.60287 1.6469 6.84853C1.89256 7.09418 2.22455 7.22755 2.57166 7.22755H12.5244C12.8715 7.22755 13.2035 7.09418 13.4491 6.84853C13.6948 6.60287 13.8281 6.27087 13.8281 5.92376V2.67342C13.8281 2.32631 13.6948 1.99431 13.4491 1.74866C13.2035 1.503 12.8715 1.36963 12.5244 1.36963H2.57166ZM15.1184 2.86553C15.2615 2.86553 15.3781 2.74892 15.3781 2.6058V2.3442C15.3781 2.20108 15.2615 2.08447 15.1184 2.08447H14.4633V6.18349H15.1184C15.2615 6.18349 15.3781 6.06688 15.3781 5.92376V5.66216C15.3781 5.51904 15.2615 5.40244 15.1184 5.40244H14.4633V2.86553Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div id="profile-info" className="profile-info">
                <div className="profile-pic">
                  <img src={dpImage} alt="User's profile" />
                </div>

                <div className="mobile-number">
                  <span id="mobileLabel" className="mobile-label">
                    +91{" "}
                  </span>
                  <span id="userNumber" className="mobile-label">
                    {phoneNumber || "9876543210"}
                  </span>
                  <p className="user-online">last seen 1 minute ago</p>
                </div>
              </div>

              <div className="phone-screen">
                <div className="phone-content">
                  
                  <div id="chat-preview" className="chat-preview">
                {message ? (
                    <p>{message}</p> // Display the message if it's not empty
                ) : (
                    <p>
                      Start typing a message on the left side to see it appear
                      here in real-time.
                    </p>
                )}
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for showing generated link and QR code */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="text-center">
          <Modal.Title>Generated WhatsApp Link</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          {generatedLink && (
            <>
              <p>Your WhatsApp Click-to-Chat Link:</p>
              <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                {generatedLink}
              </a>
              <br />
              <Button variant="primary" onClick={copyToClipboard}>
                Copy to Clipboard
              </Button>
              <br />
              <br />
              {showQR && (
                <>
                  <div ref={qrRef}>
                    <QRCodeSVG value={generatedLink} size={128} />
                  </div>
                  <Button
                    variant="primary"
                    onClick={handleDownload}
                    className="mt-2"
                  >
                    Download QR Code
                  </Button>
                </>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default WhatsAppLinkGenerator;
