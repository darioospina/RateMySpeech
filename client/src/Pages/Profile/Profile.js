import React from 'react'
import { NavBarHeader } from '../../Components/Headers/NavBarHeader'

export const Profile = () => {
    return (
        <div className='divContainer'>
            <NavBarHeader/>
        <p>Profile</p>
        <ProfileDetails/>
        </div>    
    )
}