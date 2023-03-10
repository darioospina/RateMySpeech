import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

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
import { MdLogout } from 'react-icons/md'

// Using Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../Actions/sessionActions.js';
import {HiBars3} from "react-icons/hi2";
import {RxCross2} from 'react-icons/rx';

export const NavBarHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [show, setShow] = useState(false);

    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())        
    }
    const handleOpen = () => {
        setShow(!show);
    }
  
    useEffect(() => {
        if (location.pathname !== '/' && location.pathname !== '/questionary' && location.pathname !== '/thank-you') {  
            setShowHeader(true);
        } 
        // else if(location.pathname !== '/questionary')
        else {
            setShowHeader(false);
        }
    }, [location.pathname]);
  
    if (!showHeader) return null;

    return (
        <div className='divHeader'>
            <Navbar className='navbar-web'>
                <Container>
                    <Navbar.Brand href="/Dashboard">
                        <img src={Logo} className="header2-logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Dashboard">Dashboard <RiDashboardLine /> </Nav.Link>
                            <Nav.Link href="/profiledetails">My Profile <CgProfile /> </Nav.Link>
                            <Nav.Link href="/" onClick={handleLogout}> Log-Out <MdLogout /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
            <div className='navbar-mobile'>
                <a href="/Dashboard">
                    <img src={Logo} className="header2-logo" alt="logo" />
                </a>
                <div onClick={handleOpen}>
                    <HiBars3 style={{fontSize: '30px'}}/>
                </div>
            </div>
            {show &&
                <div className='mobile-menu'>
                    <div className='close-icons' onClick={handleOpen}>
                        <RxCross2  />
                    </div>
                    <div className='menu-items'>
                    <a href="/Dashboard">
                        Dashboard <RiDashboardLine /> 
                    </a>
                    <a href="/profiledetails">
                        My Profile <CgProfile />
                    </a>
                    <a href="/" onClick={handleLogout}>
                        Log-Out <MdLogout />
                    </a>
                    </div>
                </div>
            }
          
            </Container>
        </div>
    )
}