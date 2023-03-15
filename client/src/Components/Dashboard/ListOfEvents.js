import React from 'react'
import { useState } from 'react'

//Import Dummy Data
import EventsData from '../../Dummy Data/EventsData'

//Import Table and Navigation properties
import Table from 'react-bootstrap/Table'
import NavLink from 'react-bootstrap/esm/NavLink'
import { Modal } from "react-bootstrap";

// Import Icons
import { FaSearchPlus } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineDataSaverOff } from 'react-icons/md'

export const ListOfEvents = () => {
  //Handles the visibility of EventDetails Popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Assigns the designated Data of a single event depending on which event is clicked
  const [singleEventData, setsingleEventData] = useState(null);
  const handleButtonClick = singleEventData_id => {
    setsingleEventData(EventsData[singleEventData_id]);
    setShow(true);
  }

  //Maps over all the event data and inserts it into the body of the table
  const ListOfEvents = EventsData.map((event) =>
    <tr>
      <td className='eventList-item'>{event.speaker}</td>
      <td className='eventList-item'>{event.eventName}</td>
      <td className='eventList-item'>{event.auditoriumSize}</td>
      <td className='eventList-item'>{event.location}</td>
      <td>
        {/* These are the clickable icons to open popup with detials of a single event
             and to Delete the entry */}
        <NavLink className='AllEvents-Actions'>
          <FaSearchPlus id='moreInfoIcon' onClick={() => handleButtonClick(event.id)} />
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
    <div id='title-table-block'>
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

      {/* Creates the popup that contains specific event details */}
      {singleEventData && (
        <Modal onShow={handleShow} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{singleEventData.eventName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Event Date</h2>
            <p>{singleEventData.date}</p>
            <h2>Speaker</h2>
            <p>{singleEventData.speaker}</p>
            <h2>Description</h2>
            <p>{singleEventData.description}</p>
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