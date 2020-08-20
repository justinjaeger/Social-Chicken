import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProfilePage({ attendees }) {
  let attendeesList = [];
  if (attendees) {
    attendeesList = attendees.map((attendee, index) => {
      return (
        <div className="attendeeInfo" key={`EventAttendees${index}`}>
          <p>
            Name: {attendee.firstname} {attendee.lastname}
          </p>
          <p>Username: {attendee.username}</p>
        </div>
      );
    });
  }

  return (
    <div className="attendeesContainer">
      <h5>More Info:</h5>
      <div className="attendees">{attendeesList}</div>
    </div>
  );
}
