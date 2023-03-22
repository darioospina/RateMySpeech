import React, {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


export const Profile = () => {

    //Get data on current user
    const user_Name = localStorage.getItem('name')
    const user_Email = localStorage.getItem('email')
    const user_Role = localStorage.getItem("role")
    const user_Phone = localStorage.getItem('phone')
    return (
        <div style={{ background: 'rgb(255, 255, 255, 0.9)', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.2)', padding: '20px', width: '80%', margin: '20px auto' }}>
        <Row className="justify-content-center">
          <Col sm={12} md={6}>
            <Card.Text>
              <strong>Username:</strong> {user_Name}<br />
              <strong>Email:</strong> {user_Email}<br />
              <strong>Role:</strong> {user_Role}<br />
            </Card.Text>
          </Col>
          <Col sm={12} md={6}>
            <Card.Text>
              <strong>Phone:</strong> {user_Phone}<br />
              <strong>Member since:</strong> {user_Phone}<br />
            </Card.Text>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{textAlign: 'center', margin: '10px'}}>
            <Link to="/profileedit"><Button variant="warning">Edit Profile</Button></Link>
        </Row>
      </div>
    )
}