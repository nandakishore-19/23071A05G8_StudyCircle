import React, { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setMessage({...message, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact message:', message);
    // Message sending logic would go here
    alert('Message sent successfully!');
    // Reset form
    setMessage({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <p>mahesh@studycircle.com</p>
          </div>
          <div className="contact-method">
            <h3>Phone</h3>
            <p>999999999</p>
          </div>
          <div className="contact-method">
            <h3>Address</h3>
            <p>VNRVJEIT, Hyderabad, 500001</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="form">
        <h2>Send us a message</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={message.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={message.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" value={message.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={message.message} onChange={handleChange} required rows="5" />
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
