import React, { useState } from "react";
import "./Contact.css"; // Make sure to create this CSS file
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar /> {/* Navbar is outside the main container now */}
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-description">
        Have questions or feedback? We're here to help! Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Your Message"
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      {submitted && <p className="success-message">Your message has been sent!</p>}
    </div>
    </>
  );
};

export default Contact;
