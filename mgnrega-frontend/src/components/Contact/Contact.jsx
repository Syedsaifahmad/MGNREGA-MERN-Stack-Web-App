import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or suggestions? We’d love to hear from you!
        </p>
      </header>

      <div className="contact-container">
        <div className="contact-info">
          <h2>📍 Get in Touch</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@mgnregatracker.in">
              support@mgnregatracker.in
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91 1234567890
          </p>
          <p>
            <strong>Address:</strong> MGNREGA Data Hub, New Delhi, India
          </p>
          <p>
            <strong>Working Hours:</strong> Mon – Fri, 10:00 AM – 6:00 PM
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>📨 Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {submitted && (
            <p className="success-msg">Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
