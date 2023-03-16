import { React } from 'react'
import { Carousel, Button } from 'react-bootstrap';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

//Import react-bootstrap components
import { Link } from 'react-router-dom'

//Import Images
import Lecture from "../Images/LandingPage Images/lecture.png"
import CompanyLogo from "../Images/LandingPage Images/parents2partners_logo.jpg"
import Chart from "../Images/LandingPage Images/pieChart.jpg"

export const LandingPage = () => {

  return (

    <div>
      <Carousel
        variant="dark"
        interval={3000}
        style={{ padding: '0' }}
        prevIcon={<BsFillArrowLeftCircleFill color="#FFC000" size={"50px"} />}
        nextIcon={<BsFillArrowRightCircleFill color="#FFC000" size={"50px"} />}>
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
            <Link to={'/profileedit'}><Button variant='warning' style={{ fontSize: 'large', margin: '10px' }}>Sign-up</Button></Link>
            <Link to={'/Login'}><Button variant='warning' style={{ fontSize: 'large', margin: '10px' }}>Login</Button></Link>
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
            <Link to={'/profileedit'}><Button variant='warning' style={{ fontSize: 'large', margin: '10px' }}>Sign-up</Button></Link>
            <Link to={'/Login'}><Button variant='warning' style={{ fontSize: 'large', margin: '10px' }}>Login</Button></Link>
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
      {/* </div> */}

    </div>
  )
}