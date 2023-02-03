import React from 'react'
import Table from 'react-bootstrap/Table'

export const ListOfEvents = () => {
    return (
      <div>
      <h1>List Of All Events</h1>
    <Table striped>
      <thead>
        <tr>
          <th>Speaker</th>
          <th>Presentation Topic</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark Otto</td>
          <td>Birds</td>
          <td>Calgary, AB</td>
          <td>April 2, 2023</td>
        </tr>
        <tr>
          <td>John Johnson</td>
          <td>Trees</td>
          <td>Austim, TX</td>
          <td>March 3, 2023</td>
        </tr>
      </tbody>
    </Table>  
    </div>
    )
}