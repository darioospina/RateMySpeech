import '../Styles/details.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Details() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState('');

  
  return (
    <div className='edit-details'>
    <div className="container">
      <h1>Enter your details:</h1>
      <form className="form" >
        <label>
          Name:
          <input className="input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input className="input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <Link to="/questions" className="btn verify-btn btn-warning">Verify</Link>

      </form>
      {message && <p className={`message ${isVerified ? 'success' : 'error'}`}>{message}</p>}
    </div>
    </div>
  );
}