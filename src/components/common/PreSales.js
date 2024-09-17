import React, { useEffect, useState } from "react";
import "./PreSales.css";
import image1 from "../../assets/images/sales-hub/engage-with-confidence.webp";
import image2 from "../../assets/images/sales-hub/Hassle-free-client-onboarding.webp";
import image3 from "../../assets/images/sales-hub/Add a subheading.webp";
import image4 from "../../assets/images/sales-hub/master-negotiations-with-ease.webp";
import image5 from "../../assets/images/sales-hub/confirmation-let's-make-it-official.webp";

const PreSales = () => {
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
      heading: "Engage with Confidence:",
      headingContent: "Engage",
      text: [
        "Discover effective email templates and calling scripts to kickstart conversations with potential clients. Make a strong first impression effortlessly. Start connecting today!",
      ],
      imageSrc: image1,
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
      heading: "Experience the Power Anantya.ai: Watch Our Demo Video!",
      headingContent: "Demo Video",
      text: [
        "Discover the key features and benefits of our product firsthand through our demo video & how our solution can revolutionize any business with its user-friendly interface and robust capabilities.",
      ],
      imageSrc: image2,
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
      heading: "Discover Use Cases",
      headingContent: "Use Cases",
      text: [
        "Welcome to our Use Case Discussion section. Here, explore how our product benefits different industries and departments.",
      ],
      imageSrc: image3,
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
      heading: "Master Negotiations with Ease",
      headingContent: "Negotiations",
      text: [
        "Guidelines for negotiating deals, including obtaining approvals from Regional Head and Product Head. Negotiation primarily occurs via email.",
      ],
      imageSrc: image4,
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
      heading: "Confirmation: Let's Make it Official",
      headingContent: "Confirmation",
      text: [
        "Congratulations on guiding your client through the initial stages of our product journey! Now, it's time to seal the deal and move forward towards success together. But before we proceed, let's ensure we're all on the same page; get confirmation by mail.",
      ],
      imageSrc: image5,
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
                  <img
                    className="solution__item__img"
                    src={section.imageSrc}
                    alt={section.heading}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-6 col-sm-12 my-auto text-lg-start text-center position-relative section-text">
                  <p className={section.pClassName}>{section.headingContent}</p>
                  <h3 className={section.h3ClassName}>{section.heading}</h3>
                  <p className="mt-30">{section.text[0]}</p>
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
                  <img
                    className="solution__item__img"
                    src={section.imageSrc}
                    alt={section.heading}
                    style={{ width: "100%", height: "auto" }}
                  />
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

export default PreSales;
