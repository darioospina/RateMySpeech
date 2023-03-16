import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

// Import button and form from bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Using Redux
import { useDispatch } from 'react-redux';
import { login } from '../Actions/sessionActions.js';

export const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Added temporary just for testing
  const authenticateUser = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
    .then(action => {
      if(action && action.type == 'NAVIGATE_TO_DASHBOARD') {
        Navigate('/Dashboard')
      } 
      else if(action && action.type == 'USER_NOT_FOUND') {
        alert("User not found. Please try again.")
      }
    });
  }

  return (
    <div id='LoginComp-Body'>
    <Form id='loginComp' onSubmit={authenticateUser} style={{margin: '50px auto auto auto'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}
