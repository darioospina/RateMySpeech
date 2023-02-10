import React from 'react'

//Import Dummy Data
import EventsData from '../Dummy Data/Events'

//Import Table and Navigation properties
import Table from 'react-bootstrap/Table'
import NavLink from 'react-bootstrap/esm/NavLink'

// Import Icons
import { FaSearchPlus } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

export const ListOfEvents = () => {

  //maps over data and inserts it into the body of table
  const ListOfEvents = EventsData.map((element) =>
    <tr>
      <td>{element.speaker}</td>
      <td>{element.eventName}</td>
      <td>{element.audienceSize}</td>
      <td>{element.Location}</td>
      <td>
        <NavLink className='AllEvents-Actions'>
          <FaSearchPlus />
        </NavLink>
        <NavLink className='AllEvents-Actions'>
          <AiFillDelete className='delete' />
        </NavLink>
      </td>
    </tr>
  );

  return (
    <div>
      {/*Creates Table header and then inserts Data from DB into Table body */}
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
          {ListOfEvents}
        </tbody>
      </Table>
    </div>
  )
}