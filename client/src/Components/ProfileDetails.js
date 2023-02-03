import React from 'react'
import '../Styles/ProfileDetails.css'

export const ProfileDetails = () => {
  const profiles = [
    {
      name: 'abc',
      age: 30,
      location: 'San Francisco',
      occupation: 'Software Engineer',
      socialMedia: 'abc@gmail.com',
      picture: 'C:/Users/15874/Desktop/capstone/RateMySpeech/client/src/Images/dummy1.jpg'
    },
    {
        name: 'efg',
        age: 34,
        location: 'new york',
        occupation: 'Social worker',
        socialMedia: 'efg@gmail.com',
        picture: 'C:/Users/15874/Desktop/capstone/RateMySpeech/client/src/Images/dummy2.jpg'
    },
    {
        name: 'qw',
        age: 34,
        location: 'ohio',
        occupation: 'teacher',
        socialMedia: 'qw@gmail.com',
        picture: 'C:/Users/15874/Desktop/capstone/RateMySpeech/client/src/Images/dummy3.jpg'

    },
    {
        name: 'asd',
        age: 28,
        location: 'calgary',
        occupation: 'social worker',
        socialMedia: 'asd@gmail.com',
        picture: 'C:/Users/15874/Desktop/capstone/RateMySpeech/client/src/Images/dummy4.jpg'
    }
  ];

  return (
    <div  className="profile-container">
      {profiles.map(profile => (
        <div key={profile.name}className="profile-card">
            <img src={profile.picture} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>Age: {profile.age}</p>
          <p>Location: {profile.location}</p>
          <p>Occupation: {profile.occupation}</p>
         <p>socialMedia: {profile.socialMedia}</p>
          <p>picture:{profile.picture}</p>
          
          {/* <ul>
            {profile.socialMedia.map(socialMedia => (
              <li key={socialMedia}>{socialMedia}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
}