import React from 'react';

export default function ProfilePage({ attendee }) {
  return (
    <div className="attendeesContainer">
      <h5>More Info:</h5>
      <div className="attendees">
        <p>
          Name: {attendee.firstname} {attendee.lastname}
          <br />
          Username: {attendee.username}
          <br />
          Status: {attendee.userstatus}
        </p>
      </div>
    </div>
  );
}
