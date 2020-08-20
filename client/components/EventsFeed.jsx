import React, { useState, useEffect } from 'react';
import Event from './Event.jsx';

export default function EventsFeed(props) {
  let events = [];
  //creates events for each event in feed
  if (props.events && Object.keys(props.events).length > 0) {
    events = props.events.map((event, index) => {
      return (
        <Event
          deleteEvent={props.deleteEvent}
          {...event}
          userUpdate={props.userUpdate}
          key={`EventsFeed${index}`}
          imageurl={props.events[0].imageurl}
        />
      );
    });
  }
  return <div className="events">{events}</div>;
}
