import {React,useState, useEffect} from 'react'
import Logo from '../../Images/logo.png'
import {useLocation} from 'react-router-dom'


//Import Bootstrap components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const AudienceHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
        if (location.pathname === '/Questionnaire') {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [location.pathname]);
  
    if (!showHeader) return null;

    return (
        
        <div className='divHeader'>
            <img src={Logo} className="header3-logo" alt="logo"/>

            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: 'white', opacity: 0.7}}>
            <Card.Body>
                <ListGroup variant="flush" style={{ backgroundColor: 'white', opacity: 1}}>
                    <ListGroup.Item><b>Event Name:</b> Latest Developments in Canadian & US Immigration</ListGroup.Item>
                    <ListGroup.Item><b>Speaker:</b> John Doe</ListGroup.Item>
                    <ListGroup.Item><b>Venue:</b> Marriott Downtown Calgary</ListGroup.Item>
                    <ListGroup.Item><b>Event Date:</b> February 22, 2023</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            </Card>
        </div>
    )
}