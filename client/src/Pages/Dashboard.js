import React from 'react'

import { MainMenu } from '../Components/MainMenu'
import { UpcomingEvents } from '../Components/UpcomingEvents'


export const Dashboard = () => {
    const speakerName = localStorage.getItem('name')

    return (
        <div id='dashboard-body'>
            <h1 id='dashboard-title'>Welcome {speakerName}!</h1>
            <div id='dashboard-container'>
                <div id='dashboard-widget'>
                    <MainMenu />
                </div>
                <div id='dashboard-widget'>
                    <UpcomingEvents />
                </div>
            </div>
        </div>
    )
}