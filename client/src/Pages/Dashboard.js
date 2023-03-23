import React, {useState} from 'react'

//Import Components
import { SpeakerList } from '../Components/AdminSpeakerList'
import { ListOfEvents } from '../Components/Dashboard/ListOfEvents'

// React-bootstrap components
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

// Import Icons
import { FaSearchPlus } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { IoIosStats } from 'react-icons/io'

export const Dashboard = () => {
    //Grabs info on current logged in user
    const user_Name = localStorage.getItem('name')
    const user_Role = localStorage.getItem("role")
    const [show, setShow] = useState(true);

    return (
        // <div id='dashboard-body'>
        //     <h1 id='dashboard-title'>Welcome {user_Name}!</h1>
        //     <h3 id='dashboard-title'>Your Role: <b>{user_Role}</b> </h3>

        //         {/* If user is an admin, show SpeakerList */}
        //         {(user_Role == 'admin') && (
        //             <div>
        //                 <SpeakerList />
        //             </div>
        //         )}
        //         {/* If user is a speaker, show ListOfEvents */}
        //         {(user_Role == 'speaker') && (
        //             <div>
        //                 <ListOfEvents />
        //             </div>
        //         )}
        // </div>
        <>
        <h1 id='dashboard-title'>Welcome {user_Name}!</h1>
        <ToastContainer position="middle-end" className="p-3">
        <Toast style={{margin: '10px auto'}} bg={'light'} onClose={() => setShow(false)} show={show} delay={6000} autohide>
            <Toast.Header>
            <strong className="me-auto">More info</strong>
            </Toast.Header>
            <Toast.Body>Click on <FaSearchPlus id='moreInfoIcon'/> to expand the information from the event.</Toast.Body>
        </Toast>
        <Toast style={{margin: '10px auto'}} bg={'light'} onClose={() => setShow(false)} show={show} delay={6000} autohide>
            <Toast.Header>
            <strong className="me-auto">Delete</strong>
            </Toast.Header>
            <Toast.Body>Click on <AiFillDelete id='deleteIcon'/> to delete the selected event.</Toast.Body>
        </Toast>
        <Toast style={{margin: '10px auto'}} bg={'light'} onClose={() => setShow(false)} show={show} delay={6000} autohide>
            <Toast.Header>
            <strong className="me-auto">Report</strong>
            </Toast.Header>
            <Toast.Body>Click on <IoIosStats id='reportIcon'/> to detailed report of the selected event.</Toast.Body>
        </Toast>
        </ToastContainer>
        <ListOfEvents />
        </>
    )
}