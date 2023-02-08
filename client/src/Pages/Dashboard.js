import React from 'react'

import { MainMenu } from '../Components/MainMenu'
import { UpcomingEvents } from '../Components/UpcomingEvents'


export const Dashboard = () => {
    return (
        <div className='divContainer'>
        <p>Dashboard</p>
        <MainMenu />

        <UpcomingEvents />

        </div>    
    )
}