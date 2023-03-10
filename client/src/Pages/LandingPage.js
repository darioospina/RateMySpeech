import {React, useState} from 'react'
import {Carousel, Button, InputGroup} from 'react-bootstrap';
import Img01 from '../Images/img03.jpg';

export const LandingPage = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <div style={{ margin: "0"}} className="landing-page">
        <Carousel style={{ 
            height: "100%",
            backgroundImage: "url(https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"                    
        }} className="main-img">
        <Carousel.Item> 
          <img
          className="d-block img-cr"
          src={Img01}
          alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-cr"
            src={Img01}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-cr"
            src={Img01}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}