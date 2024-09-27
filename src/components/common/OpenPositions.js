import React, { useState } from "react";
import "./OpenPositions.css"; // Add custom styles for this component

const OpenPositions = () => {
  const [selectedPosition, setSelectedPosition] = useState(1); // Default selected position
  const [showForm, setShowForm] = useState(true); // Form shows by default

  // List of open positions
  const positions = [
    { id: 1, title: "Frontend Developer" },
    { id: 2, title: "Backend Developer" },
    { id: 3, title: "UI/UX Designer" },
    { id: 4, title: "SEO Content Writer" },
    { id: 5, title: "Marketing Intern" },
  ];

  // Dummy job descriptions for each position
  const jobDescriptions = {
    1: `
      As a Frontend Developer at Anantya.ai, you will be responsible for developing and implementing 
      user interface components using React.js, HTML, CSS, and JavaScript. You will ensure that 
      our web applications are visually appealing, intuitive, and responsive. You'll collaborate 
      with backend developers and designers to deliver seamless user experiences.
      <ul>
        <li>3+ years of experience with frontend development</li>
        <li>Proficient in React.js, HTML, CSS, and JavaScript</li>
        <li>Experience with RESTful APIs and version control (Git)</li>
        <li>Ability to work in a dynamic, fast-paced environment</li>
      </ul>
    `,
    2: `
      As a Backend Developer, you will work on developing server-side logic, definition, and maintenance 
      of our central database, and ensuring high performance and responsiveness to requests from the frontend. 
      You will collaborate closely with the frontend developers to integrate their elements into the application.
      <ul>
        <li>Experience with Node.js, Python, or other backend languages</li>
        <li>Strong knowledge of database systems such as MongoDB or SQL</li>
        <li>Familiarity with RESTful APIs and web security practices</li>
        <li>Ability to solve complex performance problems and architectural challenges</li>
      </ul>
    `,
    3: `
      We are looking for a creative UI/UX Designer who understands the balance between design and functionality. 
      You will be responsible for designing elegant and user-friendly interfaces, collaborating with developers 
      to bring those designs to life, and ensuring an optimal user experience across all our products.
      <ul>
        <li>Strong portfolio showcasing UI/UX design skills</li>
        <li>Experience with design tools like Figma, Sketch, or Adobe XD</li>
        <li>Understanding of basic front-end languages: HTML5, CSS3, JavaScript</li>
        <li>Ability to solve user experience problems creatively and effectively</li>
      </ul>
    `,
    4: `
      As an SEO Content Writer, you will develop content strategies and create engaging content for our website 
      and social media channels. Your goal will be to improve our brand presence online and increase traffic 
      to our digital assets.
      <ul>
        <li>Strong writing skills and experience with SEO best practices</li>
        <li>Proven experience in content marketing and blog writing</li>
        <li>Knowledge of content management systems like WordPress</li>
        <li>Ability to research industry-related topics and write clear, concise content</li>
      </ul>
    `,
    5: `
      As a Marketing Intern, you will assist our marketing team in the development and implementation of its 
      marketing, business development, and public relations plans. You will gain valuable experience working 
      on campaigns, content creation, and data analysis.
      <ul>
        <li>Currently pursuing or recently graduated with a degree in Marketing, Business, or a related field</li>
        <li>Strong desire to learn and develop in the field of marketing</li>
        <li>Excellent communication and interpersonal skills</li>
        <li>Experience with social media platforms is a plus</li>
      </ul>
    `,
  };

  const handlePositionSelect = (id) => {
    setSelectedPosition(id);
  };

  return (
    <div className="open-positions">
      {/* Open Positions List */}
      <div className="container">
        <h2 className="text-center mb-20">Open Positions</h2>
        <ul className="positions-list">
          {positions.map((position) => (
            <li
              key={position.id}
              onClick={() => handlePositionSelect(position.id)}
              className={selectedPosition === position.id ? "active" : ""}
            >
              {position.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Job Description and Application Form */}
      <div className="container job-details">
        <h3 className="text-center">Job Description</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: jobDescriptions[selectedPosition],
          }}
          className="job-description"
        ></div>

        <h5 className="px-md-5 mx-md-4 px-4">
          Are you excited to work with our amazingly talented team ? Send your
          resume and portfolio link to
          <a href="mailto:HR-India@mobishastra.com">
            HR-India@mobishastra.com
          </a>{" "}
          or fill out the form below.
        </h5>

        {showForm && (
          <form className="job-application-form my-md-5 py-md-5 py-5 px-5">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Full Name *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group col-md-6">
                <label>Email *</label>
                <input type="email" className="form-control" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Phone Number *</label>
                <input type="tel" className="form-control" required />
              </div>
              <div className="form-group col-md-6">
                <label>Total Years of Experience</label>
                <input type="number" className="form-control" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>LinkedIn Profile URL</label>
                <input type="url" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>Attach Resume *</label>
                <input type="file" className="form-control" required />
              </div>
            </div>
            <div className="form-group">
              <label>Comments</label>
              <textarea className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OpenPositions;
