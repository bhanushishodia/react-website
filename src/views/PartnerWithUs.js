import React from 'react';

import './partnerwithus.css'; // Optional: Add custom CSS file for styling
import { Helmet } from 'react-helmet';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import AffiliateForm from '../forms/AffiliateForm'; // Adjust the path as needed
import partnerImage from '../assets/images/partner-program-homepage.webp'; // Adjust the path as necessary
import prioritySupportImg from '../assets/images/icons/Priority-support.png'; // Adjust the path as necessary
import revenueShareImg from '../assets/images/icons/revenue-share.png'; // Adjust the path as necessary
import expandBusinessImg from '../assets/images/icons/expand-business.png'; // Adjust the path as necessary
import affiliatePartnerImg from '../assets/images/partner/affiliate-partner.webp'; // Adjust the path as necessary
import whiteLabelPartnerImg from '../assets/images/partner/whiteLabel-partner.webp'; // Adjust the path as necessary
import solutionPartnerImg from '../assets/images/partner/solution-partner.webp'; // Adjust the path as necessary
import ctaImg from '../assets/images/partner/partner-cta.webp'; // Adjust the path as necessary
import logo1 from '../assets/images/updated-logo/1.png'; // Adjust the path as necessary
import logo2 from '../assets/images/updated-logo/2.png';
import logo3 from '../assets/images/updated-logo/3.png';
import logo4 from '../assets/images/updated-logo/4.png';
import logo5 from '../assets/images/updated-logo/5.png';
import logo6 from '../assets/images/updated-logo/6.png';
import logo7 from '../assets/images/updated-logo/7.png';
import logo8 from '../assets/images/updated-logo/8.png';
import logo9 from '../assets/images/updated-logo/9.png';
import logo10 from '../assets/images/updated-logo/10.png';
const PartnerWithUs = () => {
  const logosRow1 = [logo1, logo2, logo3, logo4, logo5];
  const logosRow2 = [logo6, logo7, logo8, logo9, logo10];
  return (
    <>
    <Helmet>
    <title>Collaborate to Grow with WhatsApp Solutions | Partner With Us</title>
    <meta name="robots" content="index,follow" />
    <meta name="description" content="Build fruitful partnerships with Anantya.ai for WhatsApp solutions. Together, we can empower businesses and enhance customer communication." />
    <meta property="og:title" content="Collaborate to Grow with WhatsApp Solutions | Partner With Us" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Build fruitful partnerships with Anantya.ai for WhatsApp solutions. Together, we can empower businesses and enhance customer communication." />
    <meta property="og:url" content="https://anantya.ai/partner-with-us" />
    <meta property="og:site_name" content="anantya.ai" />
    <meta property="og:image" content="https://anantya.ai/assets/img/partner/let%E2%80%99s-grow-together-home.webp" />
    <link rel="canonical" href="https://anantya.ai/partner-with-us" />
    <meta name="author" content="Anantya" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://anantya.ai"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work with us",
            "item": "https://anantya.ai/partner-with-us"
          }
        ]
      })}
    </script>
  </Helmet>
    <div className="partner-with-us-page">
      {/* section1 */}
      <section>
         <div className="partner">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text-md-start text-center">
                    <span
                      style={{
                        letterSpacing: '.2rem',
                        paddingLeft: '0.5rem',
                        color: '#4a4a56!important',
                      }}
                    >
                      PARTNER PROGRAM
                    </span>
                    <h1 className="pt-4">
                      Join the Anantya.ai &nbsp; <br />{' '}
                      <span>Partner Program</span>
                    </h1>
                    <p className="pt-30">
                      We've got the Smartest WhatsApp Engagement Platform, and you have your audience. Together, we can conquer the market.
                    </p>
                    <div className="info">
                      <form
                        action="https://formspree.io/f/mdorezev"
                        className="form"
                        method="post"
                      >
                        <div className="form-group">
                          <span className="icon">
                            <i className="far fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="_replyto"
                            placeholder="Your email address"
                            required
                          />
                          <input
                            type="hidden"
                            name="_subject"
                            value="New partnership inquiry"
                          />
                          <button
                            type="submit"
                            className="btn  rounded-pill bg-green"
                          >
                            <span>
                              Become a Partner 
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 pt-md-0 pt-4">
                  <img
                    src={partnerImage}
                    className="img-fluid"
                    alt="partner-with-us"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* section1 */}
      {/* section2 */}
      <section>
         <div className="container text-center py-4 px-md-0 px-3">
        <div className="section_title">
          <h2>
            Partner <span>Benefits</span>
          </h2>
          <p>
            Let your clients be amazed when you introduce Anantya.ai to them. Plus, you get amazing partner
            benefits.
          </p>
        </div>
        <div className="row pt-5 mt-md-5 mt-0 latest_story">
          <div className="col-md-4 px-4">
            <div className="story_box pt-4">
              <div className="story_img">
                <img src={prioritySupportImg} className="img-fluid w-25 h-25" alt="Priority Support" />
              </div>
              <div className="story_text">
                <h3>Priority Support</h3>
                <p>
                  Get direct access to a dedicated Success Manager who will handle all your questions and
                  help you improve your processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-md-0 mt-4 px-4">
            <div className="story_box">
              <div className="story_img">
                <img src={revenueShareImg} className="img-fluid h-25 w-25 pt-4" alt="Revenue Share" />
              </div>
              <div className="story_text">
                <h3>Revenue Share</h3>
                <p>
                  Set your own profit margins on subscription plans and WhatsApp chat charges, or earn
                  commissions through partnerships.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-md-0 mt-4 px-4">
            <div className="story_box">
              <div className="story_img">
                <img src={expandBusinessImg} className="img-fluid h-25 w-25 pt-4" alt="Expand Business" />
              </div>
              <div className="story_text">
                <h3>Expand Business</h3>
                <p>
                  Find new ways to grow, boost your presence in the market, and expand strategically for
                  overall growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* section2 */}
      {/* section3 */}
      <section>
      <div className="container text-center py-5 px-md-0 px-4">
        <div className="section_title">
          <h2>
            Choose a <span>program</span> that fits you best
          </h2>
          <p className="px-md-5 px-1 pt-2" style={{ letterSpacing: '0.8px' }}>
            We bring you our different partner programs so that you can choose the right one for you!
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 py-0">
          <div className="col mt-md-0 mt-3">
            <div className="h-100">
              <a href="/affiliate-program" target="_blank" rel="noopener noreferrer">
                <img
                  src={affiliatePartnerImg}
                  className="img-fluid Affiliate_Image"
                  alt="Affiliate Partner"
                />
              </a>
              <h4>Affiliate Partner</h4>
              <p className="pt-2">
                Monetize your audience & Earn 20% Recurring Affiliate Commission on each successful sale.
              </p>
              <a
                className="mt-10 internalpage_link"
                href="affiliate-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become an Affiliate Partner <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
              </a>
            </div>
          </div>

          <div className="col mt-md-0 mt-3">
            <div className="h-100">
              <a href="/white-label-partner" target="_blank" rel="noopener noreferrer">
                <img
                  src={whiteLabelPartnerImg}
                  className="img-fluid Affiliate_Image"
                  alt="WhiteLabel Partner"
                />
              </a>
              <h4>WhiteLabel Partner</h4>
              <p className="pt-2">
                Resell Anantya.ai Platform under your own Branding with your Logo and Sub-Domain.
              </p>
              <a
                className="mt-10 internalpage_link"
                href="white-label-partner"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a WhiteLabel Partner <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
              </a>
            </div>
          </div>

          <div className="col mt-md-0 mt-3">
            <div className="h-100">
              <a href="solution-partner" target="_blank" rel="noopener noreferrer">
                <img
                  src={solutionPartnerImg}
                  className="img-fluid Affiliate_Image"
                  alt="Solution Partner"
                />
              </a>
              <h4>Solution Partner</h4>
              <p className="pt-2">
                Promote and sell Anantya.ai Platform. Get training, support, and resources for lead conversion.
              </p>
              <a
                className="mt-10 internalpage_link"
                href="solution-partner"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Solution Partner <i class="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* section3 */}
      {/* section4 */}
      <section className="container pt-5">
      <div className="cta-partner text-black mx-md-0 mx-3">
        <div className="row my-auto py-md-0 px-md-0 px-0 mx-md-0 mx-0 text-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 text-capitalize my-auto"
            style={{ backgroundColor: '#f3fbff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
          >
            <h2 className="font-weight-bold px-md-5 px-3 pt-5 text-center">
              Join The Champions- <br />
              Sell What's Already <span className="highlight-2">Winning!</span>
            </h2>
            <img src={ctaImg} className="img-fluid w-75" alt="cta-img" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-capitalize partner_forms my-auto px-md-5 px-4 text-left">
          <AffiliateForm />
          </div>
        </div>
      </div>
      </section>
      {/* section4 */}
      {/* section5 */}
      <section>
      <div className="container text-center py-5 px-md-0 px-4">
        <div className="section_title">
          <h2>1000+ Businesses in over <br /> <span>10 Countries</span> Grow with our Product</h2>
        </div>

        <div className="row row-cols-2 row-cols-md-5 mt-3 g-4 py-md-1 py-0 px-md-5 px-2 justify-content-center align-items-center">
          {logosRow1.map((logo, index) => (
            <div className="col" key={index}>
              <img src={logo} className="img-fluid anantya_partner_logo" alt="logo-image" />
            </div>
          ))}
        </div>

        <div className="row row-cols-2 row-cols-md-5 g-4 py-md-3 mt-1 py-0 px-md-5 px-2 justify-content-center align-items-center">
          {logosRow2.map((logo, index) => (
            <div className="col" key={index}>
              <img src={logo} className="img-fluid anantya_partner_logo" alt="logo-image" />
            </div>
          ))}
        </div>
      </div>
      </section>
      {/* section5 */}
      <ScrollToTopButton />
      <WhatsAppWidget />
    </div>
    </>
  );
};

export default PartnerWithUs;
