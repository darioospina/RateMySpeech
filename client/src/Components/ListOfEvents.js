import React from 'react'
import { useState } from 'react';

//Import Dummy Data
import EventsData from '../Dummy Data/Events'

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
    return (
      <div>
      <h1>List Of Your Events</h1>
    <Table striped>
      <thead>
        <tr>
          <th>Speaker</th>
          <th>Event Name</th>
          <th>Expected Audience Size</th>
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
          <NavLink className='AllEvents-Actions'>
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
    </div>
    )
}