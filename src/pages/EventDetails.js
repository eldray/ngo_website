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
    <>
      <div className="flex text-center">
        <div className="mx-auto">
          <img src={event.image} className="img-fluid" alt={event.title} />
        </div>
        <div>
          <h2 style={{ color: 'green', fontWeight: 'bold' }}>{event.title}</h2>
          <p style={{ color: 'blue', fontWeight: 'bold' }}>Date: {event.date}</p>
          <p style={{ color: 'black', fontWeight: 'bold' }}>{event.description}</p>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
