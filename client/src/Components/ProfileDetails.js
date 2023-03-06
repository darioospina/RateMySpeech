import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";


export const ProfileDetails = () => {
  const profile = {
    name: 'Simranjit Singh',
    age: 30,
    location: 'San Francisco',
    occupation: 'Software Engineer',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.',
    languages: ['English', 'Spanish', 'French'],
    picture: ''
  };

  return (
    <Form className="profile-container">
      <Form className="profile-card">
        <Form className="profile-picture-container">
          <Form className="profile-picture-wrapper">
            <img src={''} className="profilePicture" alt={profile.name}/>
            <Link to="/profileedit">
              <button className="edit-button">Edit</button>
            </Link>
          </Form>
        <Form className="profile-info">
          <h2>{profile.name}</h2>
          <p> <b>Age</b>: {profile.age}</p>
          <p><b>Location</b>: {profile.location}</p>
          <p><b>Occupation</b>: {profile.occupation}</p>
          <b>About Me:</b>
          <p>{profile.about}</p>
        </Form>
        </Form>

        <Form className="languages-section">
          <h5> Languages:</h5>
          <ul className="languages-list">
            {profile.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </Form>
      </Form>
    </Form>
  );
};