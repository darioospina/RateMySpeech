import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


//Import Dummy Data
import UserData from '../Dummy Data/UserData';

// Import button and form from bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginComp() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the user exists in the array
    const user = UserData.find((user) => user.email == email);
    if (!user) {
      alert("User not found");
      return;
    }

    // Check if the password is correct
    if (user.password !== password) {
      alert("Incorrect password");
      return;
    }

    // Login successful
    Navigate("/Dashboard");
  }

  return (
    <Form id='loginComp' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginComp;