// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Footer.css'; // You can create a CSS file for styling the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2023 Your Website Name. All rights reserved.</p>
            <p>Contact: contact@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            {/* Add your social media icons or links here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
