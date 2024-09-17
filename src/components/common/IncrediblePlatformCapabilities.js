import React, { useEffect, useState } from "react";
import "./IncrediblePlatformCapabilities.css";
import video1 from "../../assets/videos/broadcast-unlimited-promotional.mp4";
import video2 from "../../assets/videos/automate-notifications-via.mp4";
import video3 from "../../assets/videos/provide-live-chat-support-on-multiple-devices.mp4";
import video4 from "../../assets/videos/integrate-ai-chatbot-to-automate-support-&-sales.mp4";
import video5 from "../../assets/videos/supercharge-your-leads-with-click-to-whatsApp-ads.mp4";

const IncrediblePlatformCapabilities = () => {
  const [progress, setProgress] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const newProgress = (currentScroll / totalHeight) * 100;
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the progress on page load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = [
    {
      id: "section1",
      backgroundColor: "#fff",
      heading: "Broadcast Unlimited Promotional Messages Without Getting Blocked",
      headingContent: "Broadcast Editor",
      text: [
        "Increase sales by sending messages about discounts, festival promotions, product launches, and season-end sales.",
        "Boost your business with effective communication!",
      ],
      videoSrc: video1,
      link: "/whatsapp-broadcasting",
      pClassName: "scrollAnimationSection_1",
      h3ClassName: "section-heading_1",
      linkText: "Explore WhatsApp Broadcasting",
      linkColor: "#00bdff",
      circleClassName: "circle-1",
    },
    {
      id: "section2",
      backgroundColor: "#fff",
      heading: "Automate Notifications via Integration",
      headingContent: "INTEGRATION",
      text: [
        "Automate notifications for orders, deliveries, payments, abandoned cart reminders, and more on WhatsApp.",
        "Once Automated Notifications are activated, businesses can effortlessly send automated WhatsApp notifications for every order.",
      ],
      videoSrc: video2,
      link: "/integration",
      pClassName: "scrollAnimationSection_2",
      h3ClassName: "section-heading_2",
      linkText: "Explore integrations",
      linkColor: "#ecaf3d",
      circleClassName: "circle-2",
    },
    {
      id: "section3",
      backgroundColor: "#fff",
      heading: "Provide Live Chat Support on Multiple Devices",
      headingContent: "Live Chat",
      text: [
        "Use WhatsApp Business API to handle customer support, boost sales, and grow your business on WhatsApp.",
        "With the API, offer Live Chat on as many devices as you need, all with the same phone number.",
      ],
      videoSrc: video3,
      link: "/channels/whatsapp-business-api",
      pClassName: "scrollAnimationSection_3",
      h3ClassName: "section-heading_3",
      linkText: "Explore Live Chat",
      linkColor: "#f2ba95",
      circleClassName: "circle-3",
    },
    {
      id: "section4",
      backgroundColor: "#fff",
      heading: "Integrate AI Chatbot to Automate Support & Sales",
      headingContent: "AI Chatbot",
      text: [
        "This advanced Chatbot is designed to efficiently handle customer queries, drive sales, and collect valuable user information.",
        "With capabilities like a dedicated customer support agent, it ensures a seamless and human-like experience for your customers.",
      ],
      videoSrc: video4,
      link: "/automated-chatbot",
      pClassName: "scrollAnimationSection_4",
      h3ClassName: "section-heading_4",
      linkText: "Explore AI ChatBot",
      linkColor: "#54b9a6",
      circleClassName: "circle-4",
    },
    {
      id: "section5",
      backgroundColor: "#fff",
      heading: "Supercharge Your Leads with Click to WhatsApp Ads!",
      headingContent: "WhatsApp Ads",
      text: [
        "Seamlessly organize all your leads according to ad campaigns, and design chatbot flows tailored to ads or retarget your audience via broadcast messages.",
        "Launch impactful ads on Facebook and Instagram that directly connect users to WhatsApp. Achieve a 5X increase in lead generation and witness 2-3 times more conversions instantly!",
      ],
      videoSrc: video5,
      link: "/click-to-whatsapp-ads",
      pClassName: "scrollAnimationSection_5",
      h3ClassName: "section-heading_5",
      linkText: "Explore WhatsApp Ads",
      linkColor: "#ffb8bf",
      circleClassName: "circle-5",
    },
  ];

  return (
    <section>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="p-5 section"
          id={section.id}
          style={{
            backgroundColor: section.backgroundColor,
            "--offset": "20px",
            "--header-height": "90px",
            width: "100%",
            height: "calc(100vh - (var(--header-height) - var(--offset)))",
            position: "relative",
            paddingBottom: "var(--offset)",
            borderRadius: "var(--offset) var(--offset) 0 0",
          }}
        >
              <div className="row">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6 col-sm-12">
                  <video
                    className="solution__item__img"
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src={section.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col-md-6 col-sm-12 my-auto text-lg-start text-center position-relative section-text">
                  <p className={section.pClassName}>{section.headingContent}</p>
                  <h3 className={section.h3ClassName}>{section.heading}</h3>
                  <p className="mt-30">{section.text[0]}</p>
                  <p className="mt-30">{section.text[1]}</p>
                  <a
                    href={section.link}
                    className="mt-30 internalpage_link"
                    style={{ color: section.linkColor }}
                  >
                    {section.linkText}
                    <i className="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                  </a>
                  <div className="additional-element">
                    <div className={`circle ${section.circleClassName}`}>
                    {("0" + (index + 1)).slice(-2)}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 col-sm-12 my-auto text-lg-start text-center position-relative section-text">
                  <p className={section.pClassName}>{section.headingContent}</p>
                  <h3 className={section.h3ClassName}>{section.heading}</h3>
                  <p className="mt-30">{section.text[0]}</p>
                  <p className="mt-30">{section.text[1]}</p>
                  <a
                    href={section.link}
                    className="mt-30 internalpage_link"
                    style={{ color: section.linkColor }}
                  >
                    {section.linkText}
                    <i className="fas fa-long-arrow-right ms-2 colorfa_1 my-auto"></i>
                  </a>
                  <div className="additional-element">
                    <div className={`circle ${section.circleClassName}`}>
                    {("0" + (index + 1)).slice(-2)}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <video
                    className="solution__item__img"
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src={section.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </>
            )}
             </div>
        </div>
      
      ))}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </section>
  );
};

export default IncrediblePlatformCapabilities;
