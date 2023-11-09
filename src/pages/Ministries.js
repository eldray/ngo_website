import React from 'react';


const Ministries = () => {
  const videoList = [
    {
      id: 1,
      title: 'Salvation',
      videoUrl: 'https://www.youtube.com/embed/P9Xg7LnyDDk'
    },
    {
      id: 2,
      title: 'True Repentance',
      videoUrl: 'https://www.youtube.com/embed/CGRoZoNHijQ'
    },
    {
      id: 3,
      title: 'The Rapture',
      videoUrl: 'https://www.youtube.com/embed/B3V3p2pYf-E'
    },
    {
      id: 4,
      title: 'Christian Values',
      videoUrl: 'https://www.youtube.com/embed/d9tdq0FmYA8'
    },
    {
      id: 5,
      title: 'The Rapture',
      videoUrl: 'https://www.youtube.com/embed/pKfoljUDXec'
    },
    {
      id: 6,
      title: 'Christian Values',
      videoUrl: 'https://www.youtube.com/embed/okU8beGuV2c'
    },
  ];

  const blogSermons = [
    {
      id: 1,
      title: 'Christian Values ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
      id: 2,
      title: 'Kingdom Realities',
      content: 'Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.'
    },
    {
    id: 3,
    title: 'Christian Values ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
    id: 4,
    title: 'Kingdom Realities',
    content: 'Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.'
    },
    {
    id: 5,
    title: 'Christian Values ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
    id: 6,
    title: 'Kingdom Realities',
    content: 'Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.'
    }
  ];

  return (
    <div className="container mt-5">

      <div className="row text-center">
        <h2 className="mt-4 mb-4">Videos</h2>
        {videoList.map(video => (
          <div className="col-md-4 mb-4" key={video.id}>
            <iframe
              title={video.title}
              width="100%"
              height="220"
              src={video.videoUrl}
              allowFullScreen
            ></iframe>
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>

      <div className="row text-center">
        <h2 className="mt-4 mb-4">Sermons</h2>
        {blogSermons.map(sermon => (
          <div className="col-md-4 mb-4" key={sermon.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{sermon.title}</h5>
                <p className="card-text">{sermon.content}</p>
                <a href={`/sermons/${sermon.id}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read Sermon</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ministries;
