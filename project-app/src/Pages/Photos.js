import React, { Component } from 'react'
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap'
import ph1 from '../images/photo1.jpg'
import ph2 from '../images/photo2.jpg'
import ph3 from '../images/photo3.jpg'

export default class About extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                .main{
                    padding-top: 100px;
                    padding-bottom: 100px;
                }
                .photo{
                    background: linear-gradient(to top left, rgb(255, 162, 162), rgb(248, 207, 131));
                    border-radius: 30px;
                    padding: 25px;
                    height: 650px;
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    text-align: center;
                    align-items: center;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.575);
                    transition: 0.5s;
                }
                .photo img{
                    border-radius: 20px;
                }
                .photo p{
                    color: black;
                    font-weight: bold;
                    text-decoration: underline;
                    font-size: 20px;
                }
                .photo button{
                    width: 150px;
                    background-color: white;
                    border: none;
                    height: 40px;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: 0.5s;
                }
                .photos{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .photo button:hover{
                    background-color: black;
                    color: white;
                }
                .text_ph{
                    text-align: right;
                    margin-bottom: 50px;
                    color: rgb(199, 0, 0);
                    text-shadow: 3px 3px 0px rgb(247, 161, 2);
                    font-size: 50px;
                    text-decoration: underline;
                }
                .photo:hover{
                    transform: scale(1.1);
                }
            `}
                </style>
                <Container className='main'>
                    <h1 className="text_ph">PHOTOS FROM OUR GAMES:</h1>
                    <div className="photos">
                        <div className="photo">
                            <p>Marvel vs DC</p>
                            <img src={ph1} alt="" width="100%" />
                            <p>July 21, Thursday 19:00</p>
                            <button>OPEN ALNUM</button>
                        </div>
                        <div className="photo">
                            <p>Harry Potter</p>
                            <img src={ph2} alt="" width="100%" />
                            <p>September 22, Thursday 19:30</p>
                            <button>OPEN ALBUM</button>
                        </div>
                        <div className="photo">
                            <p>Movies</p>
                            <img src={ph3} alt="" width="100%" />
                            <p>August 11, Thursday 19:30</p>
                            <button>OPEN ALBUM</button>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}
