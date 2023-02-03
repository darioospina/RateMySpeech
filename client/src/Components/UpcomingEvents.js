import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

{/*NEEDS TO BE FINISHED WITH DB. List of events must be connected with database still */}

export const UpcomingEvents = () => {
    return (
        <div>
            <h1>Your Upcoming Three Events</h1>
            <div style={{width:'max-content', paddingRight:'20px'}}>
            <ListGroup as="ol">
                <ListGroup.Item id='EventDate'>
                    <a id='EventTitle' style={{fontWeight:'bold', marginRight:'10px'}} href='/SingleEvent'>
                        Birds</a>
                    April 2, 2023
                </ListGroup.Item>
                <ListGroup.Item id='EventDate'>
                    <a id='EventTitle' style={{fontWeight:'bold', marginRight:'10px'}} href='/SingleEvent'>
                        Trees</a>
                    March 3, 2023
                </ListGroup.Item>
                <ListGroup.Item id='EventDate'>
                    <a id='EventTitle' style={{fontWeight:'bold', marginRight:'10px'}} href='/SingleEvent'>
                        Event Title</a>
                    Date
                </ListGroup.Item>
                <ListGroup.Item>
                    <a style={{fontWeight:'bold', marginRight:'10px'}} href='/AllEvents'>
                         ~ All Events ~</a>
                </ListGroup.Item>
            </ListGroup>
            </div>
        </div>    
    )
}