import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Get in Touch</h1>
        <p>Have suggestions or feedback? I'd love to hear from you!</p>
        
        <div className="info-item">
          <span>📧</span>
          <p>samrisamrawit30@gmail.com</p>
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
              <input 
                type="text" 
                name="name" 
                placeholder="Your name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Your email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                placeholder="Tell us anything..." 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
