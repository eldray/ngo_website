import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  let { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex'>
      <div>
      <img src={event.image} className="img-fluid" 
      alt={event.title} />
      </div>
      <h2>{event.title}</h2>
      <p>Event ID: {id}</p>
      <p>Date: {event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetails;
