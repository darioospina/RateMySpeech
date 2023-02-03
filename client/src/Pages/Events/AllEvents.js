import React from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs'

import { ListOfEvents } from '../../Components/ListOfEvents'

export const AllEvents = () => {
    return (
        <div className='divContainer'>
        <h1>All Events</h1>
        <ListOfEvents />
        <BsFillCalendarDateFill />
        </div>    
    )
}