// src/forms/AffiliateForm.js
import React from 'react';
import './form.css'; // Ensure this file exists
const AffiliateForm = () => {
  return (
    <form action="https://formspree.io/f/mdorezev" method="POST">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name*</label>
        <input 
          type="text" 
          name="Name" 
          className="form-control bg-light" 
          id="name" 
          placeholder="Name" 
          required 
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Email address *</label>
          <input 
            type="email" 
            name="email" 
            className="form-control bg-light" 
            id="email" 
            placeholder="Your Email id" 
            required 
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="phone" className="form-label">Phone number *</label>
          <input 
            type="text" 
            name="phone" 
            className="form-control bg-light" 
            id="phone" 
            placeholder="Phone Number" 
            required 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="company" className="form-label">Company name *</label>
          <input 
            type="text" 
            name="company" 
            className="form-control bg-light" 
            id="company" 
            placeholder="Name of Organisation" 
            required 
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="url" className="form-label">Website URL *</label>
          <input 
            type="url" 
            name="url" 
            className="form-control bg-light" 
            id="url" 
            placeholder="Website URL" 
            required 
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="form-label">Country of operation *</label>
        <input 
          type="text" 
          name="country" 
          className="form-control bg-light" 
          id="country" 
          placeholder="Country of Operation" 
          required 
        />
      </div>

      <div className="my-4 text-center">
        <input 
          type="submit" 
          className="px-5 py-2 login_button" 
          value="Submit" 
        />
      </div>
    </form>
  );
};

export default AffiliateForm;
