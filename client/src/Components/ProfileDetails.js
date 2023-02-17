import React from 'react'
import '../Styles/ProfileDetails.css'
import { Link } from 'react-router-dom'
//import dummy1 from './src/images/dummy1.jpeg'

export const ProfileDetails = () => {
  const profile = {
    name: 'abc',
    age: 30,
    location: 'San Francisco',
    occupation: 'Software Engineer',
    socialMedia: 'abc@gmail.com',
    picture: '../Images/dummy1.jpeg'
  };

  return (
    <div className="profile-container">
    <div className="profile-card">
      <div className="profile-picture-container">
        <img src='../Images/dummy1.jpeg' alt={profile.name} className="profile- picture" />
        <Link to="/profileedit">
    <button className="edit-button">Edit</button>
  </Link>
</div>
      </div>
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>Age: {profile.age}</p>
        <p>Location: {profile.location}</p>
        <p>Occupation: {profile.occupation}</p>
        <p>Social Media: {profile.socialMedia}</p>
      </div>
      <div className="about-me-section">
        <h3>About Me: </h3>
        <p>mollis dui, in so
         Duis afacilisis e 
         Aenean gravida nun</p>
      </div>
    </div>
   ) ;
  }

