// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../Styles/ProfileDetails.css';
// import { Link } from 'react-router-dom';
// // import dummy1 from './src/images/dummy1.jpeg';

// export const ProfileDetails = () => {
//   const profile = {
//     name: 'abc',
//     age: 30,
//     location: 'San Francisco',
//     occupation: 'Software Engineer',
//     socialMedia: 'abc@gmail.com',
//     picture: '../Images/dummy1.jpeg'
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col>
//           <div className="profile-container">
//             <div className="profile-card">
//               <div className="profile-picture-container">
//                 <img src="../Images/dummy1.jpeg" alt={profile.name} className="profile-picture" />
//                 <Link to="/profileedit" target="_blank">
//                   <button className="edit-button">Edit</button>
//                 </Link>
//               </div>
//             </div>
//             <div className="profile-info">
//               <h2>{profile.name}</h2>
//               <p>Age: {profile.age}</p>
//               <p>Location: {profile.location}</p>
//               <p>Occupation: {profile.occupation}</p>
//               <p>Social Media: {profile.socialMedia}</p>
//             </div>
//             <div className="about-me-section">
//               <h3>About Me: </h3>
//               <p>mollis dui, in so Duis afacilisis e Aenean gravida nun</p>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProfileDetails;
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../Styles/ProfileDetails.css';
// import { Link } from 'react-router-dom';

// const profiles = [
//   {
//     name: 'abc',
//     age: 30,
//     location: 'San Francisco',
//     occupation: 'Software Engineer',
//     socialMedia: 'abc@gmail.com',
//     picture: '../Images/dummy1.jpeg'
//   },
//   {
//     name: 'def',
//     age: 25,
//     location: 'New York',
//     occupation: 'Data Analyst',
//     socialMedia: 'def@gmail.com',
//     picture: '../Images/dummy2.jpeg'
//   },
//   // add more profiles here
// ];

// const Profile = ({ profile }) => (
//   <div className="profile-container">
//     <div className="profile-card">
//       <div className="profile-picture-container">
//         <img src={profile.picture} alt={profile.name} className="profile-picture" />
//         <Link to="/profileedit" target="_blank">
//           <button className="edit-button">Edit</button>
//         </Link>
//       </div>
//     </div>
//     <div className="profile-info">
//       <h2>{profile.name}</h2>
//       <p>Age: {profile.age}</p>
//       <p>Location: {profile.location}</p>
//       <p>Occupation: {profile.occupation}</p>
//       <p>Social Media: {profile.socialMedia}</p>
//     </div>
//     <div className="about-me-section">
//       <h3>About Me: </h3>
//       <p>mollis dui, in so Duis afacilisis e Aenean gravida nun</p>
//     </div>
//   </div>
// );

// export const ProfileDetails = () => {
//   return (
//     <Container fluid>
//       <Row>
//         {profiles.map((profile, index) => (
//           <Col key={index}>
//             <Profile profile={profile} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProfileDetails;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../Styles/ProfileDetails.css';
// import { Link } from 'react-router-dom';

// const profiles = [
//   {
//     name: 'abc',
//     age: 30,
//     location: 'San Francisco',
//     occupation: 'Software Engineer',
//     socialMedia: 'abc@gmail.com',
//     picture: '../Images/dummy1.jpeg'
//   },
//   {
//     name: 'def',
//     age: 25,
//     location: 'New York',
//     occupation: 'Data Analyst',
//     socialMedia: 'def@gmail.com',
//     picture: '../Images/dummy2.jpeg'
//   },
//   // add more profiles here
// ];

// const Profile = ({ profile }) => (
//   <div className="profile-container">
//     <div className="profile-card">
//       <div className="profile-picture-container">
//         <img src={profile.picture} alt={profile.name} className="profile-picture" />
//       </div>
//       <div className="profile-info">
//         <h2>{profile.name}</h2>
//         <p>Age: {profile.age}</p>
//         <p>Location: {profile.location}</p>
//         <p>Occupation: {profile.occupation}</p>
//         <p>Social Media: {profile.socialMedia}</p>
//       </div>
//       <div className="about-me-section">
//         <h3>About Me: </h3>
//         <p>mollis dui, in so Duis afacilisis e Aenean gravida nun</p>
//       </div>
//       <div className="edit-button-container">
//         <Link to="/profileedit" target="_blank">
//           <button className="edit-button">Edit</button>
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// export const ProfileDetails = () => {
//   return (
//     <Container fluid>
//       <Row>
//         {profiles.map((profile, index) => (
//           <Col key={index}>
//             <Profile profile={profile} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProfileDetails;


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Styles/ProfileDetails.css';
import { Link } from 'react-router-dom';
import dummy1 from '../Images/dummy1.jpeg';
import dummy2 from '../Images/dummy2.jpeg'
import dummy3 from '../Images/dummy3.png'

const profiles = [
  {
    name: 'peter',
    age: 30,
    location: 'San Francisco',
    occupation: 'Software Engineer',
    socialMedia: 'abc@gmail.com',
    picture: dummy1
  },
  {
    name: 'martha ',
    age: 25,
    location: 'New York',
    occupation: 'Data Analyst',
    socialMedia: 'def@gmail.com',
    picture: dummy2


    
  },
  {
    name: 'john doe',
    age: 25,
    location: 'New York',
    occupation: 'Data science',
    socialMedia: 'def@gmail.com',
    picture: dummy3
  }
  // add more profiles here
];

const Profile = ({ profile }) => (
  <Col xs={12} md={6} lg={4}>
    <div className="profile-container">
      <div className="profile-picture-container">
        <img src={profile.picture} alt={profile.name} className="profile-picture" />
      </div>
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>Age: {profile.age}</p>
        <p>Location: {profile.location}</p>
        <p>Occupation: {profile.occupation}</p>
        <p>Social Media: {profile.socialMedia}</p>
        <div className="edit-button-container">
        <Link to="/profileedit" target="_blank">
          <Button className="edit-button">Edit</Button>
        </Link>
      </div>
      </div>
    
    </div>
    
  </Col>
   
);

export const ProfileDetails = () => {
  return (
    <Container fluid>
      <Row>
        {profiles.map((profile, index) => (
          <Profile key={index} profile={profile} />
        ))}
      </Row>
    </Container>
  );
};

export default ProfileDetails;
