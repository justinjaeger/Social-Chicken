import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

export default function Profile(props) {
  // const [isClicked, setClicked] = useState(false);
  return (
    <div className="profile">
      <img src={props.profilephoto} />

      <Card.Body>
        <Card.Title>
          Welcome {props.firstname} {props.lastname}!
        </Card.Title>
        <Card.Text>{props.username}</Card.Text>
      </Card.Body>
    </div>
  );
}
