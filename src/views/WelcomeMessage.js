// src/views/WelcomeMessage.js
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
// Import images
import welcomeBackground from '../assets/images/inner5_back.png';
import welcomeImage from '../assets/images/integration.webp';
import articleImage1 from '../assets/images/article-1.png';
import articleImage2 from '../assets/images/article-2.png';
import articleImage3 from '../assets/images/article-3.png';
import articleImage4 from '../assets/images/article-4.png';
const WelcomeMessage = () => {
  return (
    <div>
      <Breadcrumb
        links={[{ href: '#', text: 'Home' }, { href: '#', text: 'Welcome Message' }]}
        backgroundImage={welcomeBackground}
        title="Resources"
        sideImage={welcomeImage}
      />
      

      <main className="career-details-page pt-100">
        {/* Career Features Section */}
        <section className="jop-details pb-100">
          <div className="container">
            <div className="content">
              <div className="row">
                <div className="col-lg-8">
                  <div className="jop-info">
                   
                    <h3 className="main-title mb-10">
                      How to Set Up a Welcome Message: Step-by-Step Guide
                    </h3>
                    

                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        A welcome message is a great way to instantly greet users and provide them with a positive first interaction when they connect with your platform.
                      </p>
                    </div>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Set up a welcome message that gets sent when new customers contact your business for the first time, or when existing users reach out after 24 hours.
                      </p>
                    </div>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Follow this comprehensive step-by-step guide to establish an automatic welcome message for your users.
                      </p>
                    </div>

                    <h6 className="mt-40 mb-20">Step 1: Go to Bot Setup</h6>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Navigate to the 'Bot Setup' section on your Anantya.ai Panel. Select 'Welcome Message' within the 'Bot Setup' section, locate and click on the option labeled 'Welcome Message.' This is where you'll configure your welcome message settings.
                      </p>
                    </div>
                    <div className="text-center">
                      <img src={articleImage1} className="img-fluid pb-3 mx-auto" alt="Step 1" />
                    </div>

                    <h6 className="mt-40 mb-20">Step 2: Add a Welcome Message</h6>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        In this step, you'll create and add your welcome message. Click on the 'Add Welcome Message' button to proceed.
                      </p>
                    </div>
                    <div className="text-center">
                      <img src={articleImage2} className="img-fluid pb-3 mx-auto" alt="Step 2" />
                    </div>

                    <h6 className="mt-40 mb-20">Step 3: Setup Your Message</h6>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Now, you have the choice of selecting a pre-approved message template or creating a customized welcome message tailored to your users.
                      </p>
                    </div>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Depending on your preferences, you can set up a regular text message, an image message, a video message, or even send a file as part of your welcome greeting.
                      </p>
                    </div>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Compose the content of your welcome message. If you're opting for a text message, write a warm and engaging greeting that resonates with your audience.
                      </p>
                    </div>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        For media messages like images, videos, or files, ensure they align with your brand's identity and message.
                      </p>
                    </div>
                    <div className="text-center">
                      <img src={articleImage3} className="img-fluid pb-3 mx-auto" alt="Step 3" />
                    </div>

                    <h6 className="mt-40 mb-20">Step 4: Submit Your Welcome Message</h6>
                    <div className="text d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Once you're satisfied with your welcome message, click the 'Submit' button to save your settings and activate the welcome message feature.
                      </p>
                    </div>
                    <div className="text-center">
                      <img src={articleImage4} className="img-fluid pb-3 mx-auto" alt="Step 4" />
                    </div>

                    <div className="text-start d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        Congratulations! You've successfully set up your welcome message.
                      </p>
                    </div>
                    <div className="text-start d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        From this point, you have the flexibility to manage your welcome messages.
                      </p>
                    </div>
                    <div className="text-start d-flex mb-20">
                      <span className="icon color-blue5 me-2 flex-shrink-0">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <p>
                        In short, a welcome message is a kind way to say hi to new people. With these easy steps, you can make one and make people smile when they join!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="summary-card">
                    <h6 className="mb-20 pb-20 border-bottom border-1 brd-gray">Anantya Platform</h6>
                    <ul>
                      <li><a href="how-to-setup-a-welcome-message-on-anantya.ai">How to Set Up a Welcome Message</a></li>
                      <li><a href="how-to-add-agent-sublogin">How to Add Agent Sublogin</a></li>
                      <li><a href="how-to-launch-first-campaign-in-anantya.ai">How to Launch Your Campaign</a></li>
                      <li><a href="how-to-enable-whatsapp-out-of-office-message">How to Enable WhatsApp Out-of-Office Message</a></li>
                      <li><a href="how-to-auto-assign-chats">How to Auto Assign Chats - Step-by-Step Guide</a></li>
                      <li><a href="how-to-create-whatsapp-templete-messages-in-anantya.ai">How to Create Your First WhatsApp Template Messages in Anantya.ai</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
  );
};

export default WelcomeMessage;
