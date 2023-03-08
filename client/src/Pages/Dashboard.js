import React from 'react'

import { MainMenu } from '../Components/Dashboard/MainMenu'
import { UpcomingEvents } from '../Components/Dashboard/UpcomingEvents'
import { SpeakerList } from '../Components/AdminSpeakerList'


export const Dashboard = () => {
    const speakerName = localStorage.getItem('name')

    return (
        <div id='dashboard-body'>
            <h1 id='dashboard-title'>Welcome {speakerName}!</h1>
            <div id='dashboard-container'>
                <div class='dashboard-widget'>
                    <MainMenu />
                </div>
                <div class='dashboard-widget'>
                    <UpcomingEvents />
                </div>
            </div>
            <div id='speakerListTable'>
                <SpeakerList />
            </div>
        </div>
    )
}