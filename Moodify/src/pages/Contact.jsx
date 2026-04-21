import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Get in Touch</h1>
        <p>Have suggestions or feedback? I'd love to hear from you!</p>
        
        <div className="info-item">
          <span>📧</span>
          <p>support@moodify.com</p>
        </div>
        <div className="info-item">
          <span>📍</span>
          <p>Global Music HQ</p>
        </div>
      </div>

      <div className="contact-form-card">
        {submitted ? (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your message has been sent. We'll vibe back with you soon.</p>
            <button onClick={() => setSubmitted(false)}>Send another</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us anything..." rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
