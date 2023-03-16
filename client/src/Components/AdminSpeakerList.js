import React, { useEffect, useState } from "react";
import Axios from "axios";

//Import Table and Nav
import Table from 'react-bootstrap/Table'
import { Button, Nav } from "react-bootstrap";

export const SpeakerList = () => {
  const [users, setUsers] = useState([]);

  // Import user data from DB
  useEffect(() =>  {
    Axios.get(`${process.env.REACT_APP_API_URL}/usersRoutes/getAllUsers`)
      .then((res) => {
        if (res.data.length != 0) {
          setUsers(res.data)
        }

      }).catch((err) => {
        console.log(err)
      })
   })

   //Map over data and render onto table
  const ListOfSpeakers = users.map((event) =>
    <tr>
      <td>{event.name}</td>
      <td>{event.role}</td>
      <td>{event.email}</td>
      <td>{event.phone}</td>
    </tr>
  );

  return (
    <div id="title-table-block">
      <h1>Registered Speakers</h1>
      <Nav.Link className="list-button" href="/profileedit">
        <Button >Register a New Speaker</Button>
      </Nav.Link>
      {/*Creates Table header and then inserts Data from DB into Table body */}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {ListOfSpeakers}
        </tbody>
      </Table>
    </div>
  );
};