import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import SermonDetail from './pages/SermonDetail';
import Contact from './components/Contact';
import DonationForm from './components/DonationForm';

import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donationform" element={<DonationForm />} />
        <Route path="/sermons/:id" element={<SermonDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
