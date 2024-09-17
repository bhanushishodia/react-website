import React, { useState } from 'react';
import axios from 'axios';
import './form.css'; // Ensure this path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    url: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatusMessage('Please enter a valid email address.');
      return false;
    }

    if (formData.url && !/^(https?:\/\/)?(www\.)?.+\..+$/.test(formData.url)) {
      setStatusMessage('Please enter a valid URL.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'https://anantyaai.odoo.com/jsonrpc', // Ensure this URL is correct
        {
          jsonrpc: "2.0",
          method: "call",
          params: {
            service: 'object',
            model: 'crm.lead', // Ensure this model is correct
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
          id: Math.floor(Math.random() * 100000)
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 4557ac1f83484232913e11187cea3742` // Ensure this token is correct
          }
        }
      );

      if (response.data.result) {
        setStatusMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', url: '' });
      } else {
        setStatusMessage('Unexpected response format from Odoo.');
      }
      
    } catch (error) {
      if (error.response) {
        setStatusMessage(`Error: ${error.response.data.error ? error.response.data.error.message : 'An unexpected error occurred.'}`);
      } else if (error.request) {
        setStatusMessage('No response from server. Please check your network connection.');
      } else {
        setStatusMessage(`Error: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
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
            placeholder="Name *"
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
            placeholder="Name of Organisation *"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-20">
          <input
            type="url"
            name="url"
            className="form-control"
            placeholder="Website URL (optional)"
            value={formData.url}
            onChange={handleChange}
          />
        </div>
        <div className="text-center mt-3">
          <input
            type="submit"
            value={isSubmitting ? 'Submitting...' : 'Send Your Request'}
            className="btn bg-green text-light fs-12px w-50"
            disabled={isSubmitting}
          />
        </div>
        {statusMessage && <p className="text-center mt-3">{statusMessage}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
