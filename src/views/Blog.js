import React, { useState } from "react";
import "./Blog.css"; // Ensure you have a corresponding CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Helmet } from 'react-helmet';
import { getImage } from '../utils/getImage'; // Adjust the path to your utility
const whatsappBroadcastingImg = getImage('/blog/whatsapp-broadcasting.webp');
const marketingStrategyImg = getImage('/blog/Enhance-your-marketing-strategy-min.webp');
const chatbotReportsImg = getImage('/blog/chatbot-reports.webp');
const whatsappAuthImg = getImage('/blog/whatsapp-authertication.webp');
const empoweringSupportImg = getImage('/blog/Empowering-Customer-Support-min.webp');
const gitexBlogImg = getImage('/blog/gitexblog.jpeg');
const boostSalesImg = getImage('/blog/boost-sales-on-festive-season-with-ai-chatbots.jpeg');
const clickToWhatsAppAdsImg = getImage('/blog/click-to-whatsapp-ads.jpeg');
const whatsappApiGuideImg = getImage('/blog/whatsapp-business-api-your-ultimate-guide.jpg');
const whatsappBroadcastImg = getImage('/blog/whatsapp-broadcasting-your-ultimate-guide-whatsapp-broadcast-your-complete-business-booster-guide.webp');
const whatsappHealthcareImg = getImage('/blog/whatsapp-for-healthcare.webp');
const whatsappChatbotImg = getImage('/blog/whatsapp-chatbot-for-business.webp');
const whatsappBankingImg = getImage('/blog/whatsapp-business-api-in-banking-sector.webp');
const metaUpdateImg = getImage('/blog/meta-frequency-capping-update.webp');
const whatsappMarketingImg = getImage('/blog/whatsapp-marketing-direct-communication-with-customers.webp');
const whatsappPricingImg = getImage('/blog/whatsapp-business-api-conversation-pricing.webp');
const whatsappGreenToBlueTickImg = getImage('/blog/whatsapp-business-switching-from-green-tick-to-blue-tick.webp');
const whatsappPricingChangeImg = getImage('/blog/whatsapp-authentication-rates.webp');
const whatsappFreeEntryImg = getImage('/blog/whatsapp-free-entry-frequency-capping.webp');
const whatsappBroadcastListImg = getImage('/blog/whatsapp-broadcast-list-and-its-features.webp');
const whatsappGovtAPIImg = getImage('/blog/whatsapp-business-api-for-government.webp');
const whatsappAPIProvidersImg = getImage('/blog/whatsapp-business-api-providers-2024.webp');
// Fetching images dynamically using the getImage function
const Blog = () => {

  const [selectedCategory, setSelectedCategory] = useState("all");

  const cardsData = [
    {
      imgSrc: whatsappAuthImg,
      title:
        "WhatsApp Business App vs WhatsApp Business API: Simplified Comparison for Business Owners",
      description:
        "When WhatsApp introduced the WhatsApp Business app, it came out as a great tool for small businesses to interact with customers..",
      link: "/blog/whatsapp-business-app-vs-whatsapp-business-api",
      category: "Marketing Strategies",
    },
    {
      imgSrc: empoweringSupportImg,
      title: "5 Winning WhatsApp Marketing Strategies to Drive 3X More Sales",
      description:
        "As of now, the world's population is around 7.5 billion people. And guess what? The number of WhatsApp messages sent is 13 times bigger than that! It's crazy, right?",
      link: "/blog/whatsapp-marketing-strategies-to-drive-sales",
      category: "Marketing Strategies",
    },
    {
      imgSrc: chatbotReportsImg,
      title:
        "From Vision to Reality: How Anantya.ai is Reshaping Customer Engagement..",
      description:
        "The journey started when we realized that the existing customer engagement solutions in the market were not up to the mark to deliver exceptional customer experience.",
      link: "/blog/reshaping-customer-engagement-on-whatsapp",
      category: "Marketing Strategies",
    },
    {
      imgSrc: boostSalesImg,
      title:
        "Enhance Customer Experiences and Boost Sales this Festive Season with AI Chatbots",
      description:
        "The Indian festive season has already begun! Southeast Asia (SEA) and other world regions will shortly begin it. Businesses must develop creative methods to interact with clients..",
      link: "/blog/boost-sales-on-festive-season-with-ai-chatbots",
      category: "Use Cases & Features",
    },
    {
      imgSrc: gitexBlogImg,
      title:
        "GITEX 2023 Highlights: Anantya.ai Leads the AI-Powered Messaging Evolution",
      description:
        "Anantya.ai, a leading WhatsApp Business API solution provider, made a significant presence at GITEX 2023, the world's premier global technology exhibition. Their showcase at GITEX, hosted in the impressive Dubai Harbour, highlighted their AI-powered",
      link: "/blog/gitex-2023-highlights-anantya-ai-ai-powered-messaging-evolution",
      category: "WhatsApp News Updates",
    },
    {
      imgSrc: clickToWhatsAppAdsImg,
      title:
        "Elevate Your Marketing in 2023 with Click-to-WhatsApp Ads: A Game-Changing Strategy",
      description:
        "WhatsApp Business API has already revolutionized the way that consumers and businesses interact and maintain connections.",
      link: "/blog/click-to-whatsapp-ads-marketing-2023",
      category: "Use Cases & Features",
    },
    {
      imgSrc: whatsappApiGuideImg,
      title: "WhatsApp Business API: Your Ultimate 2024 Guide",
      description:
        "Have you ever wondered how businesses manage to stay connected with their customers through WhatsApp in a seamless and efficient way?",
      link: "/blog/whatsapp-business-api-ultimate-guide",
      category: "Use Cases & Features",
    },
    {
      imgSrc: whatsappBroadcastImg,
      title: "WhatsApp Broadcast: Your Complete Business Booster Guide",
      description:
        "Eager to learn about WhatsApp broadcasting! Will using WhatsApp broadcasting bring ROI to your business?",
      link: "/blog/whatsapp-broadcasting-ultimate-guide",
      category: "Use Cases & Features",
    },
    {
      imgSrc: whatsappHealthcareImg,
      title: "How to Use WhatsApp for Healthcare: A Simple Guide",
      description:
        "With a large user base of 2.79 billion people globally, WhatsApp is not only just for chatting; it’s also helping to save lives!",
      link: "/blog/whatsapp-for-healthcare-a-simple-guide",
      category: "Industries",
    },
    {
      imgSrc: whatsappChatbotImg,
      title: "How to Create a WhatsApp ChatBot in Just a Few Steps",
      description:
        "Looking for different ways to boost your business or provide better customer support while using a WhatsApp chatbot?",
      link: "/blog/how-to-create-a-whatsapp-chatbot-for-business",
      category: "Use Cases & Features",
    },
    {
      imgSrc: whatsappBankingImg,
      title: "Use of the WhatsApp Business API in the Banking Sector",
      description:
        "We all receive messages and notifications from banks, be it offers of new savings accounts or credit card schemes..",
      link: "/blog/whatsapp-business-api-for-banking-sector",
      category: "Industries",
    },
    {
      imgSrc: metaUpdateImg,
      title: "What will change after Meta’s new frequency capping update?",
      description:
        "Nowadays, WhatsApp is being used for marketing and has gained lots of popularity. This sounds pleasant while ..",
      link: "/blog/meta-new-frequency-capping-update",
      category: "WhatsApp News Updates",
    },
    {
      imgSrc: whatsappMarketingImg,
      title:
        "Whatsapp Marketing: Build a Direct Line of Communication with Customers",
      description:
        "Have you ever thought of using WhatsApp for more than just chatting with friends or sending funny reels and videos?",
      link: "/blog/whatsapp-marketing-a-direct-communication-with-customers",
      category: "Marketing Strategies",
    },
    {
      imgSrc: whatsappPricingImg,
      title: "WhatsApp Business API Conversation Pricing is Changing!",
      description:
        "With billions of users worldwide, WhatsApp has established a well-known presence among users..",
      link: "/blog/whatsapp-business-api-pricing",
      category: "WhatsApp News Updates",
    },
    {
      imgSrc: whatsappGreenToBlueTickImg,
      title: "Why WhatsApp Business is Switching from Green Tick to Blue Tick Verification",
      description:
        "Have you recently noticed any changes in WhatsApp? No… no… I am not talking about the app’s upgraded version..",
        link: "/blog/whatsapp-business-switching-from-green-tick-to-blue-tick",
        category: "WhatsApp News Updates",
    },
    {
      imgSrc: whatsappPricingChangeImg,
      title: "Telecom Revolt on International Authentication Messages: The WhatsApp Pricing Change",
      description:
        "Reaching millions of people with just a single click, the world has grown digitally. WhatsApp has become the first-ever..",
      link: "/blog/change-in-whatsapp-international-authentication-pricing",
      category: "WhatsApp News Updates",
    },
    
    {
      imgSrc: whatsappFreeEntryImg,
      title: "WhatsApp’s Free Entry Point and Frequency Capping in 2024: What Businesses Need to Know",
      description:
        "With the 2024 update, Meta’s new change in WhatsApp has shaken things up. This update has limited how..",
      link: "/blog/whatsapp-free-entry-frequency-capping",
      category: "WhatsApp News Updates",
    },
    {
      imgSrc: whatsappBroadcastListImg,
      title: "How to Create a WhatsApp Broadcast List and Its Features",
      description:
        "Have you ever wondered about sending out messages to hundreds of customers on WhatsApp without ..",
      link: "/blog/whatsapp-broadcast-list",
      category: "Use Cases & Features",
    },
    {
      imgSrc: whatsappGovtAPIImg,
      title: "How the Government Can Use WhatsApp Business API to Serve Indian Citizens",
      description:
        "Have you ever visited a government office? After seeing such a huge waiting queue, do you also feel frustrated or maybe just want to go back home?",
      link: "/blog/whatsapp-business-api-for-government",
      category: "Industries",
    },
    {
      imgSrc: whatsappAPIProvidersImg,
      title: "Top WhatsApp Business API Providers in 2024",
      description:
        "“Where there are people, there is business”. With nearly 3 billion users, WhatsApp is quickly becoming the first choice for communication platforms to market their products",
      link: "/blog/whatsapp-business-api-providers",
      category: "Marketing Strategies",
    },
    // Add other card data objects here
  ];

  const filteredCards = 
    selectedCategory === "all"
      ? cardsData
      : cardsData.filter((card) => card.category === selectedCategory);
  return (
    <>
      <Helmet>
      <title>Anantya.ai Blog and Article - Stay Updated with Latest WhatsApp Trends</title>
      <meta name="robots" content="index,follow" />
      <meta
        name="description"
        content="Explore Anantya.ai insightful articles and updates on WhatsApp trends innovations. Stay updated with WhatsApp Business API."
      />
      <meta property="og:title" content="Anantya.ai Blog and Article - Stay Updated with Latest WhatsApp Trends" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Explore Anantya.ai insightful articles and updates on WhatsApp trends innovations. Stay updated with WhatsApp Business API."
      />
      <meta property="og:url" content="https://anantya.ai/blog" />
      <meta property="og:site_name" content="anantya.ai" />
      <meta property="og:image" content="https://anantya.ai/assets/img/home/Home%20page%20Graphics.webp" />
      <link rel="canonical" href="https://anantya.ai/blog" />
      <meta name="author" content="Anantya" />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Anantya.ai",
            "alternateName": "Conversational Engagement Platform for Businesses | Anantya.ai",
            "url": "https://anantya.ai/",
            "logo": "https://anantya.ai/assets/img/logo.webp",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971565480273",
              "contactType": "sales",
              "areaServed": ["AE", "SA", "BH"],
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
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://anantya.ai/blog"
            },
            "headline": "Anantya.ai Blog and Article - Stay Updated with Latest WhatsApp Trends",
            "description": "Explore Anantya.ai insightful articles and updates on WhatsApp trends innovations. Stay updated with WhatsApp Business API.",
            "image": "https://anantya.ai/assets/img/home/Home%20page%20Graphics.webp",
            "author": {
              "@type": "Organization",
              "name": "Anantya.ai",
              "url": "https://anantya.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Anantya.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://anantya.ai/assets/img/logo.webp"
              }
            },
            "datePublished": "2024-03-21"
          }
        `}
      </script>
      <script type="application/ld+json">
        {`
          {
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
                "name": "Blog",
                "item": "https://anantya.ai/blog"
              }
            ]
          }
        `}
      </script>
    </Helmet>
      <section className="blog ">
        <div className="container py-4 mt-5">
          <div
            className="content wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
           
              <h1 className="fs-3">Blog</h1>
              <p>Recent Updates</p>
           
            <div className="blog-content">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="main-post wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="img img-cover">
                      <Link to="/blog/gitex-2023-highlights-anantya-ai-ai-powered-messaging-evolution">
                        <img src={gitexBlogImg} alt="GITEX 2023 Highlights" />
                      </Link>
                    </div>
                    <div className="info pt-30 pt-5">
                      <div className="date-author">
                        <span className="date">Nov 21, 2023</span>
                        <span className="color-999 mx-3"> | </span>
                        <span className="author color-999">
                          By <span className="color-000">Admin</span>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog/gitex-2023-highlights-anantya-ai-ai-powered-messaging-evolution">
                          GITEX 2023 Highlights: Anantya.ai Leads the AI-Powered
                          Messaging Evolution
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="side-posts">
                    <div
                      className="item wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="img img-cover">
                        <Link to="/blog/whatsapp-business-app-vs-whatsapp-business-api">
                          <img
                            src={whatsappBroadcastingImg}
                            alt="WhatsApp Broadcasting"
                          />
                        </Link>
                      </div>
                      <div className="info">
                        <div className="date-author">
                          <span className="date">Nov 21, 2023</span>
                          <span className="color-999 mx-3"> | </span>
                          <span className="author color-999">
                            By <span className="color-000">Admin</span>
                          </span>
                        </div>
                        <h4 className="title">
                          <Link to="/blog/whatsapp-business-app-vs-whatsapp-business-api">
                            WhatsApp Business App vs WhatsApp Business API
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div
                      className="item wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="img img-cover">
                        <Link to="/blog/whatsapp-marketing-strategies-to-drive-sales">
                          <img
                            src={marketingStrategyImg}
                            alt="Marketing Strategy"
                          />
                        </Link>
                      </div>
                      <div className="info">
                        <div className="date-author">
                          <span className="date">Nov 21, 2023</span>
                          <span className="color-999 mx-3"> | </span>
                          <span className="author color-999">
                            By <span className="color-000">Admin</span>
                          </span>
                        </div>
                        <h4 className="title">
                          <Link to="/blog/whatsapp-marketing-strategies-to-drive-sales">
                            5 Winning WhatsApp Marketing Strategies to Drive 3X
                            More Sales
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div
                      className="item wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="img img-cover">
                        <Link to="/blog/reshaping-customer-engagement-on-whatsapp">
                          <img src={chatbotReportsImg} alt="Chatbot Reports" />
                        </Link>
                      </div>
                      <div className="info">
                        <div className="date-author">
                          <span className="date">Nov 21, 2023</span>
                          <span className="color-999 mx-3"> | </span>
                          <span className="author color-999">
                            By <span className="color-000 fw-bold">Admin</span>
                          </span>
                        </div>
                        <h4 className="title">
                          <Link to="/blog/reshaping-customer-engagement-on-whatsapp">
                            From Vision to Reality: How Anantya.ai is Reshaping
                            Customer Engagement on WhatsApp
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-cards">
        <div className="tabs">
          <ul className="tab-links justify-content-center">
            <li
              className={selectedCategory === "all" ? "active" : ""}
              onClick={() => setSelectedCategory("all")}
            >
              All Blogs
            </li>
            <li
              className={
                selectedCategory === "Marketing Strategies" ? "active" : ""
              }
              onClick={() => setSelectedCategory("Marketing Strategies")}
            >
              Marketing Strategies
            </li>
            <li
              className={
                selectedCategory === "Use Cases & Features" ? "active" : ""
              }
              onClick={() => setSelectedCategory("Use Cases & Features")}
            >
              Use Cases & Features
            </li>
            <li
              className={selectedCategory === "Industries" ? "active" : ""}
              onClick={() => setSelectedCategory("Industries")}
            >
              Industries
            </li>
            <li
              className={
                selectedCategory === "WhatsApp News Updates" ? "active" : ""
              }
              onClick={() => setSelectedCategory("WhatsApp News Updates")}
            >
              WhatsApp News Updates
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="content">
            <div className="row row-cols-1 row-cols-md-3 g-4 py-5 px-md-0 px-3 blog-content">
              {filteredCards.map((card, index) => (
                <div className="col" key={index}>
                  <div
                    className="blog_card p-4  mb-4 wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                  >
                    <img src={card.imgSrc} className="img-fluid" alt="" />

                    <h5>
                      <a href={card.link}>{card.title}</a>
                    </h5>
                    <div className="info">
                      <div className="text">{card.description}</div>
                      <a href={card.link} className="custom-color-class">
  Read More
  <i className="fas fa-long-arrow-right ms-2 colorfa_1 my-auto mt-2"></i>
</a>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
      <WhatsAppWidget />
    </>
  );
};

export default Blog;
