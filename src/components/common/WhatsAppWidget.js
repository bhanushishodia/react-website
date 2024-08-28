import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const WhatsAppWidget = () => {
  return (
    <div style={{ position: 'fixed', bottom: '100px', right: '20px' }}>
    <ReactWhatsapp
      number="+919870156069"
      message="Hello! How can I help you?"
      style={{ backgroundColor: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '50px', border: "none", fontSize: '16px', display: 'flex', alignItems: 'center' }}
    >
      <i className="fab fa-whatsapp" style={{ fontSize: '24px', marginRight: '10px', color: 'white' }}></i>
      Chat with us
    </ReactWhatsapp>
  </div>
  );
};

export default WhatsAppWidget;