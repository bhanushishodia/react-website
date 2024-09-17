import React, { useState } from "react";
import logo from "../../assets/images/rounded.png";
import widgetImage from "../../assets/images/whatsapp-3.jpg"; // This is the image you want to use as a background
import blueCheck from "../../assets/images/blue-check.png"; // Adjust the path as needed

const WhatsAppWidget = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const sendMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+919870156069?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage(""); // Clear the input after sending
      closeChat(); // Optionally close the chat window after sending the message
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "0px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <button
          onClick={toggleChat}
          style={{
            backgroundColor: "transparent",
            color: "white",
            padding: "5px",
            borderRadius: "50px",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transform: "rotate(90deg)",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
          }}
          aria-label="Chat with us on WhatsApp"
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transform: "rotate(-90deg)",
              backgroundColor: "#25D366",
              padding: "12px 12px",
              borderRadius: "15px",
            }}
          >
            <i
              className="fab fa-whatsapp"
              style={{
                fontSize: "22px",
                color: "white",
                marginBottom: "6px",
                marginLeft: "7px",
              }}
            ></i>
            <span
              style={{
                fontSize: "15px",
                color: "white",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Chat with us
            </span>
          </span>
        </button>
      </div>

      {showChat && (
        <div id="whatsapp-chat" className="show" style={chatStyles}>
          <div
            className="whatsapp-chat-header align-items-center"
            style={headerStyles}
          >
            <div className="whatsapp-chat-avatar my-auto">
              <img
                src={logo}
                alt="Anantya logo"
                style={{ height: "50px", marginBottom: "16px" }}
              />
            </div>
            <p
              style={{
                marginLeft: "10px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <span
                className="whatsapp-chat-name"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Anantya.ai
                <img
                  src={blueCheck}
                  alt="Verified"
                  style={{
                    width: "22px",
                    height: "22px",
                    marginLeft: "4px",
                  }}
                />
              </span>
              <br />
              <span
                style={{
                  fontSize: "11px",
                }}
              >
                Replies within 10 min
              </span>
            </p>
          </div>

          <div className="start-chat" style={bodyStyles}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
              }}
            >
              {/* Removed widgetImage as it is now used as background */}
            </div>

            <div style={messageBoxStyles}>
              <div
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "#0a5f54",
                  padding: "12px",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#808080",
                  }}
                >
                  Anantya.ai for WhatsApp
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#000",
                    lineHeight: 1.3,
                  }}
                >
                  Do you have any questions about WhatsApp for your business?
                </p>
              </div>
              <a
                href="https://wa.link/hd4mvx"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  fontSize: "13px",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "#3679ff",
                  padding: "10px",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                Talk to us now
              </a>
            </div>
          </div>

          <button
            onClick={closeChat}
            style={closeButtonStyles}
            aria-label="Close chat"
          >
            ×
          </button>

          <div style={poweredByStyles}>
            Powered by{" "}
            <img
              src={logo}
              alt="Anantya.ai"
              style={{ width: "20px", marginRight: "5px" }}
            />{" "}
            Anantya.ai
          </div>
        </div>
      )}
    </>
  );
};

// CSS-in-JS Styles
const chatStyles = {
  position: "fixed",
  bottom: "50px",
  right: "55px",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "16px",
  width: "320px",
  zIndex: 1000,
  overflow: "hidden",
};

const headerStyles = {
  padding: "20px 20px 0px 20px",
  borderBottom: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#0a5f54",
};

const bodyStyles = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  backgroundImage: `url(${widgetImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

 
};

const messageBoxStyles = {
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  padding: "20px",
};

const closeButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "5px",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "28px",
  cursor: "pointer",
};

const poweredByStyles = {
  textAlign: "center",
  fontSize: "12px",
  color: "#fff",
  padding: "5px 10px",
  backgroundColor: "rgb(10, 95, 84)",
};

export default WhatsAppWidget;
