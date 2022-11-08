import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab, } from 'react-bootstrap'
import Log_pol from '../Components/Log_pol'
import Regis_pol from '../Components/Regis_pol'

export default class Login extends Component {
  render() {
    return (
      <>
        <style>
          {`
            .main{
              display:flex;
              justify-content: space-around;
            }
            .row_t{
              display:flex;
              justify-content: space-around;
              width: 400px;
            }
            .tabs{
              font-size: 20px;
              height: 100px;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
            }
            .tabs a{
                color: Blue;
                font-weight: bolt;
                text-decoration: none;
                padding: 10px 15px;
            }
            .tabs a:active{
              color: white;
              background:rgb(247, 161, 2);
            }
            .content{
              border: 1px solid red;
              border-radius: 10px;
              background: linear-gradient(to top left, rgb(255, 162, 162), rgb(248, 207, 131));
              min-height: 550px;
              width: 400px;
              margin-bottom: 50px;
            }
          `}
        </style>
        <Container className='main'>
          <div>
            <Tab.Container id="Tabs-login-register" defaultActiveKey='login' >
              <Col>
                <Row className='row_t'>
                  <Nav variant='pills' className=' mt-2 row_t'>
                    <Nav.Item className='tabs'>
                      <Nav.Link eventKey="login" > Log in</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='tabs'>
                      <Nav.Link eventKey="register" >Registration</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Row>
                <Row>
                  <Tab.Content className='content'>
                    <Tab.Pane eventKey='login'>
                      <Log_pol />
                    </Tab.Pane>
                    <Tab.Pane eventKey='register'>
                      <Regis_pol />
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Col>
            </Tab.Container>
          </div>
        </Container>

      </>
    )
  }
}
