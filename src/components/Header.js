import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Header = () => {
  return (
    <header className="bg-light p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-between align-items-center">
            <a href="/">
            <img src={logo} height={80} width={80} alt='logo' className="logo"/>
            </a>
          </div>
          <div className="col-md-8 text-md-end d-flex justify-content-between">
            <nav>
              <ul className="list-inline mb-0 me-auto">
                <li className="list-inline-item me-3">
                  <Link to="/" className="text-decoration-none text-uppercase nav-link">Home</Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/about" className="text-decoration-none text-uppercase nav-link">About</Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/ministries" className="text-decoration-none text-uppercase nav-link">Ministries</Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/events" className="text-decoration-none text-uppercase nav-link">Events</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/contact" className="text-decoration-none text-uppercase nav-link">Contact</Link>
                </li>
              </ul>
            </nav>
            <Link to="/donationform" className="btn btn-success text-uppercase ms-3">Donate Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
