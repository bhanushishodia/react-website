import React, { useState } from 'react';
import './OnboardingProcess.css'; // Importing the CSS file

// Importing images
import sealTheDeal from '../../assets/images/sales-hub/seal-the-deal-and-kickstart-success.webp';
import hassleFreeOnboarding from '../../assets/images/sales-hub/Hassle-free-client-onboarding.webp';
import addSubheading from '../../assets/images/sales-hub/Add a subheading.webp';
import onboardingMeeting from '../../assets/images/sales-hub/onboarding-meeting.webp';
import unlockSuccess from '../../assets/images/sales-hub/unlock-success-with-account.webp';
import readySetLaunch from '../../assets/images/sales-hub/tailored-account-training-and-setup.webp';
import ongoingSupport from '../../assets/images/sales-hub/Smooth-Sailing-ahead.webp';

const OnboardingProcess = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const sections = [
        {
            id: 'section6',
            number: '01',
            backgroundColor: '#76C6B7',
            heading: 'Seal the Deal and Kickstart Success!',
            text: "Congratulations on securing a commitment from your client! Now, let's swiftly move forward to transform that promise into reality.",
            imgSrc: sealTheDeal,
            imgAlt: 'seal-the-deal-and-kickstart-success',
        },
        {
            id: 'section7',
            number: '02',
            backgroundColor: '#F9E4BD',
            heading: 'Hassle-Free Client Onboarding',
            text: "After receiving payment or signing the agreement, send the completed forms to our Region Head, Product Head, Onboarding Team, & Accounts via email.",
            imgSrc: hassleFreeOnboarding,
            imgAlt: 'hassle-free-client-onboarding',
        },
        {
            id: 'section8',
            number: '03',
            backgroundColor: '#49D9FF',
            heading: 'Comprehensive Overview: Onboarding Process',
            text: "The onboarding team will kickstart the process after receiving the email and sales form, introducing the client to the process.",
            imgSrc: addSubheading,
            imgAlt: 'add-a-subheading',
        },
        {
            id: 'section9',
            number: '04',
            backgroundColor: '#74D8B3',
            heading: 'Onboarding Meeting',
            text: "Our onboarding team will schedule a meeting to understand the client's needs and provide transparent communication.",
            imgSrc: onboardingMeeting,
            imgAlt: 'onboarding-meeting',
        },
        {
            id: 'section10',
            number: '05',
            backgroundColor: '#FFBFC5',
            heading: 'Unlock Success with Account Credentials',
            text: "The credential email contains the required account details, marking the completion of the onboarding process.",
            imgSrc: unlockSuccess,
            imgAlt: 'unlock-success-with-account',
        },
        {
            id: 'section11',
            number: '06',
            backgroundColor: '#E0A9A8',
            heading: 'Ready, Set, Launch!',
            text: "The client can now confidently take the reins with all the provided tools and resources, paving the way for success.",
            imgSrc: readySetLaunch,
            imgAlt: 'ready-set-launch',
        },
        {
            id: 'section12',
            number: '07',
            backgroundColor: '#7BCFFF',
            heading: 'Ongoing Support',
            text: "Our relationship doesn’t end here – we’re offering ongoing support and guidance as the client grows and succeeds.",
            imgSrc: ongoingSupport,
            imgAlt: 'ongoing-support',
        },
    ];

    return (
        <section>
            {sections.map((section) => (
                <div
                    className="p-5 onboarding-section"
                    id={section.id}
                    style={{ backgroundColor: section.backgroundColor }} // Specific to each section
                    key={section.id}
                >
                    <div className="row">
                        <div className="col-md-6 col-sm-12 my-auto">
                            <h1>{section.number}</h1> {/* Section Number */}
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
