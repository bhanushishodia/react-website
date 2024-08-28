import React, { useState } from 'react';


const OnboardingProcess = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <section>
            <div
                className="p-5"
                id="section6"
                style={{
                    backgroundColor: '#76C6B7',
                    '--offset': '20px',
                    '--header-height': '90px',
                    width: '100%',
                    height: 'calc(100vh - (var(--header-height) - var(--offset)))',
                    position: 'sticky',
                    top: 'var(--header-height)',
                    scrollSnapAlign: 'start',
                    paddingBottom: 'var(--offset)',
                    borderRadius: 'var(--offset) var(--offset) 0 0'
                }}
            >
                <div className="row">
                    <div className="col-md-6 col-sm-12 my-auto">
                        <h3>1. Seal the Deal and Kickstart Success!</h3>
                        <p className="mt-30">
                            Congratulations on securing a commitment from your client!
                            Now, let's swiftly move forward to transform that promise into reality. Here's what happens next:
                        </p>
                        <section className="pricing style-5">
                            <div className="container">
                                <div className="pricing-tabsHead text-center py-3">
                                    <div className="price-radios">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="monthly-input"
                                                value="option1"
                                                checked={selectedOption === 'option1'}
                                                onChange={() => handleOptionChange('option1')}
                                            />
                                            <label className="form-check-label" htmlFor="monthly-input">
                                                Sales Form
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="yearly-input"
                                                value="option2"
                                                checked={selectedOption === 'option2'}
                                                onChange={() => handleOptionChange('option2')}
                                            />
                                            <label className="form-check-label" htmlFor="yearly-input">
                                                Activation Form
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="custom-input"
                                                value="option3"
                                                checked={selectedOption === 'option3'}
                                                onChange={() => handleOptionChange('option3')}
                                            />
                                            <label className="form-check-label" htmlFor="custom-input">
                                                Agreement
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Content for Option 1 (By Industry) */}
                                {selectedOption === 'option1' && (
                                    <div id="option1-content" className="pricing-content pt-3">
                                        <b>Attention salesperson:</b> Please fill out this form with all
                                        the details discussed with the client, including information related
                                        to agreements, requirements, and any other pertinent details.
                                        <a href="http://newclientacquisition.anantya.ai/" target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-20 fw-bold">
                                            Sales Form
                                            <svg className="c-icon u-mt-0 b--u-ml-0.5" width="24" height="24"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                )}

                                {/* Content for Option 2 (By Functions) */}
                                {selectedOption === 'option2' && (
                                    <div id="option2-content" className="pricing-content justify-content-center pt-3">
                                        Share this link with the client so they can fill out the form with all the
                                        necessary details for the onboarding process. Let's make sure we have everything
                                        we need to get them started smoothly!
                                        <a href="http://accountactivation.anantya.ai/" target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-20 fw-bold">
                                            Activation Form Link
                                            <svg className="c-icon u-mt-0 b--u-ml-0.5" width="24" height="24"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                )}

                                {/* Content for Option 3 (Custom Form) */}
                                {selectedOption === 'option3' && (
                                    <div id="option3-content" className="pricing-content pt-3">
                                        <p>Please make any necessary edits to align with your client's specific
                                            requirements and the negotiations that have taken place in previous steps.
                                            Let's make sure this agreement is tailored to perfection!</p>

                                        <a href="https://drive.google.com/drive/folders/1fCcIehp0r0ror3Sg6ymAYtBO9559S680"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-20 fw-bold">
                                            Agreement Link
                                            <svg className="c-icon u-mt-0 b--u-ml-0.5" width="24" height="24"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="assets/img/sales/seal-the-deal-and-kickstart-success!.webp" className="img-fluid"
                            alt="seal-the-deal-and-kickstart-success" />
                    </div>
                </div>
            </div>

            {/* Sections 7 to 12 */}
            {[
                {
                    id: 'section7',
                    backgroundColor: '#F9E4BD',
                    heading: '2. Hassle-Free Client Onboarding',
                    text: 'After receiving payment or signing the agreement, send the completed forms to our Region Head, Product Head, Onboarding Team, & Accounts via email. They\'ll handle the rest, guiding you through each step smoothly.',
                    imgSrc: 'assets/img/sales/Hassle-free-client-onboarding.webp',
                    imgAlt: 'Hassle-free-client-onboarding'
                },
                {
                    id: 'section8',
                    backgroundColor: '#49D9FF',
                    heading: '3. Comprehensive Overview: Onboarding Process',
                    text: 'Once the onboarding team receives the email and sales form from the salesperson, they will kickstart the process. The initial onboarding process email will be sent to the client to introduce them to the process, followed by an onboarding meeting. Let\'s get this show on the road!',
                    imgSrc: 'assets/img/sales/Add a subheading.webp',
                    imgAlt: 'add-a-subheading'
                },
                {
                    id: 'section9',
                    backgroundColor: '#74D8B3',
                    heading: '4. Onboarding Meeting',
                    text: 'Welcome to the next chapter of our journey together! Our Onboarding team will schedule a meeting to understand the client\'s needs and provide transparent communication. Let\'s turn potential into performance. Once the onboarding process is finished, a confirmation email will be promptly sent to the client, letting them know that everything is good to go. This will be followed by the sharing of credentials.',
                    imgSrc: 'assets/img/sales/onboarding-meeting.webp',
                    imgAlt: 'onboarding-meeting'
                },
                {
                    id: 'section10',
                    backgroundColor: '#FFBFC5',
                    heading: '5. Unlock Success with Account Credentials',
                    text: 'Get ready to empower your clients for success! Our Onboarding Team\'s Credential Mail is more than just login details – it\'s the key to unlocking the full potential of our product. As soon as the onboarding is completed, your client will receive the credentials and details required to get started.',
                    imgSrc: 'assets/img/sales/Unlock-success-with-account-credentials.webp',
                    imgAlt: 'unlock-success-with-account-credentials'
                },
                {
                    id: 'section11',
                    backgroundColor: '#D5F6F6',
                    heading: '6. Ready, Set, Launch!',
                    text: 'It\'s time to take action and make things happen. Congratulations! The onboarding is complete, and your client is now ready to make the most of our product. Let\'s get started with your new venture!',
                    imgSrc: 'assets/img/sales/Ready-set-launch.webp',
                    imgAlt: 'ready-set-launch'
                },
                {
                    id: 'section12',
                    backgroundColor: '#F5D1E1',
                    heading: '7. Ongoing Support and Success',
                    text: 'Your relationship with your client doesn\'t end with onboarding. We\'re here to support and ensure ongoing success. Stay connected and keep delivering exceptional results!',
                    imgSrc: 'assets/img/sales/ongoing-support.webp',
                    imgAlt: 'ongoing-support'
                }
            ].map(section => (
                <div
                    key={section.id}
                    className="p-5"
                    id={section.id}
                    style={{
                        backgroundColor: section.backgroundColor,
                        '--offset': '20px',
                        '--header-height': '90px',
                        width: '100%',
                        height: 'calc(100vh - (var(--header-height) - var(--offset)))',
                        position: 'sticky',
                        top: 'var(--header-height)',
                        scrollSnapAlign: 'start',
                        paddingBottom: 'var(--offset)',
                        borderRadius: 'var(--offset) var(--offset) 0 0'
                    }}
                >
                    <div className="row">
                        <div className="col-md-6 col-sm-12 my-auto">
                            <h3>{section.heading}</h3>
                            <p className="mt-30">{section.text}</p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={section.imgSrc} className="img-fluid" alt={section.imgAlt} />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default OnboardingProcess;
