import React, { useState } from "react";

import UserData from "../../Dummy Data/UserData";
import Table from 'react-bootstrap/Table'

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
    <div>
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
    </div>
  );
};