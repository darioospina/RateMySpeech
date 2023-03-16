import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Import button and form from bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Import Axios
import Axios from 'axios'

export const ProfileEdit = () => {

  const Navigate = useNavigate();

  const [role, setRole] = useState("speaker")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_API_URL}/usersRoutes/createUser`, {
      name: name,
      email: email,
      password: password,
      phone: phone,
      role: role
    }).then((res) => {
      console.log("New Speaker Created")
      Navigate("/Dashboard")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <Form id='loginComp'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Full Name" onChange={(event) => setName(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Phone" onChange={(event) => setPhone(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="warning" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
