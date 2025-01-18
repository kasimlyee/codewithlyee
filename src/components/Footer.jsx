import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About CodeWithLyee</h5>
            <p>
              Learn coding the modern way with engaging tutorials and hands-on
              projects. Build your skills and portfolio while coding with Lyee.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://github.com/kasimlyee"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/ssekindi-kasim-061456224"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://tiktok.com/@kasimlyee3?t=ZP-8smSIXIRPO3&r=1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5>Subscribe to Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="btn btn-gradient" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} CodeWithLyee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
