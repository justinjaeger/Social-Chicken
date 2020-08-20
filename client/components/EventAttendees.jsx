import React, { useState, useEffect } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
//import { Switch, Link, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage.jsx';

export default function EventAttendees({ attendees, userUpdate }) {
  //creates attendee component for each attendee in list
  const [isClicked, setClicked] = useState(false);
  let attendeesList = [];

  if (attendees) {
    attendeesList = attendees.map((attendee, index) => {
      return (
        <div className="attendeeInfo" key={`EventAttendees${index}`}>
          <div className="circular">
            <button onClick={() => setClicked(!isClicked)}>
              <img src={`${attendee.profilephoto}`} />
            </button>
          </div>
          <p>{attendee.firstname}</p>
        </div>
      );
    });
  }

  return (
    <div className="attendeesContainer">
      <h5>Attendees:</h5>
      <div className="attendees">{attendeesList}</div>

      {isClicked && <ProfilePage attendees={attendees} />}
    </div>
  );
}
