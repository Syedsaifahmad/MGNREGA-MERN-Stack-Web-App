import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Left: App Info --- */}
        <div className="footer-section about">
          <h2>MGNREGA Tracker</h2>
          <p>
            A web platform to visualize and track district-wise progress
            under the MGNREGA program in India. Stay informed with real-time
            development insights.
          </p>
        </div>

        {/* --- Center: Contact Info --- */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <ul>
            <li>
              📍 <strong>Address:</strong> Patna, Bihar, India
            </li>
            <li>
              📞 <strong>Phone:</strong> +91 1234567890
            </li>
            <li>
              ✉️ <strong>Email:</strong> saif@example.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MGNREGA Tracker | Designed by Saif 💻</p>
      </div>
    </footer>
  );
};

export default Footer;
