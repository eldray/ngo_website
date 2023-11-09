// Header.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="text-white mb-0">NGO</h1>
          </div>
          <div className="col-md-6 text-md-end">
            <nav>
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <Link to="/" className="text-white text-decoration-none">Home</Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/about" className="text-white text-decoration-none">About</Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/ministries" className="text-white text-decoration-none">Ministries</Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/events" className="text-white text-decoration-none">Events</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/donationform" className="text-white text-decoration-none">Donate</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
