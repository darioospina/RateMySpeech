import React from 'react'

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';

{/*NEEDS TO BE FINISHED WITH DB. List of events must be connected with database still */}

export const EventDetails = () => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Popover right</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            asdjkfjklfjslafjlasfjklsafjlksdfjsldkf
            asfjlksadjflksafjlsadfjlsajflsfjjsldf
            adflsadfjlkdfjslkafjsdlkfjlk
          </Popover.Body>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
      );
    return (
        <div>
            <h1>Selected Event Details</h1>
            <Example />
        </div>    
    )
}