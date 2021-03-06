import React, { useState } from 'react';

import DateTimePicker from 'react-datetime-picker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Form } from 'react-bootstrap';

export default function CreateEvent({ addEvent }) {
  /* Form data */
  const initialFormData = Object.freeze({
    eventtitle: '',
    eventlocation: '',
    eventdetails: '',
    imageurl: null,
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [dateTime, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  //const [image, setImage] = useState([]);
  //console.log('image:', image);
  //handles any change tot he form and updates the state
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  //handles submit event - create date and time and append to the event object
  const handleSubmit = async (e) => {
    console.log('formData:',formData)
    e.preventDefault();
    const eventdate = dateTime.toDateString();
    let time = dateTime.toTimeString();
    let eventstarttime = time.split(' ')[0];

    // const imageBytes = await fetch(
    //   document.createElement('canvas').toDataURL(imageString),
    // ).then((response) => response.arrayBuffer());
    // ... submit to API or something
    addEvent({ ...formData, eventdate, eventstarttime });
    //console.log(uploadedImageRef.current);
    //fetch();

    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const uploadedImageRef = React.useRef(null);

  // const handleImageUpload = (e) => {
  //   const [file] = e.target.files;
  //   if (file) {
  //     const reader = new FileReader();
  //     const { current } = uploadedImageRef;
  //     current.file = file;
  //     reader.onload = (e) => {
  //       current.src = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  //   //console.log(uploadedImageRef.current);
  // };

  return (
    <div>
      <div className="cardContainer" onClick={handleShow}>
        <FontAwesomeIcon className="mx-auto faPlus" icon={faPlus} size="4x" />
        <p>Add Event</p>
      </div>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                name="eventtitle"
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group controlId="formEventLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="eventlocation"
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter location"
              />
            </Form.Group>

            <Form.Group controlId="formEventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                name="eventdetails"
                onChange={handleChange}
                required
                as="textarea"
                placeholder="Enter description"
              />
            </Form.Group>

            <Form.Group controlId="formEventDescription">
              <Form.Label>Start Date & Time</Form.Label>
              <DateTimePicker onChange={onChange} value={dateTime} />
            </Form.Group>

            <Form.Group controlId="formImageUrl">
              <Form.Label>Image URL (optional)</Form.Label>
              <div>
                <input type="text" name="imageurl" onChange={handleChange} />
                <img />
              </div>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
