import React from 'react'

//Import StyleSheet and Logo
import '../../Styles/PatStyles.css'
import Logo from '../../Images/logo.png'

//Import Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Import Icons
import { CgProfile } from 'react-icons/cg'
import { RiDashboardLine } from 'react-icons/ri'

export const NavBarHeader = () => {
    return (
        <div className='divHeader'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/Dashboard">
                        <img src={Logo} className="header2-logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Dashboard">Dashboard <RiDashboardLine /> </Nav.Link>
                            <Nav.Link href="/profiledetails">My Profile <CgProfile /> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}