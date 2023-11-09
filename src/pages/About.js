import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const founder = {
  name: 'Founder Name',
  role: 'Founder & President',
  imageUrl: './components/images/founder.jpg', 
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
};

const members = [
  {
    id: 1,
    name: 'Member 1',
    role: 'Role 1',
    imageUrl: './components/images/member1.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 2,
    name: 'Member 2',
    role: 'Role 2',
    imageUrl: './components/images/member2.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 3,
    name: 'Member 3',
    role: 'Role 3',
    imageUrl: '../components/images/member3.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 4,
    name: 'Member 4',
    role: 'Role 4',
    imageUrl: '../components/images/member4.jpg', 
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  // more members 
];

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h2>{founder.name}</h2>
          <p>{founder.role}</p>
          <img src={founder.imageUrl} className="img-fluid" alt={founder.name} />
        </div>
        <div className="col-md-8">
          <h2>About Our NGO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Our Team</h2>
          <div className="row">
            {members.map(member => (
              <div className="col-md-3 mb-4" key={member.id}>
                <div className="card">
                  <img src={member.imageUrl} className="card-img-top" alt={member.name} />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
