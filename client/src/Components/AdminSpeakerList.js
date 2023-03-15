import React from "react";

//Import DummyData for users
import UserData from "../Dummy Data/UserData";

//Import Table and Nav
import Table from 'react-bootstrap/Table'
import { Button, Nav } from "react-bootstrap";

export const SpeakerList = () => {

  const ListOfSpeakers = UserData.map((event) =>
    <tr>
      <td>{event.name}</td>
      <td>{event.role}</td>
      <td>{event.email}</td>
      <td>{event.avescore}</td>
    </tr>
  );

  return (
    <div id="title-table-block">
      <h1>Registered Speakers</h1>
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
      <Nav.Link className="list-button" href="/profileedit">
        <Button >Register a New Speaker</Button>
      </Nav.Link>
    </div>
  );
};