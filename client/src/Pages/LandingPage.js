import { React } from 'react'
import { Carousel, Button } from 'react-bootstrap';

//Import react-bootstrap components
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';

//Import Images
import Lecture from "../Images/lecture.png"
import CompanyLogo from "../Images/parents2partners_logo.jpg"
import Chart from "../Images/pieChart.jpg"

export const LandingPage = () => {

  return (

    <div>
      <h3 id='pageSubTitle'>A tool for educational speakers to use before, during, and after
        their presentations.</h3>
      {/* Buttons for "Sign Up" and "Log In" */}
      <Stack id="buttons-block" direction="horizontal" gap={5}>
        <div id="signUp-button">
          <Nav.Link href="/profileedit">
            <Button variant='warning'>Sign Up</Button>
          </Nav.Link>
        </div>
        <div id="logIn-button">
          <Nav.Link href="/Login">
            <Button variant='warning'>Log In</Button>
          </Nav.Link>
        </div>
      </Stack>
      {/* Carousel - Switches between three slides, with image and text on each slide */}
      <div style={{ height: "100vh", margin: "0" }}>
        <Carousel variant="dark" interval={3000}>
          {/* First Slide */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Lecture}
              alt="First slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <h3>RateMySpeech Welcomes You!</h3>
              <p>An amazing tool for educational speakers! You can create and view all your events,
                as well as create questionnaires for your audiences to take post presentation.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Second Slide */}
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
          {/* Third Slide */}
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

    </div>
  )
}