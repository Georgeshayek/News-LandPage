import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container1">
        <div className="footer-grid">
          <div className="footer-widget">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              {/* Add more links here */}
            </ul>
          </div>
          <div className="footer-widget">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms</a></li>
              {/* Add more links here */}
            </ul>
          </div>
          <div className="footer-widget">
            <h3>Subscribe</h3>
            <p>Don’t miss to subscribe!</p>
            <div className="subscribe-form">
              <input type="text" placeholder="Email Address" />
              <button><i className="fab fa-telegram-plane">Subscribe</i></button>
            </div>
          </div>
          <div className="footer-widget">
            <h3>Follow Us</h3>
            <ul className="footer-social-icons">
              <li><SocialIcon url="https://twitter.com/y" /></li>
              <li><SocialIcon url="https://facebook.com/y" /></li>
              <li><SocialIcon url="https://Linkedin.com/" /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
