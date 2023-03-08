import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

//Import StyleSheet and Logo
import Logo from '../../Images/logo.png'

//Import Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBarHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [questionnaireId, setQuestionnaireId] = useState(null)
    const location = useLocation();

    const getPath = location.pathname

  
    useEffect(() => {
        setQuestionnaireId(getPath.split('/')[getPath.split('/').length - 1])
        if (location.pathname !== '/' && location.pathname !== '/Questionnaire' && !getPath.split('/').includes('questionnaire')) {  
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [location.pathname]);
  
    if (!showHeader) return null;

    return (
        <div className='divHeader'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/Dashboard">
                        <img src={Logo} className="header2-logo" alt="logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}