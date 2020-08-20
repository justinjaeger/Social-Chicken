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
  // const [forceReset, setForceReset] = useState(0);
  // const [events, setDeleteEvents] = useState(false)
  //pull user data after OAuth login - all variables are named from SQL DB columns
  useEffect(() => {
    console.log('useEffect is firing');
    axios.get(`/api/info?userName=${userName}`).then((res) => {
      let userInfo = {
        username: res.data.users.username,
        firstname: res.data.users.firstname,
        lastname: res.data.users.lastname,
        profilephoto: res.data.users.profilephoto,
      };
      let eventsInfo = res.data.events;
      //let imageInfo = res.data.events.map;
      setUser(userInfo);
      setEvents(eventsInfo);
      setUserName(res.data.users.username);
    });
  }, []);
  //updates username when a different user is selected
  function handleUserPageChange(username) {
    setUserName(username);
  }
  //handles the state change and posts to database on event creation
  function handleCreateEvent(event) {
    //console.log('handCreateEvent is firing:', event);
    // let randomNum = Math.floor(Math.random() * 10000);
    // setForceReset(randomNum);
    let {
      eventtitle,
      eventlocation,
      eventdate,
      eventstarttime,
      eventdetails,
      imageUrl,
    } = event;
    axios
      .post(`/api/create?userName=${userName}`, {
        eventtitle,
        eventlocation,
        eventdate,
        eventstarttime,
        eventdetails,
        imageUrl,
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

  return (
    <div className="myContainer">
      <Notnav />
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
      </div>
    </div>
  );
}
