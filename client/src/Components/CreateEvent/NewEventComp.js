import React from 'react';
import { useState } from 'react';

// Import button, form and InputGroup from bootstrap
import {Form, Button, InputGroup} from 'react-bootstrap';

// Import Axios
import Axios from 'axios'

export const NewEventComp = ({setEventId}) => {

  const [eventname, setEventname] = useState("")
  const [eventdesc, setEventdesc] = useState("");
  const [eventdate, setEventdate] = useState("");
  const [venue, setVenue] = useState("");
  const [eventcapacity, setEventcapacity] = useState("");
  const [qrcode, setQrcode] = useState("");
  const [speakerId, setSpeakerId] = useState(localStorage.getItem('id'));
  const [questionnaireId, setQuestionnaireId] = useState("questionaryNotCreated")
  
  const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post(`${process.env.REACT_APP_API_URL}/eventsRoutes/createEvent`, {
        eventname: eventname,
        eventdesc: eventdesc,
        eventdate: eventdate,
        venue: venue,
        eventcapacity: eventcapacity,
        qrcode: qrcode,
        speakerId: speakerId,
        questionsId: questionnaireId
      }).then((res) => {
        setEventId(res.data._id)
        console.log("New Event Created")
      }).catch((err) => {
        console.log(err)
      })
  }  

  return (
        <Form id='loginComp'>
            <Form.Group className="mb-3" controlId="formBasicEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="E.g. Dummy Event" onChange={(event) => setEventname(event.target.value)} />
            </Form.Group>
            <Form.Label>Event Description</Form.Label>
                <InputGroup>
                    <Form.Control as="textarea" placeholder="E.g. This is a dummy event description." aria-label="With textarea" onChange={(event) => setEventdesc(event.target.value)} />
                </InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEventDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" onChange={(event) => setEventdate(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Venue / Location</Form.Label>
            <Form.Control type="text" placeholder="E.g. Dummy Venue" onChange={(event) => setVenue(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCapacity">
            <Form.Label>Capacity</Form.Label>
            <Form.Control type="number" placeholder="500" onChange={(event) => setEventcapacity(event.target.value)} />
            </Form.Group>
            <Button variant="warning" type="submit" onClick={handleSubmit}>
            Submit & Go to Step 2
            </Button>
        </Form>
  );
};