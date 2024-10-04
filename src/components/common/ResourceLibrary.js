import React from "react";
import { getImage } from '../../utils/getImage';  // Correct path to utility

import "./ResourceLibrary.css"; // Import the new CSS file

const ResourceLibrary = () => {
  // Fetching images dynamically using getImage function
const productDeck = getImage('icons/product-deck.png');
const metaDeck = getImage('icons/meta-deck.png');
const metaPolicy = getImage('icons/meta-policy.png');
const followUpEmails = getImage('icons/follow-up-emails.png');
const introductoryMail = getImage('icons/introductory-mail.png');
const coldMailContent = getImage('icons/cold-mail-content.png');
const introductoryMai = getImage('icons/introductory-mail.png');

const bankingUsecase = getImage('icons/banking-usecase.png');
const educationUsecase = getImage('icons/education-usecase.png');
const foodBeverage = getImage('icons/food-&-beverage.png');
const healthcareUsecase = getImage('icons/healthcare-usecase.png');
const logisticUsecase = getImage('icons/logistic-usecase.png');
const mediaUsecase = getImage('icons/media-usecase.png');
const politicalUsecase = getImage('icons/political-usecase.png');
const realEstateUsecase = getImage('icons/real-estate-usecase.png');
const retailUsecase = getImage('icons/retail-usecase.png');
const travelHospital = getImage('icons/travel-and-hospit.png');

  const usecases = [
    {
      img: bankingUsecase,
      title: "Banking usecase",
      link: "https://drive.google.com/file/d/1LrNBIDK5X92Fjaq8uIOHOR1p3sq52EF8/view?usp=drive_link",
    },
    {
      img: educationUsecase,
      title: "Education usecase",
      link: "https://drive.google.com/file/d/1R7GL1qTohzI8_rIR30-TYd9lgrTCEIBI/view?usp=drive_link",
    },
    {
      img: foodBeverage,
      title: "Food & Beverage",
      link: "https://drive.google.com/file/d/1Fl_UpPmFdkowqf1iklassOXODbdPK53b/view?usp=drive_link",
    },
    {
      img: healthcareUsecase,
      title: "Healthcare usecase",
      link: "https://drive.google.com/file/d/1N4T_UT6l9jCOocrhmIu-92_MB-dVi6wB/view?usp=drive_link",
    },
    {
      img: logisticUsecase,
      title: "Logistic usecase",
      link: "https://drive.google.com/file/d/1xgpcRj5cTZ0Z1Zi1o5x_UCg0NVcNI8ZM/view?usp=drive_link",
    },
    {
      img: mediaUsecase,
      title: "Media usecase",
      link: "https://drive.google.com/file/d/1nXHxdR_Oazd8yK_Hs9E2e3svB-Jyoh77/view?usp=drive_link",
    },
    {
      img: politicalUsecase,
      title: "Political usecase",
      link: "https://drive.google.com/file/d/1rhYbGCesem-OVd4kI9TUYOhL5mUroxot/view?usp=drive_link",
    },
    {
      img: realEstateUsecase,
      title: "Real estate usecase",
      link: "https://drive.google.com/file/d/1orzw9CUWYIFJQr3KldBdrvtpc8BRb_BA/view?usp=drive_link",
    },
    {
      img: retailUsecase,
      title: "Retail usecase",
      link: "https://drive.google.com/file/d/1ksQrmUx7CFOdFemvKRfVHMUhcVyrR4OD/view?usp=drive_link",
    },
    {
      img: travelHospital,
      title: "Travel And Hospital",
      link: "https://drive.google.com/file/d/11uXvuMRinCeMWEhFfjGNspgJC80WtsNx/view?usp=drive_link",
    },
  ];
  return (
    <section
      className="resources style-7 mt-60 countdown-content"
      id="section13"
    >
      <h2 className="text-center">
        Explore our Comprehensive Resource Library
      </h2>

      <div className="container sales-hub">
        <div className="content chats">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="projects-tabs py-2 mt-3">
                <ul
                  className="nav nav-pills flex-row align-items-center justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item d-flex align-items-center"
                    role="presentation"
                  >
                    <button
                      className="nav-link active"
                      id="pills-proj1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-proj1"
                      type="button"
                      role="tab"
                      aria-controls="pills-proj1"
                      aria-selected="true"
                    >
                      Decks
                    </button>
                  </li>
                  <li
                    className="nav-item d-flex align-items-center"
                    role="presentation"
                  >
                    <button
                      className="nav-link"
                      id="pills-proj2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-proj2"
                      type="button"
                      role="tab"
                      aria-controls="pills-proj2"
                      aria-selected="false"
                    >
                      Agreements & Proposals
                    </button>
                  </li>
                  <li
                    className="nav-item d-flex align-items-center"
                    role="presentation"
                  >
                    <button
                      className="nav-link"
                      id="pills-proj3-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-proj3"
                      type="button"
                      role="tab"
                      aria-controls="pills-proj3"
                      aria-selected="false"
                    >
                      Email Contents
                    </button>
                  </li>
                  <li
                    className="nav-item d-flex align-items-center"
                    role="presentation"
                  >
                    <button
                      className="nav-link"
                      id="pills-proj4-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-proj4"
                      type="button"
                      role="tab"
                      aria-controls="pills-proj4"
                      aria-selected="false"
                    >
                      Forms
                    </button>
                  </li>
                  <li
                    className="nav-item d-flex align-items-center"
                    role="presentation"
                  >
                    <button
                      className="nav-link"
                      id="pills-proj5-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-proj5"
                      type="button"
                      role="tab"
                      aria-controls="pills-proj5"
                      aria-selected="false"
                    >
                      Use Cases
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 my-auto">
              <div className="tab-content mb-md-0 mb-5" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-proj1"
                  role="tabpanel"
                  aria-labelledby="pills-proj1-tab"
                >
                  <div className="industry-1">
                    <div className="row row-cols-1 row-cols-md-5 gx-4 gy-3 px-md-0 px-3 pt-4 justify-content-center">
                      <div className="col">
                        <div className="card">
                          <a
                            href="https://drive.google.com/file/d/1zQMDeIU-lIYLUDeabOmbE69Aex2U4EQj/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={productDeck}
                              className="img-fluid  mx-auto"
                              alt="Product Deck"
                            />
                            <h6 className="align-items-center pt-3 text-center">
                              Product Deck
                            </h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="https://drive.google.com/file/d/1hjBD9pbhoZc9X_NQPrFJE4mA9ix5li29/view"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={metaDeck}
                              className="img-fluid mx-auto"
                              alt="Knowledge Deck"
                            />
                            <h6 className="pt-3 text-center">Meta Deck</h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="https://drive.google.com/file/d/1vdSGYeHncIyaIVLWPbF42s5lttDe8pH6/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={metaPolicy}
                              className="img-fluid  mx-auto"
                              alt="Meta Policy"
                            />
                            <h6 className="pt-3 text-center">Meta Policy</h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="https://developers.anantya.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={productDeck}
                              className="img-fluid  mx-auto"
                              alt="API Doc"
                            />
                            <h6 className="pt-3 text-center">API Doc</h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="pdf/Anantya.ai - Feature Overview.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={followUpEmails}
                              className="img-fluid mx-auto"
                              alt="Feature Overview"
                            />
                            <h6 className="pt-3 text-center">
                              Feature Overview
                            </h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="pdf/Mastering Automation_ Your Comprehensive Guide (1).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={productDeck}
                              className="img-fluid  mx-auto"
                              alt="Automation Deck"
                            />
                            <h6 className="pt-3 text-center">
                              Automation Deck
                            </h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="https://docs.google.com/document/d/11A6ThWUasB06YikHkhVN69I3nvDqNU8Pk9JnGI0W44w/edit#heading=h.q76fzbk7i78f"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={metaPolicy}
                              className="img-fluid mx-auto"
                              alt="SMS Fallback"
                            />
                            <h6 className="pt-3 text-center">SMS Fallback</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* More tab panes */}
                <div
                  className="tab-pane fade"
                  id="pills-proj2"
                  role="tabpanel"
                  aria-labelledby="pills-proj2-tab"
                >
                  <div className="industry-2">
                    <div className="row row-cols-1 row-cols-md-5 gx-4 gy-3 px-md-0 px-3 pt-4 justify-content-center">
                      <div className="col">
                        <div className="card">
                          <a
                            href="https://drive.google.com/drive/folders/1fCcIehp0r0ror3Sg6ymAYtBO9559S680?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={introductoryMail}
                              className="img-fluid  mx-auto"
                              alt="Introductory Mail"
                            />
                            <h6 className="pt-3 text-center">Agreement</h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="pdf/Proposal-Anantya.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={coldMailContent}
                              className="img-fluid  mx-auto"
                              alt="Proposal-Anantya"
                            />
                            <h6 className="pt-3 text-center">Proposals</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-proj3"
                  role="tabpanel"
                  aria-labelledby="pills-proj3-tab"
                >
                  <div className="industry-3">
                    <div className="row row-cols-1 row-cols-md-5 gx-4 gy-3 px-md-0 px-3 pt-4 justify-content-center">
                      <div className="col">
                        <div className="card">
                          <a
                            href="https://anantya.ai/pdf/Anantya.ai%20-%20Intro%20Email.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={introductoryMai}
                              className="img-fluid  mx-auto"
                              alt="Introductory Mail"
                            />
                            <h6 className="pt-3 text-center">
                              Introductory Mail
                            </h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="https://drive.google.com/drive/folders/1n3Gt4rvOSGb0xFpXwbZuB9ZHwgr_IVMe?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={coldMailContent}
                              className="img-fluid  mx-auto"
                              alt="Cold Mail Content"
                            />
                            <h6 className="pt-3 text-center">
                              Cold Mail Content
                            </h6>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="https://drive.google.com/drive/folders/1F1QbcdHLClBnJ1zj67C47KxLX2idiFZw?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={followUpEmails}
                              className="img-fluid mx-auto"
                              alt="Follow Up Emails"
                            />
                            <h6 className="pt-3 text-center">
                              Follow Up Emails
                            </h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-proj4"
                  role="tabpanel"
                  aria-labelledby="pills-proj4-tab"
                >
                  <div className="industry-4">
                    <div className="row row-cols-1 row-cols-md-5 gx-4 gy-3 px-md-0 px-3 pt-4 justify-content-center">
                      <div className="col">
                        <div className="card">
                          <a
                            href="http://newclientacquisition.anantya.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={introductoryMail}
                              className="img-fluid mx-auto card-img-top"
                              alt="New Client Acquisition"
                            />
                            <div className="card-body">
                              <h6 className="pt-3 text-center break-text">
                                newclientacquisition.anantya.ai
                              </h6>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Repeat similar structure for other cards */}
                      <div className="col">
                        <div className="card">
                          <a
                            href="http://accountactivation.anantya.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={coldMailContent}
                              className="img-fluid mx-auto card-img-top"
                              alt="Account Activation"
                            />
                            <div className="card-body">
                              <h6 className="pt-3 text-center break-text">
                                accountactivation.anantya.ai
                              </h6>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card">
                          <a
                            href="http://projectscope.anantya.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={metaPolicy}
                              className="img-fluid mx-auto card-img-top"
                              alt="Project Scope"
                            />
                            <div className="card-body">
                              <h6 className="pt-3 text-center break-text">
                                projectscope.anantya.ai
                              </h6>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-proj5"
                  role="tabpanel"
                  aria-labelledby="pills-proj5-tab"
                >
                  <div className="industry-5">
                    <div className="row row-cols-1 row-cols-md-5 gx-4 gy-3 px-md-0 px-3 pt-4 justify-content-center">
                      {usecases.map((usecase, index) => (
                        <div className="col" key={index}>
                          <div className="card">
                            <a
                              href={usecase.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={usecase.img}
                                className="img-fluid  mx-auto"
                                alt={usecase.title}
                              />
                              <h6 className="pt-3 text-center">
                                {usecase.title}
                              </h6>
                            </a>
                          </div>
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
    </section>
  );
};

export default ResourceLibrary;
