import React, { useState } from 'react';
import ProfilePage from './ProfilePage.jsx';

export default function EventAttendees({ attendees }) {
  //creates attendee component for each attendee in list
  const [moreInfo, setMoreInfo] = useState('');
  const [isClicked, setClicked] = useState(false);
  let attendeesList = [];

  if (attendees) {
    attendeesList = attendees.map((attendee, index) => {
      return (
        <div className="attendeeInfo" key={`EventAttendees${index}`}>
          <div className="circular">
            <button
              onClick={() => {
                setClicked(!isClicked);
                setMoreInfo(attendee);
              }}
            >
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

      {isClicked && <ProfilePage attendee={moreInfo} />}
    </div>
  );
}
