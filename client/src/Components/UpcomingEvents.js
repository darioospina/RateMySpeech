import React from 'react'
import { useState } from 'react';

import EventsData from '../Dummy Data/EventsData';
import ListGroup from 'react-bootstrap/ListGroup';

import { Modal } from 'react-bootstrap';

export const UpcomingEvents = () => {
    //Handles the visibility of EventDetails Popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Assigns the designated SingleEvent Data depending on which event is clicked
    const [singleEventData, setsingleEventData] = useState(null);
    const handleButtonClick = singleEventData_id => {
        setsingleEventData(EventsData[singleEventData_id]);
        setShow(true);
    }

    //Maps over the event data and displays the first three
    const NextThreeEvents = EventsData.slice(0, 3).map((event) =>
        <div>
            <ListGroup.Item>
                <p id='EventTitle' onClick={() => handleButtonClick(event.id)}>
                    {event.eventname}</p>
                {event.eventdate}
            </ListGroup.Item>
        </div>
    );

    return (
        <div>
            <h2>Your Upcoming Events!</h2>
            {/*Displays list of options and inserts respective data from DB */}
            <div id='dashboard-table' >
                <ListGroup horizontal>
                    {NextThreeEvents}
                    <ListGroup.Item>
                        <a id='allEventsLink' href="/AllEvents">
                            ~ All Events ~</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                {/*Creates the popup that contains specific event details */}
                {singleEventData && (
                    <Modal onShow={handleShow} show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{singleEventData.eventName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h2>Event Date</h2>
                            <p>{singleEventData.eventdate}</p>
                            <h2>Speaker</h2>
                            <p>{singleEventData.speaker}</p>
                            <h2>Description</h2>
                            <p>{singleEventData.eventdesc}</p>
                            <h2>Auditorium Size</h2>
                            <p>{singleEventData.eventcapacity}</p>
                            <h2>Location</h2>
                            <p>{singleEventData.venue}</p>
                        </Modal.Body>
                    </Modal>
                )}
            </div>
        </div>


    )
}