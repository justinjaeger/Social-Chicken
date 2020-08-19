import React, { useState, useEffect } from 'react';
import EventAttendees from './EventAttendees.jsx';
import Content from './Content.jsx';
import { ListGroup, Container, Row, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function Event(props) {
  function handleClose() {
    console.log(props.eventid);
  }

  // const imageSrcData = props.image
  //   ? btoa(String.fromCharCode(...new Uint8Array(props.image.data)))
  //   : null;

  return (
    <>
      <b className="hr anim"></b>
      <div className="event">
        <Container>
          <button
            className="mb-3"
            onClick={() => props.deleteEvent(props.eventid)}
          >
            Delete Post
          </button>

          <Jumbotron fluid>
            <Container className="eventJumbotron">
              <h1>{props.eventtitle}</h1>
              <h4>
                {props.eventdate} - {props.starttime}
              </h4>
              <h4>
                Location <FontAwesomeIcon icon={faLocationArrow} size="1x" /> :{' '}
                {props.eventlocation}
              </h4>
              <p>{props.eventdetails}</p>
            </Container>
          </Jumbotron>
          <div className="myCol">
            {
              <img
                src={props.imageurl}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            }
          </div>
          <Container>
            <EventAttendees {...props} userUpdate={props.userUpdate} />
          </Container>
          <Content {...props} />
        </Container>
      </div>
    </>
  );
}
