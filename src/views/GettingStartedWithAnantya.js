import React from 'react';
import './GettingStartedWithAnantya.css'; // Import CSS file if needed
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { Helmet } from 'react-helmet';
const GettingStartedWithAnantya = () => {
    return (
      <>
      <Helmet>
      <title>Anantya.ai Knowledge Center</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content="Anantya.ai Knowledge Center" />
      <meta property="og:title" content="Anantya.ai Knowledge Center" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="Anantya.ai Knowledge Center" />
      <meta property="og:url" content="https://anantya.ai/knowledge-center" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="" />
      <link rel="canonical" href="https://anantya.ai/knowledge-center" />
      <meta name="author" content="Anantya.ai" />

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "anantya.ai",
          "alternateName": "Anantya.ai: WhatsApp Business API Providers",
          "url": "https://anantya.ai/",
          "logo": "https://anantya.ai/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971565480273",
            "contactType": "sales",
            "availableLanguage": ["en"]
          },
          "sameAs": [
            "https://www.facebook.com/anantyaai",
            "https://www.instagram.com/anantya.ai/",
            "https://www.linkedin.com/company/anantya-ai/",
            "https://www.pinterest.com/anantyaai/"
          ]
        }
      `}</script>
    </Helmet>
        <div className="px-0 ">
              <section className="support-section" style={{ background: '#f3fbff' }}>
             <div className="container py-5 text-center">
             <div className="row py-5 text-black">
             <div className="col-lg-12 col-md-12 col-sm-12  ">
              <h1 className="fw-bold">Anantya Support</h1>
             </div>
        
              </div>
              </div>
             </section>
          
           
              <div className="container py-5">
        
            <h2 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              Getting started with <span>Anantya</span>
            </h2>
            <p className="mt-10  wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
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
        </>
    );
}

export default GettingStartedWithAnantya;
