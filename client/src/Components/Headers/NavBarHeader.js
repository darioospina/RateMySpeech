import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

//Import StyleSheet and Logo
import '../../Styles/PatStyles.css'
import Logo from '../../Images/logo.png'

//Import Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

//Import Icons
import { CgProfile } from 'react-icons/cg'
import { RiDashboardLine } from 'react-icons/ri'
import { MdLogout } from 'react-icons/md'

// Using Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../Actions/sessionActions.js';

export const NavBarHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [questionnaireId, setQuestionnaireId] = useState(null)
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    const getPath = location.pathname

  
    useEffect(() => {
        console.log("email" in localStorage)
        console.log(location.pathname !== '/Questionnaire')
        console.log(!getPath.split('/').includes('questionnaire'))
        setQuestionnaireId(getPath.split('/')[getPath.split('/').length - 1])
        if("email" in localStorage && location.pathname !== '/Questionnaire' && location.pathname !== '/ThankYou' && !getPath.split('/').includes('questionnaire')) {
            setShowHeader(true);
        }
        else {
            setShowHeader(false);
        }
    }, [location.pathname]);

    if (!showHeader) return null;

    return (
        <div className='divHeader'>
            <Navbar expand="sm">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} className="header2-logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Link className='NavBarLink' to={"/Dashboard"}>Dashboard <RiDashboardLine /> </Link>
                            <Link className='NavBarLink' to={"/profiledetails"}>My Profile <CgProfile /> </Link>
                            <Link className='NavBarLink' to={"/"} onClick={handleLogout}> Log-Out <MdLogout /></Link>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </div>
    )
}