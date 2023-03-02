import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

// Import button, form and InputGroup from bootstrap
import {Form, Button, InputGroup} from 'react-bootstrap';

// Import Axios
import Axios from 'axios'

export const NewEvent = () => {

  const Navigate = useNavigate();

  const [eventname, setEventname] = useState("")
  const [eventdesc, setEventdesc] = useState("");
  const [eventdate, setEventdate] = useState("");
  const [venue, setVenue] = useState("");
  const [eventcapacity, setEventcapacity] = useState("");
  const [qrcode, setQrcode] = useState("");
  const [speakerId, setSpeakerId] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post(`${process.env.REACT_APP_API_URL}/eventsRoutes/createEvent`, {
        eventname: eventname,
        eventdesc: eventdesc,
        eventdate: eventdate,
        venue: venue,
        eventcapacity: eventcapacity,
        qrcode: qrcode,
        speakerId: setSpeakerId(localStorage.getItem('id'))
      }).then((res) => {
        console.log("New Event Created")
        Navigate("../../Components/QRCodeComp")
      }).catch((err) => {
        console.log(err)
      })
  }  

  return (
    <div style={{margin: 'auto', textAlign:'center'}}>
    <Form id='loginComp'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="E.g. Dummy Event" onChange={(event) => setEventname(event.target.value)} />
        </Form.Group>
        <Form.Label>Event Description</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" placeholder="E.g. This is a dummy event description." aria-label="With textarea" onChange={(event) => setEventdesc(event.target.value)} />
              </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Date</Form.Label>
          <Form.Control type="date" onChange={(event) => setEventdate(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Venue / Location</Form.Label>
          <Form.Control type="text" placeholder="E.g. Dummy Venue" onChange={(event) => setVenue(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Capacity</Form.Label>
          <Form.Control type="number" placeholder="500" onChange={(event) => setEventcapacity(event.target.value)} />
        </Form.Group>
        <Button variant="warning" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
    </Form>
    </div>
  );
};