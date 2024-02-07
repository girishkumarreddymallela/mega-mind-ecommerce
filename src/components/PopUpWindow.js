// PopUpWindow.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function PopUpWindow({ show, handleClose, setseller }) {
  // state for storing the form input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [address, setAddress] = useState("");

  // handler function for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data, such as sending it to a server
    console.log(name, phone, business, address);
    setseller("seller place");
    // close the pop-up window
    handleClose();
  };

  return (
    <>
      {/* the pop-up window component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register as a seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* a form to collect the seller's details */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="business">
              <Form.Label>Business name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your business name"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Shop address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your shop address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUpWindow;
