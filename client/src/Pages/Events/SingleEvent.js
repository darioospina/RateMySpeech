import React from 'react'
import { EventDetails } from '../../Components/EventDetails'
import "../../Styles/EventDetails.css";
export const SingleEvent = () => {
    return (
        <div className='single-event-section'>
                <div className='divContainer'>
                    <EventDetails />
                </div>
        </div>
    )
}