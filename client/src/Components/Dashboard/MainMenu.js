import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

export const MainMenu = () => {
    const user_Role = localStorage.getItem("role")

    return (
        <div>
            {/* Navigation Box on Dashboard.js */}
            <h2>Where Do You Want To Go?</h2>
            <div class='dashboard-table' >
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
                    
                    {/* If user is a speaker, display another button */}
                    {(user_Role == 'speaker') && (
                        <ListGroup.Item>
                            <a className='dashboardLink' href='/NewEvent'>
                                Create a New Event
                            </a>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        </div>
    )
}