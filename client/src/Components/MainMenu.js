import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

import { MdLogout } from 'react-icons/md'

export const MainMenu = () => {
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
                    <ListGroup.Item>
                        <a className='dashboardLink' href='/NewEvent'>
                            Create a New Event
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a className='dashboardLink' href='/'>
                            Log Out <MdLogout/>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}