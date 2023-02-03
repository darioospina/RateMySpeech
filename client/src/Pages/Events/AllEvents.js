import React from 'react'
import { EventDetails } from '../../Components/EventDetails'

import { ListOfEvents } from '../../Components/ListOfEvents'
import { MainMenu } from '../../Components/MainMenu'
import { UpcomingEvents } from '../../Components/UpcomingEvents'
import { LoginComp } from '../../Components/LoginComp'

export const AllEvents = () => {
    return (
        <div className='divContainer'>
        <h1>All Events</h1>
        <ListOfEvents />
        </div>    
    )
}