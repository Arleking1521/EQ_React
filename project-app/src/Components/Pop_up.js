import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Pop_up(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            
                <button className="log_in" onClick={handleShow}>BOOKING</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration to game {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your team name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="city"
                                placeholder="Enter your city"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Enter your phone number"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save information
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop_up;