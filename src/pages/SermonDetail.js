import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SermonDetail = () => {
  let { id } = useParams();
  const [sermon, setSermon] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/sermons/${id}`)
      .then(response => response.json())
      .then(data => setSermon(data))
      .catch(error => console.error('Error:', error));
      console.log(id)
  }, [id]);

  if (!sermon) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 style={{ color: 'green', fontWeight: 'bold' }}>{sermon.title}</h2>
      <p style={{ color: 'blue', fontWeight: 'bold' }}>Sermon ID: {id}</p>
      <p style={{ color: 'black', fontWeight: 'bold' }}>{sermon.content}</p>
    </>
  );
}

export default SermonDetail;
