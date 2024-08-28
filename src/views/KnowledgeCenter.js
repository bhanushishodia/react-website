import React from 'react';
import './knowledgecenter.css'; // Optional: Add custom CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
const KnowledgeCenter = () => {
  return (
    <div className="knowledge-center-page">
         {/* section1*/}
        <section style={{ background: '#f3fbff' }}>
            <div className="container py-5 text-lg-start">
                <div className="row py-5 text-black">
                    <div className="col-md-6 col-sm-12">
                        <h1>Anantya Support</h1>
                    </div>
                    <div className="col-md-6 col-sm-12 text-end">
                      
                    </div>
                </div>
            </div>
        </section>
      {/* section1*/}
      {/* section2*/}
        <section>
            <div className="container my-5 py-5">
                <div className="info">
                    <div className="knowledge_card mb-2">
                        <div className="user_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#5dc4eb"
                                className="bi bi-file-earmark-medical my-auto" viewBox="0 0 16 16">
                                <path
                                    d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z">
                                </path>
                                <path
                                    d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z">
                                </path>
                            </svg>
                        </div>
                        <a href="/getting-started-with-anantya" className="inf_content">
                            <h6>1. Anantya Platform</h6>
                            <p>Getting Started with Anantya.ai: <span className="text-muted">Account Setup and Features
                                Guide</span></p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

      {/* section2*/}

      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default KnowledgeCenter;
