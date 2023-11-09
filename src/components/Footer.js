// Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Menu</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/ministries" className="text-white text-decoration-none">Ministries</a></li>
              <li><a href="/events" className="text-white text-decoration-none">Events</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Social Media</h4>
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a href="#" className="text-white text-decoration-none">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" className="text-white text-decoration-none">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" className="text-white text-decoration-none">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              {/* Add more social media icons as needed */}
            </ul>
          </div>
        </div>
          <div className="col-md-4 mb-4 ">
    <h5>Follow Us</h5>
    <div className="social-icons">
      <a href="#" className="text-white fa-2x m-2">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className="text-white fa-2x m-2">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="text-white fa-2x m-2">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="text-white fa-2x">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
    </div>
          </div>

          <div className="col-md-4 mb-4">
            <h4>CONTACT US</h4>
            <ul className="list-unstyled">
              <li>Hotlines :
                +233 593 830 400 | +233 556 490 029</li>
              <li>Address: P.O.Box 1934 Adum-Kumasi</li>
              <li>Email: info@hospital.com</li>
            </ul>
          </div>

        <hr className="my-4" />
        <p>&copy; 2023 NGO Name</p>
      </div>
    </footer>
  );
}

export default Footer;
