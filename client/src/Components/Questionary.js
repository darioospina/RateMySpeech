import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

export const Questionary = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const disableReverse = (direction) => {
    if (direction === 'prev' && index === 0) {
      return true; // Disable reverse from first slide
    } else if (direction === 'next' && index === 2) {
      return true; // Disable next arrow on last slide
    } else {
      return false;
    }
  };

  return (
    <Carousel
      variant="dark"
      style={{ margin: 'auto 50px', height: '100%' }}
      activeIndex={index}
      onSelect={handleSelect}
      interval={null} // Disable automatic scrolling
      nextIcon={
        !disableReverse('next') ? (
          <span aria-hidden="true" className="carousel-control-next-icon" />
        ) : null
      }
      prevIcon={
        !disableReverse('prev') ? (
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        ) : null
      }
    >
      <Carousel.Item>
        <div
          style={{
            height: '100vh', // Set height to size of screen
            background: 'url(./footer.js/800x400?text=First slide&bg=f5f5f5) no-repeat center center',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Carousel.Caption
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <h3>Content to be displayed in the middle</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            height: '100vh', // Set height to size of screen
            background: 'url(./footer.js/800x400?text=Second slide&bg=eee) no-repeat center center',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Carousel.Caption
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <h3>Content to be displayed in the middle</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            height: '100vh', // Set height to size of screen
            background: 'url(./footer.js/800x400?text=Third slide&bg=e5e5e5) no-repeat center center',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Carousel.Caption
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <h3>Content to be displayed in the middle</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}