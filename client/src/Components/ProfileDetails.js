import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export const ProfileDetails = () => {

const UserData = {
  name: "Bob Smith",
  email: "bobS@gmail.com",
  password: "1234",
  role: "admin",
  phone: "111-111-1111",
  avescore: "2.5",
  src: "https://reactjs.org/logo-og.png"
}

  return (
    <div>
      <Container id='profileInfo'>
        <Row>
          <Col><img id='profileImage' src={UserData.src} alt="Profile Image" /></Col>
        </Row>
        <Row>
          <Col className="title">Name:</Col>
          <Col className='data'>{UserData.name}</Col>
        </Row>
        <Row>
          <Col className="title">Email:</Col>
          <Col className='data'>{UserData.email}</Col>
        </Row>
        <Row>
          <Col className="title">Role:</Col>
          <Col className='data'>{UserData.role}</Col>
        </Row>
        <Row>
          <Col className="title">Phone-Number:</Col>
          <Col className='data'>{UserData.phone}</Col>
        </Row>
        <Row>
          <Col className="title">Average Speaker Score:</Col>
          <Col className='data'>{UserData.avescore}</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
          <Link to="/profileedit"><Button>Edit Your Info</Button></Link>
          
          
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};