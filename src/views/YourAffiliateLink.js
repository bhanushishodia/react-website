import React from 'react';
import './YourAffiliateLink.css';
function AffiliateProgram() {
  const copyTextToClipboard = () => {
    const copyText = document.getElementById('Affiliate_input');
    copyText.select();
    document.execCommand('copy');
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12 pe-md-5 text-lg-start text-center">
            <h2 className="pt-4">Welcome to Anantya.ai <br />
              <span> Affiliate Program </span>
            </h2>
            <p className="pt-2">
              Join our affiliate program and earn a 20% recurring commission for every subscription
              referred through your unique link. Upon signing up, you'll receive access to your Unique
              referral link and a dedicated Affiliate Manager.
            </p>
            <h6 className="partner_subheading text-md-start text-center pt-20 pb-20">
              (Enjoy a 60-day cookie period)
            </h6>
            <div className="text-black  d-sm-none d-md-block d-none d-lg-block"
              style={{ borderRadius: '25px', border: '1px solid #ccc', backgroundColor: '#e1fafe52' }}>
              <h4 className="text-center ">Here is Your Unique Referral Link:</h4>
              <p className="px-md-5 px-2 text-center">
                Share your unique referral link with excitement, spreading the word far and wide.
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input id="Affiliate_input" type="text" value="" className="form-control w-75 mx-5" />
                <button onClick={copyTextToClipboard} className="login_button">Copy link</button>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-12  pt-4 px-4 pe-0">
            <div className="form_affiliate pl-md-5 py-4 col-12 px-md-5 px-4">
              <h4 className="text-center">Become our Affiliate. <br />Sign up here!</h4>
              <form id="Affiliate-form" action="" href="#Affiliate_input" method="POST" onSubmit={submitForm}>
                <label htmlFor="name"></label>
                <input type="text" name="Name" className="form-control" id="name" placeholder="Full Name" required />

                <label htmlFor="email"></label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Email Address*" required />

                <label htmlFor="phone"></label>
                <input type="tel" name="phone" className="form-control" id="phone" placeholder="WhatsApp Number*" required />

                <label htmlFor="workExpertise"></label>
                <select name="workExpertise" className="form-control" id="workExpertise" required
                  style={{ paddingRight: '20px', background: 'linear-gradient(90deg, white 95%, #ccc 95%)', border: '1px solid #ccc' }}>
                  <option value="" disabled selected>Select Your Work Expertise ▼</option>
                  <option value="Bloggers">Bloggers</option>
                  <option value="Influencer">Influencer</option>
                  <option value="Web Studio">Web Studio</option>
                  <option value="Marketing Agency">Marketing Agency</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Industry expert">Industry expert</option>
                </select>

                <label htmlFor="url"></label>
                <input type="url" name="url" className="form-control" id="url" placeholder="LinkedIn Profile URL"
                  pattern="^(https?:\/\/)?(www\.)?.+\..+$"
                  title="Please enter a valid URL starting with 'http://' or 'https://', optionally with 'www.'" required />
                <div className="mt-3 mx-auto text-center">
                  <input type="submit" className="px-5 py-2 login_button" href="#Affiliate_input" value="Submit" />
                </div>
              </form>
            </div>

            <div className="text-black my-4 mx-md-0 mx-0 py-5 p-md-4 p-4 d-lg-none d-sm-block d-md-none d-block"
              style={{ borderRadius: '25px', border: '1px solid #ccc', backgroundColor: '#e1fafe52' }}>
              <h4 className="text-center pb-3">Here is Your Unique Referral Link:</h4>
              <p className="px-md-5 px-2 text-center">
                Share your unique referral link with excitement, spreading the word far and wide.
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input id="Affiliate_input" type="text" value="" className="form-control w-100" />
                <button onClick={copyTextToClipboard} className="ml-4"
                  style={{ color: '#ee5639', padding: '7px 10px', fontWeight: 600, lineHeight: '20px', borderRadius: '7px', borderColor: '#ee5639' }}>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliate Program Today */}
      <div className="container pb-5 px-md-5 px-4">
        <div className="center" style={{ textAlign: 'left' }}>
          <div className="MsoNormal" data-custom-class="title" style={{ lineHeight: 1.5 }}>
            <h2>Anantya.ai Affiliate Program - Terms and Conditions</h2>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1.5 }}><br /></div>
          <div className="MsoNormal" data-custom-class="subtitle" style={{ lineHeight: 1.5 }}>
            <strong className="question">Last updated</strong>
            <strong className="question">January 12, 2024</strong>
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>1. Eligibility:</span></strong>
            <p className="pt-2">
              - To participate, you must be at least 18 years old and have a valid, active account with Anantya.ai.
            </p>
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>2. Enrollment:</span></strong>
            <p className="pt-2">
              - Joining the affiliate program requires completion of the application process on our website.
            </p>
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>3. Commission Structure:</span></strong>
            <p className="pt-2">
              - Affiliates earn a 50% commission on the first sale generated through their unique affiliate link.
            </p>
            <p className="pt-2">
              - Receive a recurring 20% commission for the lifetime of every successful referral.
            </p>
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>4. Payment:</span></strong>
            <p className="pt-2">
              - Payments are processed monthly, provided the affiliate has reached a minimum threshold as specified by Anantya.ai.
            </p>
            <p className="pt-2">
              - Commissions are paid via the chosen payment method.
            </p>
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>5. Promotional Activities:</span></strong>
            <p className="pt-2">
              - Affiliates are encouraged to promote Anantya.ai through ethical and legal means.
            </p>
            <p className="pt-2">
              - Prohibited activities include spamming, false advertising, and any actions that may harm the reputation of Anantya.ai.
            </p>
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>6. Creative Content:</span></strong>
            <p className="pt-2">
            - Affiliates are free to use promotional materials provided by Anantya.ai or create
            their own content. However, all content must comply with our brand guidelines.
            </p>
           
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>7. Tracking and Cookies:</span></strong>
            <p className="pt-2">
            - Affiliate links are tracked using cookies that have a 60-day duration.
            Commissions will only be credited if a sale occurs within this time frame.
            </p>
           
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>8. Termination:</span></strong>
            <p className="pt-2">
            - Anantya.ai reserves the right to terminate an affiliate's participation in the
                program for any violation of these terms, unethical behavior, or any other reason deemed
                appropriate by Anantya.ai
            </p>
           
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>9. Changes to Terms:</span></strong>
            <p className="pt-2">
            - Anantya.ai may modify the terms and conditions of the affiliate program at any
                time. Affiliates will be notified of any changes.
            </p>
           
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>10. Confidentiality:</span></strong>
            <p className="pt-2">
            - Affiliates shall not disclose any confidential information obtained during their
            participation in the program.
            </p>
           
          </div>
          <div className="pt-3" style={{ lineHeight: 1.5 }}>
            <strong><span style={{ fontSize: '19px' }}>11. Governing Law:</span></strong>
            <p className="pt-2">
            - These terms and conditions are governed by the laws of [Jurisdiction], and any
                disputes will be resolved in accordance with these laws.
            </p>
           
          </div>
          <p>By joining the Anantya.ai Affiliate Program, you agree to these terms and conditions. Failure to
            comply may result in the termination of your participation and forfeiture of commissions.</p>
        </div>
      </div>
    </section>
  );
}

export default AffiliateProgram;
