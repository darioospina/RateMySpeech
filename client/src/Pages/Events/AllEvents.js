import React from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import { NavBarHeader } from '../../Components/Headers/NavBarHeader'

import { ListOfEvents } from '../../Components/ListOfEvents'

export const AllEvents = () => {
    return (
        <div className='divContainer'>
        <NavBarHeader />
        <h1>All Events</h1>
        <ListOfEvents />
        <BsFillCalendarDateFill />
        </div>    
    )
}