import React from 'react'
import { useState } from 'react';

//Import Table and Navigation properties
import Table from 'react-bootstrap/Table'
import NavLink from 'react-bootstrap/esm/NavLink'
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

// Import Icons
import { FaSearchPlus } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

export const ListOfEvents = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>List Of Your Events</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Speaker</th>
            <th>Event Name</th>
            <th>Expected Attendance</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark Otto</td>
            <td>Birds</td>
            <td>250</td>
            <td>Calgary, AB</td>
            <td>
              <NavLink className='AllEvents-Actions' onClick={handleShow}>
                <FaSearchPlus />
              </NavLink>
              <NavLink className='AllEvents-Actions'>
                <AiFillDelete className='delete' />
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>John Johnson</td>
            <td>Trees</td>
            <td>500</td>
            <td>Austim, TX</td>
            <td>
              <NavLink className='AllEvents-Actions'>
                <FaSearchPlus />
              </NavLink>
              <NavLink className='AllEvents-Actions'>
                <AiFillDelete className='delete' />
              </NavLink>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Birds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Speaker</h1>
          <p>speaker blah blah</p>

          <h1>Description</h1>
          <p> This is a greate description! Look how much i can fit <br/>hjkasdhfkjasdhfsad
          asfdjkasdfjaskdlfjasdlkfjasdlkfjasldkfjasldkfjlsadkf
          adfjklasdfjalkdfjasdlfjlaskdfjldaskfjsadlkfjsdaf
          asdfjklasdlfjlkadsfjasldkfjlakdfjalksdfjasld
          adfjaskdlfjasldkfjasdlkfjsdalkfjsdaf</p>

          <h1>Expected Attendance</h1>
          <p>600</p>

          <h1>Location</h1>
          <p>canada</p>
        </Modal.Body>
      </Modal>
    </div>

  )
}