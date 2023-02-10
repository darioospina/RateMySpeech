import React from 'react'

import { MainMenu } from '../Components/MainMenu'
import { UpcomingEvents } from '../Components/UpcomingEvents'


export const Dashboard = () => {
    return (
        <div>
        <h1>Welcome!</h1>
        <MainMenu />

        <UpcomingEvents />

        </div>    
    )
}