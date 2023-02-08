import React from 'react'
import { EventDetails } from '../../Components/EventDetails'
import { NavBarHeader } from '../../Components/Headers/NavBarHeader'

export const SingleEvent = () => {
    return (
        <div className='divContainer'>
            <NavBarHeader/>
        <p>Single Event</p>
        <EventDetails />

        </div>    
    )
}