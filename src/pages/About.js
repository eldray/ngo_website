import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import mem1 from '../components/images/member1.jpg';
import head from '../components/images/member3.webp';
import mem2 from '../components/images/member2.jpg';
import mem3 from '../components/images/member3.webp';
import mem4 from '../components/images/member4.jpg';
import mem5 from '../components/images/member3.webp';
import mem6 from '../components/images/member4.jpg';
import banner from '../components/images/banner.jpg';



const founder = {
  name: 'Founder Name',
  role: 'Founder & President',
  image: head, 
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
};

const members = [
  {
    id: 1,
    name: 'Member 1',
    role: 'Role 1',
    image: mem1,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 2,
    name: 'Member 2',
    role: 'Role 2',
    image: mem2,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 3,
    name: 'Member 3',
    role: 'Role 3',
    image: mem3,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 4,
    name: 'Member 4',
    role: 'Role 4',
    image: mem4, 
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 5,
    name: 'Member 5',
    role: 'Role 5',
    image: mem5,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 6,
    name: 'Member 6',
    role: 'Role 6',
    image: mem6, 
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  }
];

const About = () => {
  return (
    <div className="px-4">
      <img src={banner} height={200} width={1300} alt='Banner' className="py-3"/>
      <div className="row">
        <div className="col-md-4">
          <div className="mission-box p-3 text-center">
            <h2>OUR MISSION</h2>
            <p>"Empowering communities through ministries of compassion, providing essential resources, clean water, and sustainable facilities to uplift the lives of the underprivileged."</p>
          </div>
        </div>

         <div className="col-md-4">
            <div className="overview-box p-3 text-center">
              <h2>OVERVIEW</h2>
              <p> Philadelphia Tree of Life Ministries is a non-profit organization committed to making a positive impact on the lives of those in need. Founded in 2005, the organization operates with the belief that everyone deserves access to basic necessities for a dignified life.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="vision-box p-3 text-center">
      <h2>OUR VISION</h2>
      <p>To help the needy and vulnerable to live a life that is enjoyable and create meaningful environment for them to grow. </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
        <div className="p-2 footer-bg text-white">
            <h2 className="text-center">About Philadelphia Tree of Life Ministries</h2>
            <p>An NGO (Non-Governmental Organization) that focuses on ministries and helping the needy, poor, and providing water and facilities is likely to be dedicated to various forms of humanitarian and community development work.</p>
          
          <h5 >Ministries of Compassion</h5>
      <ol>
   - Conducting spiritual and emotional support programs for individuals and families facing challenges.
    - Organizing events, workshops, and counseling sessions to provide guidance and encouragement.
</ol>

<h5>Needy and Poor Assistance</h5>
- Distributing food, clothing, and essential supplies to low-income communities.
- Running vocational training programs to enhance employability and self-sufficiency.

<h5>Clean Water Initiatives</h5>
 - Implementing water purification and filtration systems in communities with limited access to clean drinking water.
- Educating locals on water conservation and hygiene practices.

<h5>Facility Development</h5>
 - Constructing and renovating community centers, schools, and healthcare facilities to improve access to essential services.
- Focusing on creating safe and inclusive spaces for all members of the community.

<h5>Achievements</h5>

- Provided clean water to over 50,000 individuals in remote villages.
- Supported 10,000 families with food and essential supplies during times of crisis.
- Established three community centers, serving as hubs for education, healthcare, and vocational training.

<h5>Partnerships</h5>
<p>Hopeful Hearts Foundation collaborates with various government agencies, international organizations, and local businesses to maximize the impact of its programs.</p>

<h5>How to Get Involved</h5>
- Volunteer: Join as a volunteer to actively participate in outreach programs and community events. 
- Donate: Contribute financially or donate goods to support the ongoing initiatives.
- Partner: Explore partnership opportunities for joint projects and initiatives.
        </div>
        </div>


        <div className="row mt-5">
  <h2 className="text-center">Our Team</h2>
  <div className="col-md-12 d-flex justify-content-between">
    <div className="col-md-4">
      <h2>{founder.name}</h2>
      <p>{founder.role}</p>
      <img src={founder.image} className="img-fluid" alt={founder.name} />
    </div>

    <div className="col-md-7 d-flex flex-wrap">
      {members.map(member => (
        <div className="col-md-4 mb-4" key={member.id}>
          <div className="card">
            <img src={member.image} className="card-img-top" alt={member.name} height={250} width={200}/>
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
