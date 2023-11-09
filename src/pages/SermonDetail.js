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
  }, [id]);

  if (!sermon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{sermon.title}</h2>
      <p>Sermon ID: {id}</p>
      <p>{sermon.content}</p>
    </div>
  );
}

export default SermonDetail;
