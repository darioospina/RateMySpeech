// import React, { useState } from 'react'
// import '../Styles/ProfileEdit.css'
// const initialProfile = {
//     name: 'abc',
//     age: 30,
//     location: 'San Francisco',
//     occupation: 'Software Engineer',
//     socialMedia: 'abc@gmail.com',

//   name: 'efg',
//   age: 34,
//   location: 'new york',
//   occupation: 'Social worker',
//   socialMedia: 'efg@gmail.com',


//   name: 'qw',
//   age: 34,
//   location: 'ohio',
//   occupation: 'teacher',
//   socialMedia: 'qw@gmail.com',

//   name: 'asd',
//         age: 28,
//         location: 'calgary',
//         occupation: 'social worker',
//         socialMedia: 'asd@gmail.com',


// };

// export const ProfileEdit = () => {
//   const [profile, setProfile] = useState(initialProfile);

//   const handleUpdate = () => {
//     setProfile({
//       name: document.getElementById("input-name").value,
//       age: document.getElementById("input-age").value,
//       location: document.getElementById("input-location").value,
//       occupation: document.getElementById("input-occupation").value
//     });
//   };

//   return (
//     <div>
//       <p>Profile Edit</p>
//       <p>
//         Name: <input id="input-name" type="text" />
//         <button id="update-button" onClick={handleUpdate}>
//           Update
//         </button>
//       </p>
//       <p>
//         Age: <input id="input-age" type="text" />
//         <button id="update-button" onClick={handleUpdate}>
//           Update
//         </button>
//       </p>
//       <p>
//         Location: <input id="input-location" type="text" />
//         <button id="update-button" onClick={handleUpdate}>
//           Update
//         </button>
//       </p>
//       <p>
//         Occupation: <input id="input-occupation" type="text" />
//         <button id="update-button" onClick={handleUpdate}>
//           Update
//         </button>
//       </p>
//       <p>
//         Name: {profile.name}
//       </p>
//       <p>
//         Age: {profile.age}
//       </p>
//       <p>
//         Location: {profile.location}
//       </p>
//       <p>
//         Occupation: {profile.occupation}
//       </p>
//     </div>
//   );
// };


import React, { useState } from 'react'
import '../Styles/ProfileEdit.css'

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
