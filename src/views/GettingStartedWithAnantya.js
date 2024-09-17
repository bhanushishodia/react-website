import React from 'react';
import './GettingStartedWithAnantya.css'; // Import CSS file if needed
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
const GettingStartedWithAnantya = () => {
    return (
        <div className="px-0 ">
              <section className="support-section" style={{ background: '#f3fbff' }}>
             <div className="container py-5 text-center">
             <div className="row py-5 text-black">
          <div className="col-md-6 col-sm-12  ">
            <h1 className="font-weight-bold">Anantya Support</h1>
          </div>
          <div className="col-md-6 col-sm-12 text-right">
           
          </div>
              </div>
              </div>
             </section>
          
           
              <div className="container py-5">
        
            <h2 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              Getting started with <span className="fw-normal">Anantya</span>
            </h2>
            <p className="mt-10 text-uppercase wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              Helpful resources to easily set up your Anantya account
            </p>
         
          <div className="resource mt-50">
            <div className="row">
              <div className="col-lg-12">
                <div className="info wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                  <div className="m-0 p-0 card_anantya_started">
                    
                  
                        <ul className="text-left">
                          <li>
                            <a href="how-to-setup-a-welcome-message-on-anantya.ai">
                              &nbsp;1. How to Set Up a Welcome Message: Step-by-Step Guide
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </li>
                          <li>
                            <a href="how-to-add-agent-sublogin">
                              &nbsp;2. How to Add Agent Sublogin: A Step-by-Step Guide
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </li>
                          <li>
                            <a href="how-to-launch-first-campaign-in-anantya.ai">
                              &nbsp;3. How to Launch Your Campaign: Step-by-Step Guide
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </li>
                          <li>
                            <a href="how-to-enable-whatsapp-out-of-office-message">
                              &nbsp;4. How to Enable WhatsApp Out-of-Office Message: Step-by-Step Guide
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </li>
                          <li>
                            <a href="how-to-auto-assign-chats">
                              &nbsp;5. How to Auto Assign Chats: Step-by-Step Guide
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </li>
                          <li>
                            <a href="how-to-create-whatsapp-templete-messages-in-anantya.ai">
                              &nbsp;6. How to Create Your First WhatsApp Template Messages in Anantya.ai: Step-by-Step Guide
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </li>
                        </ul>
                    
                
                  </div>
                </div>
              </div>
            </div>
          </div>
             </div>
          
           
            <ScrollToTopButton />
            <WhatsAppWidget />
             </div>
    );
}

export default GettingStartedWithAnantya;
