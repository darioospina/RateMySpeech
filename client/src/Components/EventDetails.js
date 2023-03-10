import React from "react";
import "../Styles/EventDetails.css";
import dummy1 from "../Images/dummy1.jpeg";
import { Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

export function EventDetails(props) {
  const { name, date, time, location } = props;
const handleClick = () => {
  window.location.href = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
};
  return (
    <Container>
      <div className="events-page">
    <Form className="event-details">
      <Form className="event-details-left">
        <img src={dummy1} className="profilePicture" alt="photo" />

        <button className="delete-button">Delete Event</button>
      </Form>
      <Form className="event-details-right">
        <h2>{props.title}</h2>
        <p>
          <strong>Date:</strong> {props.date}
        </p>
        <p>
          <strong>Time:</strong> {props.time}
        </p>

        <p>
          <strong>Description:</strong> {props.description}
        </p>

        <p>
          <strong>Location:</strong> {props.location}
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            View on map
          </a>
            <Form>
              <img src={props.imgSrc} alt={props.imgAlt} />
              <button onClick={handleClick} className="view-mapbtn">View on Map</button>
            </Form>
        </p>
      </Form>
    </Form>
    </div>
    </Container>
  );
}

export default EventDetails;