import React from 'react'

//Import Components
import { SpeakerList } from '../Components/AdminSpeakerList'
import { ListOfEvents } from '../Components/Dashboard/ListOfEvents'


export const Dashboard = () => {
    //Grabs info on current logged in user
    const user_Name = localStorage.getItem('name')
    const user_Role = localStorage.getItem("role")

    return (
        <div id='dashboard-body'>
            <h1 id='dashboard-title'>Welcome {user_Name}!</h1>
            <h3 id='dashboard-title'>Your Role: <b>{user_Role}</b> </h3>
            <div id='dashboard-container'>

                {/* If user is an admin, show SpeakerList */}
                {(user_Role == 'admin') && (
                    <div>
                        <SpeakerList />
                    </div>
                )}
                {/* If user is a speaker, show ListOfEvents */}
                {(user_Role == 'speaker') && (
                    <div>
                        <ListOfEvents />
                    </div>
                )}
            </div>
        </div>
    )
}