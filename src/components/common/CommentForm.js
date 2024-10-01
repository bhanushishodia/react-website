import React, { useState } from 'react';
import './CommentForm.css'; // Import the external CSS

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here or call an API
    console.log('Form data:', formData);
  };

  return (
    <div className="form_box">
      <h5>
        <strong>Leave a Reply</strong>
      </h5>
      <p className="pb-0 mb-0">
        Your email address will not be published. Required fields are marked *
      </p>

      <form action="https://formspree.io/f/xjvqbzny" method="POST" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Your Email id*"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <label htmlFor="comment" className="form-label"></label>
        <textarea
          className="form-control"
          id="comment"
          rows="3"
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>

        <div className="mt-3 text-center">
          <input type="submit" className=" btn login_button w-50" value="Post Comment" />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
