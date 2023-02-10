import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

export const MainMenu = () => {
    return (
        <div>
            <h1>Main Menu</h1>
            <div style={{ width: 'max-content', paddingRight: "20px" }}>
                <ListGroup as="ol">
                    <ListGroup.Item>
                        <a className='dashboardLink' href='/profiledetails'>
                            My Profile</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a className='dashboardLink' href='/Report'>
                            My Scores
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a className='dashboardLink' href='/NewEvent'>
                            Create a New Event
                        </a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}