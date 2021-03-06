import React, { useState, useEffect } from 'react';
import Profile from './Profile.jsx';
import EventsFeed from './EventsFeed.jsx';
import Notnav from './Navbar.jsx';
import axios from 'axios';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import AddSearchEvent from './AddSearchEvent.jsx';

// Implemented with hooks throughout
export default function MainContainer() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [forceReset, setForceReset] = useState(0);
  // const [events, setDeleteEvents] = useState(false)
  //pull user data after OAuth login - all variables are named from SQL DB columns
  useEffect(() => {
    console.log('new console log')
    console.log('useEffect is firing:', events);
    axios.get(`/api/info?userName=${userName}`).then((res) => {
      let userInfo = {
        username: res.data.users.username,
        firstname: res.data.users.firstname,
        lastname: res.data.users.lastname,
        profilephoto: res.data.users.profilephoto,
        userstatus: res.data.users.userstatus,
      };
      let eventsInfo = res.data.events;
      let imageInfo = res.data.events.map;
      setUser(userInfo);
      setEvents(eventsInfo);
      setUserName(res.data.users.username);
      setLoggedIn(true);
    });
  }, []);

  // another function could fetch user name and events / state

  //updates username when a different user is selected
  function handleUserPageChange(username) {
    setUserName(username);
  }
  //handles the state change and posts to database on event creation
  function handleCreateEvent(event) {
    console.log('handCreateEvent is firing:', event);
    let {
      eventtitle,
      eventlocation,
      eventdate,
      eventstarttime,
      eventdetails,
      imageurl,
    } = event;
    axios
      .post(`/api/create?userName=${userName}`, {
        eventtitle,
        eventlocation,
        eventdate,
        eventstarttime,
        eventdetails,
        imageurl,
      })
      .then((res) => {});
    event.attendees = [
      {
        username: user.username,
        profilephoto: user.profilephoto,
      },
    ];
    const newEvents = [event].concat(events);
    setEvents(newEvents);
  }
  //handles the state change and posts to database on search event add
  function handleSearchEvent(event) {
    console.log('handleSearchEvent:', event)
    // ADD
    axios.post(`/api/add?eventtitle=${event.eventtitle}`).then((res) => {
      event.attendees.push({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        profilephoto: user.profilephoto,
      });
      const newEvents = [event].concat(events);
      setEvents(newEvents);
    });
  }

  const deleteEvent = async (id) => {
    try {
      console.log('THIS is the id youre deleting' + id);
      const deleteEvent = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
        //  headers: { "Content-Type": "application/json" },
        // credentials: "include",
      });
      console.log(deleteEvent);
      setEvents(events.filter((event) => event.eventid !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateEvent = (event) => {
    let {
      eventtitle,
      eventlocation,
      eventdate,
      eventstarttime,
      eventdetails,
    } = event;
    console.log(eventitle);

    //correspond with the userid here and then use the fetch request to update the user events
  };

  return (
    <div className="myContainer">
      <Notnav loggedIn={loggedIn} />
      {!loggedIn && (
        <div className="container">
          <Container className="header">
            Please Log In To Continue To Site
          </Container>
        </div>
      )}
      {loggedIn && (
        <div className="container">
          <Container className="header">
            <Profile {...user} />
            <AddSearchEvent
              addEvent={handleCreateEvent}
              searchEvent={handleSearchEvent}
              events={events}
            />
          </Container>
          <EventsFeed
            deleteEvent={deleteEvent}
            events={events}
            userUpdate={handleUserPageChange}
          />
          {/* <UpdatedEvent updated={updateEvent} /> */}
        </div>
      )}
    </div>
  );
}
