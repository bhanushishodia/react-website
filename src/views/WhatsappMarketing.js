import React from "react";
import "./WhatsappMarketing.css"; // Import a CSS file if you have specific styles
import whatsappMarketing from '../assets/images/whatsapp-marketing-home-page.webp'; // Adjust path as needed
import broadcastImage  from  '../assets/images/broadcasting-promotional-messages.webp';
import clickToWhatsAppImage from '../assets/images/run-click-to-whatsApp-ads.webp'; // Adjust the path as needed
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import CountUp from 'react-countup';
import DownloadEbookSection from "../components/common/DownloadEbookSection"; // Import the new component
import downloadEbookImage from '../assets/images/download-ebook.png'; // Adjust path as needed
import automateNotificationsImage from '../assets/images/automate-notifications-&-reminders.webp'; // Adjust path as needed
import callToActionImage from '../assets/images/cta/whatsapp-marketing.webp'; // Adjust path as needed
import redirectTrafficImage from '../assets/images/redirect-website-traffic-on-whatsapp.webp'; // Adjust path as needed
const WhatsappMarketing = () => {
    
  return (
    <div className="whatsapp-marketing-page">
      <div className="container py-5 mt-5">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-6 text-black mt-20">
              <div className="info text-black text-md-start text-center">
                <h1 className="heading">Kick Start Your WhatsApp Marketing Journey</h1>
                <p className=" text-black pe-md-5">
                  Unlock the power of WhatsApp Marketing and watch your business
                  skyrocket to new heights! With us, you can achieve:
                </p>
                <ul style={{ listStyleType: "none", }}>
                  <li>Upto 150x ROI by Broadcasting Messages</li>
                  <li>5x Conversions with Click to WhatsApp Ads</li>
                  <li>Automate your business for 2x Boost in sales</li>
                </ul>
                <div className="d-flex align-items-center mt-20 youtube">
                  <p className="me-5">
                    ⚡️Powered by Official WhatsApp Business API
                  </p>
                </div>
                <div className="btns mt-20">
                  <button type="button"
                    href="https://calendly.com/info-w0m/30min?month=2024-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn me-2 bg-green text-white btn-color"
                  >
                    <i className="fab fa-whatsapp me-2 pe-2 border-end"></i>
                    Book a Demo
                  </button>
                  <a href="contact" className="btn login_button">
                    Try for Free
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="wow animate__animated animate__fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "zoomIn",
                }}
              >
                <img
                  src={whatsappMarketing}
                  className="img-fluid"
                  alt="Start your WhatsApp Marketing Journey With Anantya.ai"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="numbers">
      <div className="container py-5">
        <div className="content">
          <div className="row">
            <div className="col-lg-4">
              <div className="number-card style-6">
                <h2 className="me-4 color-blue5">
                  <CountUp start={0} end={70} duration={2.75} suffix="%" />
                </h2>
                <div className="text">
                  lower cost per lead with marketing campaigns
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card style-6">
                <h2 className="me-4 color-blue5">
                  <CountUp start={0} end={2} duration={2.75} suffix="X" />
                </h2>
                <div className="text">
                  Higher Open Rates
                  & Faster Response Times
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card style-6 border-0">
                <h2 className="me-4 color-blue5">
                  <CountUp start={0} end={58} duration={2.75} suffix="%" />
                </h2>
                <div className="text">
                  Repeat Customers
                  with smart recommendation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
            <h2>
              Boost Customer <span> Engagement </span> with WhatsApp broadcasts
            </h2>
            <br />
            <p className="text-justify">
              Easily send unlimited WhatsApp promotional messages to users who have opted in, sharing discount offers, promotions on festivals & much more.
            </p>
            <br />
            <p className="text-justify">
              Broadcasting bulk WhatsApp Marketing messages and offers stands out as the best method to connect with a broad audience and enhance sales.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={broadcastImage}
              className="img-fluid"
              alt="broadcasting-promotional-messages"
            />
          </div>
        </div>
      </div>
      </section>
      <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={clickToWhatsAppImage}
              className="img-fluid"
              alt="run-click-to-whatsApp-ads"
            />
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5 pt-4 text-md-start text-center">
            <h2>
              Run <span className="primary_color"> Click to WhatsApp Ads </span> On Instagram & Facebook
            </h2>
            <br />
            <p className="text-justify">
              Run Direct to WhatsApp Ads on Instagram and Facebook with WhatsApp marketing software to quickly generate leads and lower lead costs.
            </p>
         
            <p className="text-justify">
              With 'Direct to WhatsApp Ads,' users go straight to your WhatsApp, starting a live one-on-one chat. When someone lands on your WhatsApp, you instantly get their name and phone number without making them fill out long forms.
            </p>
            <button
  type="button"
  className="btn bg-green text-white mt-3"
  onClick={() => window.open('https://wa.link/prcxc0', '_blank')}
>
  Get Started with CTWA
</button>

          </div>
        </div>
      </div>
    </section>
    <DownloadEbookSection
        title="Discover why your business needs WhatsApp marketing"
        description="Read this detailed guide to understand why your business should use the WhatsApp Business API for marketing"
        imageSrc={downloadEbookImage}
        imageAlt="download-ebook-logo"
        buttonText="Download ebook"
        modalTarget="#myModal1"
      />
      
      {/* Modal components */}
      <div className="modal fade" id="myModal1" tabIndex="-1" aria-labelledby="myModalLabel1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel1">Download Ebook Now</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Your modal content for the first ebook */}  
              <form action="https://formspree.io/f/mdorezev" method="post" id="marketing">
              
                <div className="row">
                  <div className="col-lg-12 mb-20">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="col-lg-12 mb-20">
                    <input type="text" name="email" className="form-control" placeholder="Email Address *" required />
                  </div>
                  <div className="col-lg-12 mb-20">
                    <input type="text" name="phone" className="form-control" placeholder="Phone Number (optional)" />
                  </div>
                  <div className="col-lg-12 mb-20">
                    <input type="text" name="message" className="form-control" placeholder="Name of Organisation" required />
                  </div>
                  <div className="col-lg-12">
                    <input type="url" name="url" className="form-control" placeholder="Website URL" required />
                  </div>
                  <div className="col-lg-12 text-center mt-3">
                    <input type="submit" value="Send Your Request" className="btn bg-green text-white cursor-pointer" />
                  </div>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
     
      <section style={{ background: 'linear-gradient(to left bottom, #FFF7FC, #f3fbff)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5 text-md-start text-center">
            <h2>
              Automate <span className="primary_color"> Notifications & Reminders </span> on WhatsApp
            </h2>
            <br />
            <p className="text-justify">
              Forget about emails and texts – you'll get 5 times more people to see and respond when you use WhatsApp marketing software for automated notifications.
            </p>
            <br />
            <p className="text-justify">
              You can set up automatic messages on WhatsApp for different things like orders, shipping updates, deliveries, abandoned carts, and more by connecting it with other tools.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={automateNotificationsImage}
              className="img-fluid"
              alt="automate-notifications-reminders"
            />
          </div>
        </div>
      </div>
    </section>
    <div className="container py-5">
      <a href="https://wa.link/prcxc0" target="_blank" rel="noopener noreferrer">
        <img
          src={callToActionImage}
          className="img-fluid"
          alt="Call to action on the home page"
        />
      </a>
    </div>
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto px-5">
            <img
              src={redirectTrafficImage}
              className="img-fluid"
              alt="redirect-website-traffic"
            />
          </div>
          <div className="col-md-6 col-sm-12 my-auto px-5 pt-4 text-md-start text-center">
            <h2>
              Redirect <span className="primary_color">Website Traffic</span> on WhatsApp with a WhatsApp Button
            </h2>
            <br />
            <p className="text-justify">
              A WhatsApp chat widget is like a chat button on a website that lets visitors talk to you through WhatsApp.
            </p>
           
            <p className="text-justify">
              Think of a WhatsApp Chat Widget as a handy tool on websites, like a friendly doorbell for online visitors. It makes it simple for them to start a chat with you using the familiar WhatsApp platform.
            </p>
          </div>
        </div>
      </div>
    </section>  
    <ScrollToTopButton />
    <WhatsAppWidget />
    </div>
  );
};

export default WhatsappMarketing;
