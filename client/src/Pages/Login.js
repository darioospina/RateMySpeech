import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

//Import Dummy Data
import UserData from '../Dummy Data/UserData';

// Import components from bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

// Import Axios
import Axios from 'axios'

// Using Redux
import { useDispatch } from 'react-redux';
import { login } from '../Actions/sessionActions.js';

export const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);


  // Added temporary just for testing
  const authenticateUser = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
    .then(action => {
      if(action && action.type == 'NAVIGATE_TO_DASHBOARD') {
        Navigate('/Dashboard')
      } 
      else if(action && action.type == 'USER_NOT_FOUND') {
        setShow(true)
      }
    });
  }

  return (
    <div id='LoginComp-Body'>
    <Form id='loginComp' style={{margin: '50px auto auto auto'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="warning" type="submit" onClick={authenticateUser}>
        Submit
      </Button>
    </Form>
    {show && 
      <div>
      <ToastContainer position="middle-center" className="p-3">
        <Toast style={{margin: '10px auto'}} bg={'light'} onClose={() => setShow(false)} show={show} delay={5000} autohide>
        <Toast.Header>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>User Not Found. Please try again.</Toast.Body>
      </Toast>
      </ToastContainer>
      </div>
    }
    </div>
  );
}
