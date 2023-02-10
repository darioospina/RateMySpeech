import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

export const MainMenu = () => {
    return (
        <div>
            <h2>Where Do You Want To Go?</h2>
            <div id='dashboard-table' >
                <ListGroup horizontal>
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