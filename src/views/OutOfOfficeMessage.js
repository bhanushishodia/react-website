// src/views/OutOfOfficeMessage.js
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";

import welcomeBackground from '../assets/images/inner5_back.png';
import welcomeImage from '../assets/images/integration.webp';

import articleImage4 from '../assets/images/article-4.png';
const OutOfOfficeMessage = () => {
  return (
    <div>
    <Breadcrumb
  links={[{ href: '#', text: 'Home' }, { href: '#', text: 'Welcome Message' }]}
  backgroundImage={welcomeBackground}
  title="Resources"
  sideImage={welcomeImage}
/>
<main className="career-details-page style-5 pt-100">
      {/* ====== start careers-features ====== */}
      <section className="jop-details pb-100">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-lg-8">
                <div className="jop-info">
                 
                  <h3 className="main-title mb-10">How to Enable WhatsApp Out-of-Office Message: Step-by-Step Guide</h3>
                 
                  
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>This feature will allow you to automate a message from WhatsApp Chatbot to people who contact you outside working hours.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>So, whenever a user messages you outside working hours, your WhatsApp Chat Bot will automate a message stating that the business will contact them later.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Follow this comprehensive step-by-step guide to enable an Out-of-Office message for your users.</p>
                  </div>

                  <h6 className="mt-40 mb-20">Step 1: Go to Bot Setup</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Navigate to the 'Bot Setup' section on your Anantya.ai Panel. Select 'Away Message'</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Within the 'Bot Setup' section, locate and click on the option labeled 'Away Message.' This is where you'll configure your welcome message settings.</p>
                  </div>
                 
                  <div className="text-center">
                    <img src="assets/img/go-to-bot-setup.webp" className="img-fluid pb-3 mx-auto" alt="Go to Bot Setup"/>
                  </div>
                 
                  <h6 className="mt-40 mb-20">Step 2: Add an Away Message</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>In this step, you'll create and add your away message. Click on the 'Add Away Message' button to proceed.</p>
                  </div>
                  <div className="text-center">
                    <img src="assets/img/add-a-away-message.webp" className="img-fluid pb-3 mx-auto" alt="Add Away Message"/>
                  </div>
                 
                  <h6 className="mt-40 mb-20">Step 3: Setup Your Message</h6>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Begin by choosing the communication channel.</p>
                  </div>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Select the specific days you'll be using an away message.</p>
                  </div>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Set your opening and closing hours for each day.</p>
                  </div>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>If you receive messages beyond your closing time, an automatic away message will be triggered.</p>
                  </div>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Create a friendly and relatable message for your audience.</p>
                  </div>
                  <div className="text d-flex mb-10">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>If using multimedia, ensure images and videos align with your brand.</p>
                  </div>
                 
                  <div className="text-center">
                    <img src="assets/img/setup-your-message.webp" className="img-fluid pb-3 mx-auto" alt="Setup Your Message"/>
                  </div>
                  <h6 className="mt-40 mb-20">Step 4: Submit Your Away Message</h6>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Once you're satisfied with your away message, click the 'Submit' button to save your settings and activate the away message feature.</p>
                  </div>
                  
                  <div className="text-center">
                    <img src="assets/img/submit-your-away-message.webp" className="img-fluid pb-3 mx-auto" alt="Submit Your Away Message"/>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Congratulations! You've successfully set up your away message.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>From this point, you have the flexibility to manage your away messages.</p>
                  </div>
                  <div className="text d-flex mb-20">
                    <span className="icon color-blue5 me-2 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                    <p>Now you can always change your message to keep things fresh. You can also hide messages if you don't need them anymore.</p>
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
      {/* ====== end careers-features ====== */}
    </main>
{/* Add your content here */}
</div>
  );
};

export default OutOfOfficeMessage;
