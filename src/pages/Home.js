// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Search from '../components/Search';
import Carousel from '../components/Carousel';

import image from '../components/images/image1.jpg';
import image2 from '../components/images/image2.jpg';
import DonationForm from '../components/DonationForm';
import Donate from '../components/Donate';

const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn}>
      <div className="p-2 text-center">
        {/* Search Bar */}
        <Search/>

        {/* Carousel */}
        <Carousel/>

        {/* About Us */}
        <div className="row mb-4 mt-4">
          <div className="col-md-12">
            <h2>About Us</h2>
            <p>Philadelphia Tree of Life Ministries is a non-profit organization committed to making a positive impact on the lives of those in need. Founded in 2005, the organization operates with the belief that everyone deserves access to basic necessities for a dignified life.</p>
            <p>Ministries of Compassion, Needy and Poor Assistance, Clean Water Initiatives, Facility Development etc</p>
            <p>Achievements</p>

            <li> Provided clean water to over 50,000 individuals in remote villages.</li>
            <li> Supported 10,000 families with food and essential supplies during times of crisis.</li>
            <li> Established three community centers, serving as hubs for education, healthcare, and vocational training.</li>
          </div>
        </div>
        {/* Videos */}
        <div className="row mb-4 mt-4">
  <div className="col-md-12">
    <h2>Videos</h2>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/CUD8tI0tpVo" title="YouTube Video" allowFullScreen></iframe>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/nghOPMC6cmk" title="YouTube Video" allowFullScreen></iframe>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/5ewplUXwTxc" title="YouTube Video" allowFullScreen></iframe>
        </div>
      </div>
      <div>
        <Link to={`/ministries`} className="btn btn-primary">More videos</Link>
        </div>
    </div>
  </div>
 
        </div>


        {/* Events */}
        <div className="row mt-5 mb-4">
          <div className="col-md-12">
            <h2>Events</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={image} className="card-img-top" alt="Event 1" />
                  <div className="card-body">
                    <h5 className="card-title">Event Title 1</h5>
                    <p className="card-text">Some information about Event 1.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={image2} className="card-img-top" alt="Event 2" />
                  <div className="card-body">
                    <h5 className="card-title">Event Title 2</h5>
                    <p className="card-text">Some information about Event 2.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={image} className="card-img-top" alt="Event 3" />
                  <div className="card-body">
                    <h5 className="card-title">Event Title 3</h5>
                    <p className="card-text">Some information about Event 3.</p>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/events`} className="btn btn-primary">
                   More Events
            </Link>
          </div>
        </div>

        <Donate/>


      </div>
    </animated.div>
  );
}

export default Home;
