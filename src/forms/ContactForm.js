import React, { useState } from 'react';
import axios from 'axios';
import './form.css'; // Make sure this path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    url: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://anantyaai.odoo.com/web/dataset/call_kw', // Replace with your Odoo URL
        {
          jsonrpc: "2.0",
          method: "call",
          params: {
            model: 'crm.lead',
            method: 'create',
            args: [
              {
                name: formData.name,
                email_from: formData.email,
                phone: formData.phone,
                description: formData.message,
                website: formData.url
              }
            ]
          },
          id: Math.floor(Math.random() * 100000) // Random ID for request
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY` // Replace with your API key or session info
          }
        }
      );

      console.log('Form data submitted successfully:', response.data);
      setStatusMessage('Form submitted successfully!');
      
      // Optionally, clear the form or display a success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        url: ''
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
      setStatusMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <form id="contactForm" className="form" onSubmit={handleSubmit}>
      <div className="px-5">
        <h3 className="text-center text-black">Fill The Form Below</h3>
        <p className="text-center text-danger fs-12px mb-30">The field is required mark as *</p>

        <div className="form-group mb-20">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-20">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-20">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-20">
          <input
            type="text"
            name="message"
            className="form-control"
            placeholder="Name of Organisation"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            name="url"
            className="form-control"
            placeholder="Website URL"
            value={formData.url}
            onChange={handleChange}
            pattern="^(https?:\/\/)?(www\.)?.+\..+$"
            title="Please enter a valid URL starting with 'http://' or 'https://', optionally with 'www.'"
          />
        </div>
        <div className="text-center mt-3">
          <input
            type="submit"
            value="Send Your Request"
            className="btn bg-green text-light fs-12px w-50"
          />
        </div>
        {statusMessage && <p className="text-center mt-3">{statusMessage}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
