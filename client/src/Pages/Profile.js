import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const Profile = () => {
    //Get data on current user
    const user_Name = localStorage.getItem('name')
    const user_Email = localStorage.getItem('email')
    const user_Role = localStorage.getItem("role")
    const user_Phone = localStorage.getItem('phone')
    return (
        <div className='divContainer'>
        <h1 style={{textAlign:"center", padding:"15px"}}>Your Profile</h1>
            <Container id='profileInfo'>
            <Row>
            <Col><img id='profileImage' alt="Profile Image" /></Col> {/*ADD IMAGE*/}
            </Row>
            <Row>
            <Col className="title">Name:</Col>
            <Col className='data'>{user_Name}</Col>
            </Row>
            <Row>
            <Col className="title">Email:</Col>
            <Col className='data'>{user_Email}</Col>
            </Row>
            <Row>
            <Col className="title">Role:</Col>
            <Col className='data'>{user_Role}</Col>
            </Row>
            <Row>
            <Col className="title">Phone-Number:</Col>
            <Col className='data'>{user_Phone}</Col>
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
    )
}