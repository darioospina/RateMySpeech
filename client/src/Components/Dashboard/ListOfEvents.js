import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

//Import Table and Navigation properties
import Table from 'react-bootstrap/Table'
import NavLink from 'react-bootstrap/esm/NavLink'
import { Modal } from "react-bootstrap"
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

// Import QR Component from qrcode library
import { QRCodeCanvas } from "qrcode.react";

// Import Icons
import { FaSearchPlus } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { IoIosStats } from 'react-icons/io'

export const ListOfEvents = () => {
  //Info on Logged in User
  const user_ID = localStorage.getItem("id")
  const [singleSpeakerData, setSingleSpeakerData] = useState([]);


  //Import event data based on logged in user
  useEffect(() =>  {
    Axios.get(`${process.env.REACT_APP_API_URL}/eventsRoutes/getEventsBySpeaker/${user_ID}`)
      .then((res) => {
        if (res.data.length !== 0) {
          //Added index to event entry, needed for Line 49 to operate
          for (var i = 0; i < res.data.length; i++)
          {
            res.data[i].index = i;
          }
          setSingleSpeakerData(res.data);
        }

      }).catch((err) => {
        console.log(err)
      })
   }, [])

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

  //Maps over all the event data and inserts it into the body of the table
  const ListOfEvents = singleSpeakerData.map((event) =>
    <tr>
      <td className='eventList-item'>{event.questionsId}</td>
      <td className='eventList-item'>{event.eventname}</td>
      <td className='eventList-item'>{event.eventdate.substring(0, 10)}</td>
      <td className='eventList-item'>{event.venue}</td>
      {/* These are the clickable icons to open popup with detials of a single event
      and to Delete the entry */}
      <td className='eventList-item'>
          <Link to={'#'}className='AllEvents-Actions' style={{display: 'inline-block'}}>
              <FaSearchPlus id='moreInfoIcon' onClick={() => handleButtonClick(event.index)} />
          </Link>
      </td>
      <td className='eventList-item'>
          <Link to={'#'} className='AllEvents-Actions' style={{display: 'inline-block'}}>
              <AiFillDelete id='deleteIcon' />
          </Link>
      </td>
      <td>
          <Link to={`/Report/${event.questionsId}`} style={{display: 'inline-block'}}>
              <IoIosStats id='reportIcon' />
          </Link>
      </td>
    </tr>
  );

  return (
    <div id='title-table-block' >
      <h4>All Your Events</h4>
      
      {/*Creates Table header and then inserts Data from DB into Table body */}
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Questionnaire Id</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Location</th>
            <th>Details</th>
            <th>Delete</th>
            <th>Report</th>
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
            <h2>QR Code</h2>
            <p>
              <QRCodeCanvas
                id="qrCode"
                value={`/questionnaire/${singleEventData.questionsId}`}
                size={100}
                bgColor={"#FFFFFF"}
                level={"H"}
              />
              <br></br>
              <Link target={'_blank'} to={`/questionnaire/${singleEventData.questionsId}`} style={{textDecoration: 'none'}}>
                Open the Questionnaire
              </Link>
            </p>
            <h2>Event ID</h2>
            <p>{singleEventData._id}</p>
            <h2>Event Date</h2>
            <p>{singleEventData.eventdate.substring(0, 10)}</p>
            <h2>Description</h2>
            <p>{singleEventData.eventdesc}</p>
            <h2>Auditorium Size</h2>
            <p>{singleEventData.eventcapacity}</p>
            <h2>Location</h2>
            <p>{singleEventData.venue}</p>
          </Modal.Body>
        </Modal>
      )}
      
      <Nav.Link className='list-button' href="/NewEvent">
        <Button variant='warning'>Create a New Event</Button>
      </Nav.Link>
    </div>
  )
}