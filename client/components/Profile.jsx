import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

export default function Profile(props) {
  const [isClicked, setClicked] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setStatus({
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(status.status);

    try {
      const response = await fetch('/api/status', {
        method: 'POST',
        body: JSON.stringify({
          status: status.status,
          username: props.username,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      setClicked(false);
    } catch (error) {
      console.log('Error in handleSubmit of profile:', error);
    }
  };

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
        {props.userstatus && <Card.Text>Status: {props.userstatus}</Card.Text>}
        {isClicked && (
          <Card.Text>
            <Form>
              <Form.Group controlId="formStatus">
                <Form.Label> Set status:</Form.Label>
                <Form.Control
                  name="status"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Status"
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                style={{ margin: '1em' }}
                variant="primary"
                type="submit"
              >
                Add Status
              </Button>
            </Form>
          </Card.Text>
        )}
      </Card.Body>
    </div>
  );
}
