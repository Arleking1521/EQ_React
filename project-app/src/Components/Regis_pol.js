import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Regis_pol extends Component {
    render() {
        return (
            <>
            <style>
                {`
                    .text{
                        font-size:20px;
                    }
                    .button{
                        color: rgb(247,161,2);
                    }
                `}
            </style>
                <Form className='text'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="surname" placeholder="Enter your surname" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password1" placeholder="Password" />
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password2" placeholder="Repeat password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registration
                    </Button>

                </Form>
            </>
        )
    }
}
