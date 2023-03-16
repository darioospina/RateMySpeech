import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'

//Import Table and Navigation properties
import Table from 'react-bootstrap/Table'
import NavLink from 'react-bootstrap/esm/NavLink'
import { Modal } from "react-bootstrap"
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

// Import Icons
import { FaSearchPlus } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineDataSaverOff } from 'react-icons/md'

import Axios from 'axios'

export const ListOfEvents = () => {
  //Info on Logged in User
  const user_ID = localStorage.getItem("id")
  const [singleSpeakerData, setSingleSpeakerData] = useState([]);

  //Import event data based on logged in user
  useEffect(() =>  {
    Axios.get(`${process.env.REACT_APP_API_URL}/eventsRoutes/getEventsBySpeaker/64025ccc9f36f204c16b6d33`)
      .then((res) => {
        if (res.data.length != 0) {
          //Added index to event entry, needed for Line 49 to operate
          for (var i = 0; i < res.data.length; i++)
          {
            res.data[i].index = i;
          }
          setSingleSpeakerData(res.data);
          //setData(Array.from(res.data));
        }

      }).catch((err) => {
        console.log(err)
      })
   })

  //Handles the visibility of EventDetails Popup
  const [show, setShow] = useState(false);
  const [listOfEvents, setListOfEvents] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Assigns the designated Data of a single event depending on which event is clicked
  const [singleEventData, setsingleEventData] = useState(null);
  const handleButtonClick = singleEventData_id => {
    setsingleEventData(singleSpeakerData[singleEventData_id]);
    setShow(true);
  }

  // useEffect(() => {
  //   Axios.get(`${process.env.REACT_APP_API_URL}/eventsRoutes/getEvents`)
  //   .then((res) => {
  //     console.log(res.data)
  //     setListOfEvents(res.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])

  //Maps over all the event data and inserts it into the body of the table
  const ListOfEvents = singleSpeakerData.map((event) =>
    <tr>
      <td className='eventList-item'>{event.speaker}</td>
      <td className='eventList-item'>{event.eventname}</td>
      <td className='eventList-item'>{event.eventcapacity}</td>
      <td className='eventList-item'>{event.venue}</td>
      <td>
        {/* These are the clickable icons to open popup with detials of a single event
             and to Delete the entry */}
        <NavLink className='AllEvents-Actions'>
          <FaSearchPlus id='moreInfoIcon' onClick={() => handleButtonClick(event.index)} />
        </NavLink>
        <NavLink className='AllEvents-Actions'>
          <AiFillDelete id='deleteIcon' />
        </NavLink>
        <NavLink href='/Report'>
          <MdOutlineDataSaverOff id='reportIcon' />
        </NavLink>
      </td>
    </tr>
  );

  return (
    <div id='title-table-block' >
      <h1>All Your Events</h1>
      {/*Creates Table header and then inserts Data from DB into Table body */}
      <Table striped>
        <thead>
          <tr>
            <th>Speaker</th>
            <th>Event Name</th>
            <th>Auditorium Size</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ListOfEvents}
        </tbody>
      </Table>
      <Nav.Link className='list-button' href="/NewEvent">
        <Button >Create a New Event</Button>
      </Nav.Link>

      {/* Creates the popup that contains specific event details */}
      {singleEventData && (
        <Modal onShow={handleShow} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{singleEventData.eventName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Event Date</h2>
            <p>{singleEventData.eventdate}</p>
            <h2>Speaker</h2>
            <p>{singleEventData.speaker}</p>
            <h2>Description</h2>
            <p>{singleEventData.eventdesc}</p>
            <h2>Auditorium Size</h2>
            <p>{singleEventData.auditoriumSize}</p>
            <h2>Location</h2>
            <p>{singleEventData.location}</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  )
}