import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Logo from '../images/logo.png'

export default class Contacts extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                    main{
    
                        padding-right: 20%;
                        padding-left: 20%;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background-color: rgb(250, 250, 250);
                    }
                    .frame{
                        position:relative;
                    }
                    .aframe1
                    {
                        color:#eee;
                        font-size:12px;
                        position:absolute;
                        top:0px;
                    }
                    .aframe2{
                        color:#eee;
                        font-size:12px;
                        position:absolute;
                        top:14px;
                    }
                    .frdivst{
                        position:relative;
                        overflow:hidden; 
                        width: 560px;
                        height: 400px;
                        margin: 20px
                    }
                    .map{
                        box-shadow: 10px 10px 0px rgb(247, 161, 2), -10px -10px 0px rgb(199, 0, 0);
                    }
                    .name_logo{
                        display: flex;
                        justify-content: space-around;
                        align-content: center;
                        margin-bottom: 50px;
                        color: var(--p);
                    }
                    .name{
                        font-size: 100px;
                        font-weight: bold;
                        font-style: italic;
                        color: rgb(199, 0, 0);
                        text-shadow: 5px 5px 0px rgb(247, 161, 2);
                        text-decoration: underline;
                    }
                    .logo{
                        display: flex;
                        align-items: center;
                    }
                    .ash{
                        margin-top: 0px;
                    }
                    .fs{
                        font-Size: 70px;
                    }
                }
            `}
                </style>
                <main>
                    <div className="name_logo">
                        <div>
                            <h1 className="name ash">EAZY QUIZY</h1>
                            <div className="map frdivst">
                                <a className='aframe1' href="https://yandex.kz/maps/org/1016114729/?utm_medium=mapframe&utm_source=maps">Международный университет информационных технологий</a>
                                <a className='aframe2' href="https://yandex.kz/maps/162/almaty/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps">ВУЗ в Алматы</a>
                                <iframe src="https://yandex.kz/map-widget/v1/-/CCUZBSSMXC" width="560" height="400" frameborder="0" allowfullscreen="true" title="myFrame" className='frame'></iframe>
                            </div>
                            <p>Almaty, 34A Manas str.</p>
                        </div>
                        <div className="logo"> <img src={Logo} alt="" /> </div>
                    </div>
                    <h1 className="name ash fs">CONTACT US:</h1>
                    <p>E-mail: eazyquizy@quiz.com</p>
                    <p>Phone Number: +7 (727) 320-00-00</p>
                </main>
            </>
        )
    }
}
