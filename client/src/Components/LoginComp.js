import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

//Import Dummy Data
import UserData from '../Dummy Data/UserData';

// Import button and form from bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Import Axios
import Axios from 'axios'

function LoginComp() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Added temporary just for testing
  const authenticateUser = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_API_URL}/usersRoutes/authentication`, {
      email: email,
      password: password,
    }).then((res) => {
      if(res.data.length != 0) {
        console.log("User Authenticated")
        Navigate("/Dashboard")
      } else {
        alert("User does not exist")
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Form id='loginComp' onSubmit={authenticateUser}>
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
  );
}

export default LoginComp;