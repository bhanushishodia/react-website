import React, { useState } from 'react';
import './UseCasesSection.css'; // Optional: For additional styles if needed

// Import images
import promoCampaignsImg from '../../assets/images/promotional-campaigns.webp';
import upsellingImg from '../../assets/images/upselling-cross-selling.webp';
import newslettersImg from '../../assets/images/Whatspp-newsletters.webp';

const UseCasesSection = () => {
    const [activeTab, setActiveTab] = useState(1);
  
    const tabContent = [
      {
        number: 1,
        title: (
          <>
            Promotional <br /> Campaigns
          </>
        ), // Using React fragment to include a line break
        content: 'Engage your customer base by offering promotions, discount codes, and flash sales to boost sales conversions. Let\'s spice up your marketing strategy and reel in those conversions!',
        imgSrc: promoCampaignsImg
      },  
      {
        number: 2,
        title: (
          <>
           Upselling &
            <br /> Cross-selling
          </>
        ), // Using React fragment to include a line break

        content: 'Drive your customers to explore other products or services that are customised to their needs. Let\'s give them a little nudge in the right direction!',
        imgSrc: upsellingImg
      },
      {
        number: 3,
        title: (
          <>
           WhatsApp
          <br />  Newsletters
          </>
        ), // Using React fragment to include a line break
        content: 'Sustain customer engagement and inspire them to repeat purchases by providing regular updates. Let\'s keep them coming back for more!',
        imgSrc: newslettersImg
      }
    ];
  
    return (
      <section className="use-cases-section process style-12">
        <div className="container pb-5 my-5 text-center section-head style-5">
          <h2 className="fs-2 pb-10">Engage Timely to <span>Increase Client Retention</span></h2>
          <p className="px-5">
            Is there a more effective approach to conversion than conversational marketing? <br />
            Explore the various channels for interacting with social media followers, internet visitors, and in-store walk-ins.
          </p>
  
          <div className="row-fluid-wrapper row-depth-1 row-number-3 dnd-section">
            <div className="row-fluid">
              <div className="span12 widget-span widget-type-cell dnd-column">
                <div className="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
                  <div className="row-fluid">
                    <div className="span12 widget-span widget-type-custom_widget dnd-module">
                      <div className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
  
                        <div className="row no-gutters qf-use-cases">
                          <div className="use-cases__wrapper container">
                            <div className="use-cases__left use-cases__hero-background">
                              {tabContent.map(tab => (
                                <img
                                  key={tab.number}
                                  loading="lazy"
                                  data-background-color="#C4E5ED"
                                  className={tab.number === activeTab ? 'active' : ''}
                                  data-tab-number={tab.number}
                                  src={tab.imgSrc}
                                  alt={`img-${tab.number}`}
                                />
                              ))}
                            </div>
  
                            <div className="use-cases__right">
                              <div className="use-cases__nav-link">
                                {tabContent.map(tab => (
                                  <button
                                    key={tab.number}
                                    className={`use-cases__navs-tab ${tab.number === activeTab ? 'active' : ''}`}
                                    data-tab-number={tab.number}
                                    onClick={() => setActiveTab(tab.number)}
                                  >
                                    <h6>{tab.title}</h6>
                                  </button>
                                ))}
                              </div>
                              <div className="use-cases__nav-tab-wrapper">
                                {tabContent.map(tab => (
                                  <div
                                    key={tab.number}
                                    className={`use-cases__nav-tab-item ${tab.number === activeTab ? 'active' : ''}`}
                                    data-tab-number={tab.number}
                                  >
                                    <p className="body-std">{tab.content}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default UseCasesSection;
