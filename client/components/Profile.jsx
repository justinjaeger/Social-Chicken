import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Profile(props) {
  const [isClicked, setClicked] = useState(false);
  return (
    <div className="profile">
      <button onClick={() => setClicked(!isClicked)}>
        <img src={props.profilephoto} />
      </button>

      <Card.Body>
        <Card.Title>
          Welcome {props.firstname} {props.lastname}!
        </Card.Title>
        <Card.Text>{props.username}</Card.Text>
        {isClicked && (
          <Card.Text>
            <form>
              Set status: <input type="text"></input>
              <Button style={{ margin: '1em' }} variant="primary" type="submit">
                Add Status
              </Button>
            </form>
          </Card.Text>
        )}
      </Card.Body>
    </div>
  );
}
