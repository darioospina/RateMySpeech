import { React, useState } from 'react'
import { Carousel, Button, InputGroup } from 'react-bootstrap';

import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';

import Lecture from "../Images/lecture.png"
import CompanyLogo from "../Images/parents2partners_logo.jpg"
import Chart from "../Images/pieChart.jpg"

export const LandingPage = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (

    <div>
      <h1 id='pageTitle'>RateMySpeech</h1>
      <h3 id='pageSubTitle'>A tool for educational speakers to use before, during, and after
        their presentations.</h3>
      <div style={{ height: "100vh", margin: "0" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Lecture}
              alt="Second slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <h3>RateMySpeech Welcomes You!</h3>
              <p>An amazing tool for educational speakers! You can create and view all your events,
                as well as create questionnaires for your audiences to take post presentation.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Chart}
              alt="Second slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <h3>Audience Reviews Compiled In a Single Place!</h3>
              <p>We offer charts and stats based on compiled reviews from all your presentations.
                View single event stats, or your overall "SpeakerScore". You can see it all here!
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CompanyLogo}
              alt="Third slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <h3>Created for the many hardworking volunteers at Parents2Partners!</h3>
              <p>Visit them and learn more at <a href='https://www.parents2partners.org/'>www.parents2partners.org</a></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Stack id="buttons-block" direction="horizontal" gap={5}>
        <div id="signUp-button">
          <Nav.Link href="/profileedit">
            <Button>Sign Up</Button>
          </Nav.Link>
        </div>
        <div id="logIn-button">
          <Nav.Link href="/Login">
            <Button>Log In</Button>
          </Nav.Link>
        </div>
      </Stack>
    </div>
  )
}