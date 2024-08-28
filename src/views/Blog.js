import React, { useState } from "react";
import "./Blog.css"; // Ensure you have a corresponding CSS file for styling
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import WhatsAppWidget from "../components/common/WhatsAppWidget";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import whatsappBroadcastingImg from "../assets/images/blog/whatsapp-broadcasting.webp";
import marketingStrategyImg from "../assets/images/blog/Enhance-your-marketing-strategy-min.webp";
import chatbotReportsImg from "../assets/images/blog/chatbot-reports.webp";
import whatsappAuthImg from "../assets/images/blog/whatsapp-authertication.webp";
import empoweringSupportImg from "../assets/images/blog/Empowering-Customer-Support-min.webp";
import gitexBlogImg from "../assets/images/blog/gitexblog.jpeg";
import boostSalesImg from "../assets/images/blog/boost-sales-on-festive-season-with-ai-chatbots.jpeg";
import clickToWhatsAppAdsImg from "../assets/images/blog/click-to-whatsapp-ads.jpeg";
import whatsappApiGuideImg from "../assets/images/blog/whatsapp-business-api-your-ultimate-guide.jpg";
import whatsappBroadcastImg from "../assets/images/blog/whatsapp-broadcasting-your-ultimate-guide-whatsapp-broadcast-your-complete-business-booster-guide.webp";
import whatsappHealthcareImg from "../assets/images/blog/whatsapp-for-healthcare.webp";
import whatsappChatbotImg from "../assets/images/blog/whatsapp-chatbot-for-business.webp";
import whatsappBankingImg from "../assets/images/blog/whatsapp-business-api-in-banking-sector.webp";
import metaUpdateImg from "../assets/images/blog/meta-frequency-capping-update.webp";
import whatsappMarketingImg from "../assets/images/blog/whatsapp-marketing-direct-communication-with-customers.webp";
import whatsappPricingImg from "../assets/images/blog/whatsapp-business-api-conversation-pricing.webp";
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
    // Add other card data objects here
  ];

  const filteredCards =
    selectedCategory === "all"
      ? cardsData
      : cardsData.filter((card) => card.category === selectedCategory);
  return (
    <>
      <section className="blog ">
        <div className="container py-4">
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
                      <a href={card.link}>
                        <i className="far fa-long-arrow-right l-arrow me-2"></i>{" "}
                        Read More
                        <i className="far fa-long-arrow-right r-arrow ms-2"></i>
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
