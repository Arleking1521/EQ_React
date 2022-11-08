import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Logo from '../images/logo.png'

export default class Log_pol extends Component {
    render() {
        return (
            <>
                <style>
                    {`
                        .back_img{
                            margin-left:21%;
                            width:200px;
                            filter: opacity(50%);
                        }
                        .text{
                            font-size:20px;
                        }
                    `}
                </style>
                <Form className='text'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>

                </Form>
                <img src={Logo} className='back_img' />
            </>
        )
    }
}
