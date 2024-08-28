import React from "react";
import "./SalesHub.css"; // Import your CSS file for styles

const SalesHub = () => {
  return (
    <div className="sales-hub">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-12 sidebar">
            <h3 className="font-weight-bold">Sales Hub</h3>
            <ul className="list-unstyled">
              <li><a href="#section1">Document 1</a></li>
              <li><a href="#section2">Document 2</a></li>
              <li><a href="#section3">Document 3</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="col-lg-9 col-md-12 content">
            <div id="section1" className="content-section">
              <h4>Document 1</h4>
              <p>Content for Document 1 goes here...</p>
            </div>
            <div id="section2" className="content-section">
              <h4>Document 2</h4>
              <p>Content for Document 2 goes here...</p>
            </div>
            <div id="section3" className="content-section">
              <h4>Document 3</h4>
              <p>Content for Document 3 goes here...</p>
            </div>
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};  

export default SalesHub;
