import React, { useRef } from "react";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import WhatsAppWidget from "../../components/common/WhatsAppWidget";
import { Helmet } from "react-helmet";
import CommentForm from "../../components/common/CommentForm";
import { getImage } from '../../utils/getImage'; // Correct path to utility
// Fetching the image dynamically using getImage function
const EmpoweringCustomerSupportImg = getImage('/blog/Empowering-Customer-Support-min.webp');
const ReshapingCustomerEngagement = () => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section5Ref = useRef(null);
  const section7Ref = useRef(null);

  // Scroll to section function
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
     
        <div>
            <Helmet>
                {/* Alternate Links for Hreflang */}
                <link rel="alternate" hrefLang="x-default" href="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />
                <link rel="alternate" hreflang="en-ae" href="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />
                <link rel="alternate" hreflang="en-sa" href="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />
                <link rel="alternate" hreflang="en-bh" href="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />
                <link rel="alternate" hreflang="en-in" href="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />
                <link rel="alternate" hreflang="en" href="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />

                {/* Basic Meta Tags */}
                <title>Reshaping Customer Engagement on WhatsApp</title>
                <meta name="robots" content="index,follow" />
                <meta name="title" content="Reshaping Customer Engagement on WhatsApp" />
                <meta name="description" content="Transforming customer engagement on WhatsApp: Explore innovative strategies to enhance interactions, build relationships, and drive satisfaction. Elevate your approach now." />

                {/* Open Graph Tags */}
                <meta property="og:type" content="blog" />
                <meta property="og:locale" content="en_AE" />
                <meta property="og:title" content="Reshaping Customer Engagement on WhatsApp" />
                <meta property="og:description" content="Transforming customer engagement on WhatsApp: Explore innovative strategies to enhance interactions, build relationships, and drive satisfaction. Elevate your approach now." />
                <meta property="og:url" content="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />
                <meta property="og:site_name" content="anantya.ai" />
                <meta property="og:image" content="https://anantya.ai/assets/img/Empowering-Customer-Support-min.webp" />

                {/* Canonical Link */}
                <link rel="canonical" href="https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp" />
                
                {/* Author Meta Tag */}
                <meta name="author" content="Kiran Yadav" />

                {/* JSON-LD Schema Markup */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Anantya.ai",
                      "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
                      "url": "https://anantya.ai/",
                      "logo": "https://ik.imagekit.io/cloy701fl/images/logo.webp",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+971565480273",
                        "contactType": "sales",
                        "areaServed": ["AE","SA","BH","IN"],
                        "availableLanguage": "en"
                      },
                      "sameAs": [
                        "https://www.facebook.com/anantyaai",
                        "https://www.instagram.com/anantya.ai",
                        "https://www.youtube.com/@Anantyaai",
                        "https://www.linkedin.com/company/anantya-ai",
                        "https://www.pinterest.com/anantyaai"
                      ]
                    }
                    `}
                </script>

                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "BlogPosting",
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp"
                      },
                      "headline": "Reshaping Customer Engagement on WhatsApp",
                      "description": "Transforming customer engagement on WhatsApp: Explore innovative strategies to enhance interactions, build relationships, and drive satisfaction. Elevate your approach now.",
                      "image": "https://anantya.ai/assets/img/Empowering-Customer-Support-min.webp",  
                      "author": {
                        "@type": "Organization",
                        "name": "Anantya.ai",
                        "url": "https://anantya.ai",
                        "areaServed": ["AE","SA","BH","IN"]
                      },  
                      "publisher": {
                        "@type": "Organization",
                        "name": "Anantya.ai",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://ik.imagekit.io/cloy701fl/images/logo.webp"
                        }
                      },
                      "datePublished": "2023-08-17"
                    }
                    `}
                </script>

                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org/", 
                      "@type": "BreadcrumbList", 
                      "itemListElement": [{
                        "@type": "ListItem", 
                        "position": 1, 
                        "name": "Homepage",
                        "item": "https://anantya.ai/"  
                      },{
                        "@type": "ListItem", 
                        "position": 2, 
                        "name": "Blog",
                        "item": "https://anantya.ai/blog"  
                      },{
                        "@type": "ListItem", 
                        "position": 3, 
                        "name": "Reshaping Customer Engagement on WhatsApp",
                        "item": "https://anantya.ai/blog/reshaping-customer-engagement-on-whatsapp"  
                      }]
                    }
                    `}
                </script>
            </Helmet>
       </div>
      <section>
        <div className="container py-5 mt-4">
          {/* SEO-Friendly Heading */}
          <h1 className="pb-2 text-center">
            From Vision to Reality: How Anantya.ai is Reshaping Customer
            Engagement on WhatsApp
          </h1>

          <div className="text-center">
            <img
              src={EmpoweringCustomerSupportImg}
              className="img-fluid h-50 w-50 mx-auto"
              alt="Empowering Customer Support"
            />
          </div>

          <div className="row px-1 mx-1 mt-5 py-5">
            {/* Main Content */}
            <div className="col-lg-8 col-md-12 col-sm-12 text-justify text-start">
              <div className="blogcontentui">
                <div className="blogBox text-justify">
                  <section itemProp="articleBody" className="entry-content">
                    {/* Section 1 */}
                    <div ref={section1Ref}>
                      <p>
                        Wondering what{" "}
                        <a
                          href="/contact"
                          style={{ color: "#5dc4eb" }}
                        >
                          Anantya.ai
                        </a>{" "}
                        does and how it is related to WhatsApp? Well, you're on
                        the right page then.
                      </p>
                      <p>
                        The journey started when we realized that the existing
                        customer engagement solutions in the market were not up
                        to the mark to deliver exceptional customer experience.
                      </p>
                      <p>
                        One day, a brilliant idea hit us like a bolt of
                        lightning. We thought, "Why not make a groundbreaking
                        solution that automates customer support interactions
                        and adds a personal touch?" It was a lightbulb moment
                        that sparked our innovation.
                      </p>
                      <p>
                        Join us as we uncover the inspiring story behind
                        Anantya.ai and how it's shaping the future of customer
                        engagement on WhatsApp.
                      </p>
                      <p>
                        Soon we realized that WhatsApp, the popular app with a
                        whopping 98% engagement rate, had the perfect potential
                        to bring our vision to life.
                      </p>
                      <p>
                        We joined forces with WhatsApp as a trusted business
                        solution provider and utilized their official WhatsApp
                        Business API to create our advanced platform.
                      </p>
                      <p>
                        Filled with excitement, we started a remarkable venture.
                        The journey began with a singular focus on transforming
                        customer support, but we soon realized that our
                        ambitions reached far beyond that realm.
                      </p>
                      <p>
                        We discovered the importance of marketing alongside
                        customer support and made a decisive move to transform
                        our platform into a comprehensive WhatsApp engagement
                        platform.
                      </p>
                      <p>
                        With passion in our heart, we set off on an incredible
                        journey. Our team worked tirelessly to create something
                        special, a platform that would revolutionize WhatsApp
                        Marketing.
                      </p>
                      <p>
                        And that's how Anantya.ai was born. It quickly became a
                        game-changer, transforming the way businesses
                        communicate and engage with their customers.
                      </p>
                      <p>
                        Anantya.ai is a powerful WhatsApp engagement platform
                        for businesses, built on top of Official WhatsApp
                        Business APIs. With Anantya.ai, businesses can easily
                        send WhatsApp broadcasts, automate notifications and
                        reminders, provide live chat across multiple devices,
                        and even integrate a chatbot for automating sales and
                        customer support.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div ref={section2Ref}>
                      <h2>
                        Now, you must be thinking about what is the WhatsApp
                        Business API & what is its purpose. Well, here's the
                        answer.
                      </h2>
                      <p>
                        Since WhatsApp Business App’s capabilities were limited,
                        WhatsApp decided to introduce a new solution for growing
                        businesses called the WhatsApp Business API.
                      </p>
                      <p>
                        The{" "}
                        <a href="/contact" style={{ color: "#5dc4eb" }}>
                          WhatsApp Business API,
                        </a>{" "}
                        launched by Facebook in 2018, lets businesses send and
                        receive unlimited messages to people all around the
                        world through WhatsApp.
                      </p>
                      <p>
                        By using this API, businesses can create better
                        experiences for their customers on WhatsApp and reach a
                        wider audience.
                      </p>
                      <p>
                        Anantya.ai is a platform that is built on top of
                        WhatsApp Business APIs. As a trusted Meta Business
                        Partner, Anantya.ai has created a WhatsApp Marketing and
                        Engagement Platform that lets you:
                      </p>
                      <ul className="py-4" style={{ paddingLeft: "1rem" }}>
                        <li>
                          {" "}
                          &nbsp;Send automated or scheduled notifications like
                          payment reminders and delivery updates.
                        </li>
                        <li>
                          {" "}
                          &nbsp;Broadcast messages to thousands of opted-in
                          users at once.
                        </li>
                        <li>
                          {" "}
                          &nbsp;Enable multiple human agents to reply on the
                          same number for efficient support.
                        </li>
                        <li>
                          {" "}
                          &nbsp;Become a Verified Business on WhatsApp with the
                          green tick.
                        </li>
                        <li>
                          {" "}
                          &nbsp;Install chatbots to automate sales and support,
                          making your life easier.
                        </li>
                      </ul>
                      <p>
                        WhatsApp provides the WhatsApp Business API, giving you
                        the freedom to use it as you see fit. However, WhatsApp
                        does not offer a No-Code platform for these actions.
                      </p>
                      <p>
                        That's why we created Anantya.ai - a user-friendly
                        WhatsApp CRM, Chatbot & Marketing Platform designed to
                        handle all of these tasks effortlessly! With Anantya.ai,
                        you can unlock the full potential of{" "}
                        <a
                          href="/automated-chatbot"
                          style={{ color: "#5dc4eb" }}
                        >
                          WhatsApp for your business
                        </a>{" "}
                        without any coding hassle.
                      </p>
                      <p>
                        ” So that means I’ll have to get the Whatsapp Business
                        API for my Business for all or any of these actions?”
                      </p>
                      <p>Yes! You got that right!</p>
                    </div>

                    {/* Section 3 */}
                    <section
                      ref={section3Ref}
                      className="whatsapp-api-application"
                    >
                      <h2>
                        How to Apply for the WhatsApp Business API with
                        Anantya.ai?
                      </h2>
                      <p>
                        Well, it is super easy to apply for WhatsApp Business
                        API with Anantya.ai. You just need a few pre-requisites.
                      </p>
                      <ol
                        className="py-2"
                        style={{ padding: 0, listStyleType: "none" }}
                      >
                        <li>
                          <h3>1. A Business Website</h3>
                          <p>
                            A business website is essential for accessing the
                            WhatsApp Business API.
                          </p>
                          <ul style={{ paddingLeft: "1rem" }}>
                            <li style={{ listStyleType: "lower-alpha" }}>
                              <p>
                                <strong>A Mobile Number:</strong>
                              </p>
                              <p>
                                To proceed, You need a new phone number that is
                                not registered with any existing WhatsApp
                                accounts.
                              </p>
                              <p>
                                If you choose to use an old number, you must
                                permanently delete the active WhatsApp account
                                linked to it.
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3>2. A Verified Facebook Business Manager ID</h3>
                          <p>
                            You must have a Facebook business manager. In 90% of
                            cases, the Facebook Business Manager isn’t verified
                            by Facebook. It takes around 1-2 Days to get your
                            Facebook Business Manager Verified.
                          </p>
                          <p>
                            Once you have all of these, you can get started by
                            applying for WhatsApp Business API.
                          </p>
                        </li>
                      </ol>
                    </section>

                    {/* Section 7 */}
                    <div ref={section7Ref}>
                      <h2>Apply for the WhatsApp Business API</h2>

                      <p>
                        Once you’re done applying for the WhatsApp API, You can
                        go ahead & use the Anantya.ai platform to scale your
                        sales.
                      </p>
                    </div>
                  </section>
                </div>
              </div>

              {/* Comment Section */}
              <CommentForm />
            </div>

            {/* Table of Contents */}
            <div className="col-lg-4 col-md-12 py-4 py-lg-0">
              <aside className="summary-card">
                <h3 className="font-weight-bold mb-3 text-start pb-3 border-bottom border-1 brd-gray">
                  Table of Contents
                </h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#section1"
                      onClick={() => scrollToSection(section1Ref)}
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section2"
                      onClick={() => scrollToSection(section2Ref)}
                    >
                      Anantya.ai: The Journey Begins
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section3"
                      onClick={() => scrollToSection(section3Ref)}
                    >
                      WhatsApp's Role in Our Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section5"
                      onClick={() => scrollToSection(section5Ref)}
                    >
                      Understanding WhatsApp Business API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section7"
                      onClick={() => scrollToSection(section7Ref)}
                    >
                      Applying for WhatsApp Business API
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
        <WhatsAppWidget />
      </section>
    </>
  );
};

export default ReshapingCustomerEngagement;
