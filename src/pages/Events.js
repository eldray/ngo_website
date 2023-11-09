import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import image from '../components/images/image1.jpg';
import image2 from '../components/images/image2.jpg';

const eventsData = [
  {
    id: 1,
    title: 'Event 1',
    image:{image},
    date: 'October 15, 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 2,
    image:{image2},
    title: 'Event 2',
    date: 'November 5, 2023',
    description: 'Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.',
  },
  {
    id: 3,
    title: 'Event 1',
    date: '2023-11-10',
    image: {image2},
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
  },
  {
  id: 4,
  title: 'Event 1',
  image: {image},
  date: 'October 15, 2023',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
  id: 5,
  image:'./components/images/image1.jpg',
  title: 'Event 2',
  date: 'November 5, 2023',
  description: 'Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.',
  },
  {
    id: 6,
    title: 'Event 1',
    date: '2023-11-10',
    image:'./components/images/image1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
  }
];

const Events = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {eventsData.map(event => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.date}</p>
                <p className="card-text">{event.description}</p>
                <Link to={`/events/${event.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
