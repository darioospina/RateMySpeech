import {React, useState, useEffect} from 'react';
import Logo from '../../Images/logo.png';
import {useLocation} from 'react-router-dom';
import Axios from 'axios';

// Import Bootstrap components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const AudienceHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [eventId, setEventId] = useState(null);
    const [eventInfo, setEventInfo] = useState("");
    const location = useLocation();
    const getPathName = location.pathname.split('/');
    const [questionnaireId, setQuestionnaireId] = useState(getPathName[getPathName.length - 1]);

    // Get the QuestionnaireId from the path
    useEffect(() => {
        if (getPathName.includes('questionnaire')) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [location.pathname]);

    // Get the EventId from the QuestionnaireId
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API_URL}/questionsRoutes/getQuestionsFromOneEvent/${questionnaireId}`)
        .then((res) => {
            setEventId(res.data.eventId);
        }).catch((err) => {
            console.log(err);
        })
    }, [questionnaireId]);

    // Get the Event Information from the Event ID
    const fetchEventInfo = async () => {
        try {
            const res = await Axios.get(`${process.env.REACT_APP_API_URL}/eventsRoutes/getEventByID/${eventId}`);
            setEventInfo(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (questionnaireId && eventId) {
            fetchEventInfo();
        }
    }, [questionnaireId, eventId]);

    if (!showHeader) return null;

    return (
        <div className='divHeader'>
            <img src={Logo} className="header3-logo" alt="logo"/>
            <Card style={{ width: '90%', margin: '20px auto', backgroundColor: 'white', opacity: 0.7}}>
                <Card.Body>
                    <ListGroup variant="flush" style={{ backgroundColor: 'white', opacity: 1}}>
                        {eventInfo && 
                        <>
                            <ListGroup.Item><b>Event Name:</b> {eventInfo.eventname}</ListGroup.Item>
                            <ListGroup.Item><b>Venue:</b> {eventInfo.eventvenue}</ListGroup.Item>
                            <ListGroup.Item><b>Event Date:</b> {eventInfo.eventdate.substring(0, 10)}</ListGroup.Item>
                        </>
                        }
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};