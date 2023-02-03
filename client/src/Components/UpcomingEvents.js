import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

{/*NEEDS TO BE FINISHED WITH DB. List of events must be connected with database still */}

export const UpcomingEvents = () => {
    return (
        <div>
            <h1>Upcoming Events In the Next Two Weeks</h1>
            <div style={{border:'solid black', width:'max-content'}}>
            <ListGroup as="ol">
                <ListGroup.Item>
                    <a style={{fontWeight:'bold', marginRight:'10px'}} href='/SingleEvent'>Birds</a>
                    April 2, 2023
                </ListGroup.Item>
                <ListGroup.Item>
                    <a style={{fontWeight:'bold', marginRight:'10px'}} href='/SingleEvent'>Trees</a>
                    March 3, 2023
                </ListGroup.Item>
                <ListGroup.Item>
                    <a style={{fontWeight:'bold', marginRight:'10px'}} href='/SingleEvent'>Event Title</a>
                    Date
                </ListGroup.Item>
                <ListGroup.Item>
                    <a style={{fontWeight:'bold', marginRight:'10px'}} href='/AllEvents'> ~ All Events ~</a>
                </ListGroup.Item>
            </ListGroup>
            </div>
        </div>    
    )
}