import React from 'react'
import { useState } from 'react'

//Import Dummy Data
import EventsData from '../Dummy Data/EventsData'

//Import Table and Navigation properties
import Table from 'react-bootstrap/Table'
import NavLink from 'react-bootstrap/esm/NavLink'
import { Modal } from "react-bootstrap";

// Import Icons
import { FaSearchPlus } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

export const ListOfEvents = () => {
  const [singleEventData, setsingleEventData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Assigns the designated SingleEvent Data depending on which event is clicked
  const handleButtonClick = singleEventData_id => {
    setsingleEventData(EventsData[singleEventData_id]);
    setShow(true);
  }

  //maps over all event data and inserts it into the body of table
  const ListOfEvents = EventsData.map((event) =>
    <tr>
      <td>{event.speaker}</td>
      <td>{event.eventName}</td>
      <td>{event.audienceSize}</td>
      <td>{event.Location}</td>
      <td>
        <NavLink className='AllEvents-Actions'>
          <FaSearchPlus onClick={() => handleButtonClick(event.id)} />
        </NavLink>
        <NavLink className='AllEvents-Actions'>
          <AiFillDelete className='delete' />
        </NavLink>
      </td>
    </tr>
  );

  return (
    <div>
      {/*Creates Table header and then inserts Data from DB into Table body */}
      <Table striped>
        <thead>
          <tr>
            <th>Speaker</th>
            <th>Event Name</th>
            <th>Expected Audience Size</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ListOfEvents}
        </tbody>
      </Table>

      {/*Creates the popup that contains specific event details */}
      {singleEventData && (
        <Modal onShow={handleShow} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{singleEventData.eventName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Speaker</h2>
            <p>{singleEventData.speaker}</p>
            <h2>Description</h2>
            <p>{singleEventData.description}</p>
            <h2>Expected Attendance</h2>
            <p>{singleEventData.audienceSize}</p>
            <h2>Location</h2>
            <p>{singleEventData.Location}</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  )
}