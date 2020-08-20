import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProfilePage({ attendee }) {
  return (
    <div className="attendeesContainer">
      <h5>More Info:</h5>
      <div className="attendees">
        <p>
          Name: {attendee.firstname} {attendee.lastname}
          <br />
          Username: {attendee.username}
        </p>
      </div>
    </div>
  );
}
