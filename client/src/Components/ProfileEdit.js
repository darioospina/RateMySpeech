import React, { useState } from 'react'

const initialProfile = {
    name: 'abc',
    age: 30,
    location: 'San Francisco',
    occupation: 'Software Engineer',
    socialMedia: 'abc@gmail.com',

  name: 'efg',
  age: 34,
  location: 'new york',
  occupation: 'Social worker',
  socialMedia: 'efg@gmail.com',


  name: 'qw',
  age: 34,
  location: 'ohio',
  occupation: 'teacher',
  socialMedia: 'qw@gmail.com',

  name: 'asd',
        age: 28,
        location: 'calgary',
        occupation: 'social worker',
        socialMedia: 'asd@gmail.com',


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
    <div>
      <p>Profile Edit</p>
      <p>
        Name: <input id="input-name" type="text" />
        <button id="update-button" onClick={handleUpdate}>
          Update
        </button>
      </p>
      <p>
        Age: <input id="input-age" type="text" />
        <button id="update-button" onClick={handleUpdate}>
          Update
        </button>
      </p>
      <p>
        Location: <input id="input-location" type="text" />
        <button id="update-button" onClick={handleUpdate}>
          Update
        </button>
      </p>
      <p>
        Occupation: <input id="input-occupation" type="text" />
        <button id="update-button" onClick={handleUpdate}>
          Update
        </button>
      </p>
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
  );
};
