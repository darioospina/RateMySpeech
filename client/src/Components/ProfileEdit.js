import React, { useState } from 'react'
import '../Styles/ProfileEdit.css'
import dummy1 from '../Images/dummy1.jpeg'

const initialProfile = {
  name: 'abc',
  age: 30,
  location: 'San Francisco',
  occupation: 'Software Engineer',
  socialMedia: 'abc@gmail.com',
};

export const ProfileEdit = () => {
  const [profile, setProfile] = useState(initialProfile);

  const handleUpdate = () => {
    setProfile({
      name: document.getElementById("input-name").value,
      age: document.getElementById("input-age").value,
      location: document.getElementById("input-location").value,
      occupation: document.getElementById("input-occupation").value
    });
  };

  return (
    <div className="profile-edit-container">
      <p className="section-header">Profile Edit</p>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="input-name">Name:</label>
          <input id="input-name" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="input-age">Age:</label>
          <input id="input-age" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="input-location">Location:</label>
          <input id="input-location" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="input-occupation">Occupation:</label>
          <input id="input-occupation" type="text" />
        </div>
        <button id="update-button" onClick={handleUpdate}>Update</button>
      </div>
      <div className="profile-info-container">
        <p>
          Name: {profile.name}
        </p>
        <p>
          Age: {profile.age}
        </p>
        <p>
          Location: {profile.location}
        </p>
        <p>
          Occupation: {profile.occupation}
        </p>
      </div>
      </div>
  );
};
