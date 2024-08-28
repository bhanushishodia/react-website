import React from 'react';
import AffiliateForm from '../forms/AffiliateForm'; // Adjust the path as needed
import "./AffiliateProgram.css"; // Import the CSS file
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import thumbnailImg from '../assets/images/thumblain.webp'; // Adjust path as needed
import playButtonImg from '../assets/images/play-button-logo.png'; // Adjust path as needed
import bloggerImg from '../assets/images/icons/Blogger.png'; // Adjust path as needed
import youtuberImg from '../assets/images/icons/youtuber.png'; // Adjust path as needed
import influencerImg from '../assets/images/icons/influencer.png'; // Adjust path as needed
import webStudioImg from '../assets/images/icons/web studio.png'; // Adjust path as needed
import freelancerImg from '../assets/images/icons/freelancer.png'; // Adjust path as needed
import expertImg from '../assets/images/icons/exepert.png'; // Adjust path as needed
import whyJoinImg from '../assets/images/why-should-you-join.webp'; // Adjust path as needed

import arrowRight1 from '../assets/images/icons/arrow-right-1.svg'; // Adjust path as needed
import arrowRight2 from '../assets/images/icons/arrow-right-2.svg'; // Adjust path as needed
import ctaImg from '../assets/images/partner/who-we-partner-with.webp'; // Adjust the path as necessary
const AffiliateProgram = () => {
  return (
    <>
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto  text-md-start text-center">
            <span style={{ letterSpacing: '.2rem', paddingLeft: '0.5rem', color: '#4a4a56' }}>
              Affiliate Partner
            </span>
            <h1 className="partner_heading pt-3">
              Become an Anantya.ai <span>Affiliate Partner</span>
            </h1>
            <p>
              <span className="u-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                  <path
                    d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z"
                    fill="currentColor"
                  ></path>
                </svg>
                &nbsp;Earn a 50% commission on your first sale, a 20% recurring commission for life on successful referrals!
              </span>
            </p>
            <p>
              <span className="u-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                  <path
                    d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z"
                    fill="currentColor"
                  ></path>
                </svg>
                &nbsp;Add the Smartest WhatsApp Engagement Platform to your Offerings!
              </span>
            </p>
            <a
              type="button"
              className="btn bg-green text-white btn-color text-center text-capitalize mt-3"
              href="your-affiliate-link.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become an Affiliate
            </a>
          </div>
          <div className="col-md-6 col-sm-12 pt-md-0 pt-4 px-4 my-auto">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <a href="https://www.youtube.com/watch?v=ozBMhE9o7nU" data-lity="">
                <img
                  className="img-fluid"
                  style={{ borderRadius: '15px' }}
                  src={thumbnailImg}
                  alt="Affiliate Program"
                  width="555"
                  height="289"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=ozBMhE9o7nU"
                data-lity=""
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <img
                  src={playButtonImg}
                  alt="Play Button"
                  width="64"
                  height="64"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
     <div className="container py-5 ">
     <h2 className=" text-center">Who can join?</h2>
       <div className="row row-cols-1 row-cols-md-2 g-4 py-md-5 py-0">
         <div className="col">
          
           <div className="row row-cols-1 row-cols-md-2 g-4 py-3">
             <div className="col">
               <img src={bloggerImg} className="img-fluid" alt="Blogger" />
               <h6 className="pt-3">Bloggers</h6>
               <p>Write blogs that educate your audience and generate leads.</p>
             </div>
             <div className="col">
               <img src={youtuberImg} className="img-fluid" alt="Youtubers" />
               <h6 className="pt-3">Youtubers</h6>
               <p>Make videos that promote and popularize Anantya.ai.</p>
             </div>
           </div>
           <div className="row row-cols-1 row-cols-md-2 g-4 py-3">
             <div className="col">
               <img src={influencerImg} className="img-fluid" alt="Influencers" />
               <h6 className="pt-3">Influencers</h6>
               <p>Introduce Anantya.ai to your friends and followers.</p>
             </div>
             <div className="col">
               <img src={webStudioImg} className="img-fluid" alt="Web Studio" />
               <h6 className="pt-3">Web Studio</h6>
               <p>Refer your clients to us and earn a generous commission.</p>
             </div>
           </div>
         </div>
         <div className="col">
           <div className="row row-cols-1 row-cols-md-2 g-4 ">
             <div className="col py-3">
               <img src={freelancerImg} className="img-fluid" alt="Marketing Freelancers" />
               <h6 className="pt-3">Marketing Freelancers</h6>
               <p>Make money easily without any commitments or restrictions.</p>
             </div>
             <div className="col">
               <img src={expertImg} className="img-fluid" alt="Industry Experts" />
               <h6 className="pt-3">Industry Experts</h6>
               <p>Experts who know a lot about the industry and can help spread the word.</p>
             </div>
           </div>
           <h5 className="pt-4 mt-md-5">
             If you’re making the list, congratulations on making it to the Anantya.ai affiliate program!
           </h5>
           <a
             type="button"
             className="btn bg-green  text-white btn-color text-capitalize mt-3"
             href="your-affiliate-link.html"
             target="_blank"
             rel="noopener noreferrer"
           >
             Join Today!
           </a>
         </div>
       </div>
     </div>
     <section className="about style-4">
      <div className="content sec-content">
        <div className="container">
          <div className="section-head style-4 text-center">
            <h2 className="mb-30">
              <span>Why should you join our</span>
              <br />
              <span>affiliate program?</span>
            </h2>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-2 order-lg-0">
              <div className="info">
                <div className="faq style-3 style-4">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          50% Commission on first sale
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Earn 50% commission on your first successful referral. Add the Smartest
                          WhatsApp Engagement Platform to your Offerings!
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          20% Recurring commissions Lifetime
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Earn 20% commission from the initial payment + 20% commission of all
                          recurring payments in your account.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Promo materials
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Pick your favorite affiliate links and banners. Plus, get helpful tips,
                          content materials, and a personal manager.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          Affiliate manager
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Need assistance with promoting or maximizing the program? Our dedicated
                          affiliate manager is here to help answer all your questions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-2">
              <div className="img mb-30 mb-lg-0">
                <img src={whyJoinImg} className="img-fluid" alt="Why should you join" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container mt-5 text-center px-md-0 px-4">
        <div className="section_title pb-20">
          <h2>
            How It <span>Works</span>
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-5 g-4 py-md-5 py-0">
          <div className="col p-0">
            <div className="h-100">
              
              <h4 className="pt-2"> 1. Sign Up</h4>
              <p>Complete our easy application. Generate the link from our website only.</p>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={arrowRight1}
              className="img-fluid w-75 d-sm-none d-md-block d-none d-lg-block"
              alt="arrow"
            />
          </div>
          <div className="col mt-md-0 mt-3 p-0">
            <div className="h-100">
              
              <h4 className="pt-2">2. Refer</h4>
              <p>Start sharing your unique link (URL) and promote Anantya.ai to your audience.</p>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={arrowRight2}
              className="img-fluid w-75 d-sm-none d-md-block d-none d-lg-block"
              alt="arrow"
            />
          </div>
          <div className="col mt-md-0 mt-3 p-0">
            <div className="h-100">
            
              <h4 className="pt-2">3. Get Paid</h4>
              <p>Earn a 20% commission on every qualified sale made through your referral links.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container pt-5">
      <div className="cta-partner text-black mx-md-0 mx-3">
        <div className="row my-auto py-md-0 px-md-0 px-0 mx-md-0 mx-0 text-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-capitalize my-auto"
            style={{ backgroundColor: '#f3fbff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
          >
            <h2 className="font-weight-bold px-md-5 px-3 pt-5 text-center">
            Become An Affiliate
            Partner Today!
            </h2>
            <span class="u-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                                <path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path>
                            </svg> &nbsp;Earn 50% Commission on your first sale.</span>
            <img src={ctaImg} className="img-fluid w-75" alt="cta-img" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-capitalize partner_forms my-auto px-md-5 px-4 text-left">
          <AffiliateForm />
          </div>
        </div>
      </div>
      </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
     </>
  );
};

export default AffiliateProgram;
