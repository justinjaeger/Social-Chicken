import React, { useState, useEffect } from 'react';
import EventAttendees from './EventAttendees.jsx';
import Content from './Content.jsx';
import { ListGroup, Container, Row, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

export default function Event(props) {
  function handleClose() {
    console.log(props.eventid);
  }
  console.log('PROPS IN EVENT', props)
  // const imageSrcData = props.image
  //   ? btoa(String.fromCharCode(...new Uint8Array(props.image.data)))
  //   : null;

  return (
    <>
      <b className="hr anim"></b>
      <div className="event">
        <Container>
          <Button
            variant="secondary"
            onClick={() => props.deleteEvent(props.eventid)}
          >
            Delete Post
          </Button>

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
            {props.imageurl && (
              <img
                src={props.imageurl}
                onError = {() => console.log('ERROR')}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            )}
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