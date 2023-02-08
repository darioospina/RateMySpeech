import React from 'react'
import { NavBarHeader } from '../../Components/Headers/NavBarHeader'
import { ListOfEvents } from '../../Components/ListOfEvents'

export const AllEvents = () => {
    return (
        <div className='divContainer'>
        <NavBarHeader />
        
        <ListOfEvents />
        </div>    
    )
}