// Home.js

import React from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Search from '../components/Search';
import Carousel from '../components/Carousel';

const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn}>
      <div className="container mt-5">
        {/* Search Bar */}
        <Search/>

        {/* Carousel */}
        <Carousel/>



        {/* Videos */}
        <div className="row mb-4">
          <div className="col-md-12">
            <h2>Videos</h2>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1" title="YouTube Video" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="row mb-4">
          <div className="col-md-12">
            <h2>Events</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="event1.jpg" className="card-img-top" alt="Event 1" />
                  <div className="card-body">
                    <h5 className="card-title">Event Title 1</h5>
                    <p className="card-text">Some information about Event 1.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="event2.jpg" className="card-img-top" alt="Event 2" />
                  <div className="card-body">
                    <h5 className="card-title">Event Title 2</h5>
                    <p className="card-text">Some information about Event 2.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="event3.jpg" className="card-img-top" alt="Event 3" />
                  <div className="card-body">
                    <h5 className="card-title">Event Title 3</h5>
                    <p className="card-text">Some information about Event 3.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <h2>Contact Us</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        {/* About Us */}
        <div className="row mb-4">
          <div className="col-md-12">
            <h2>About Us</h2>
            <p>About us content goes here.</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Home;
