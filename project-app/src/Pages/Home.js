import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../images/logo.png';
import Pop_up from '../Components/Pop_up';

import HP from '../images/Harry.jpg';
import Scrubs from '../images/scrubs.jpg';
import Helloween from '../images/Helloween.png';
import ff from '../images/ff.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <style type='text/css'>
          {`
            
            .name_logo{
              display: flex;
              justify-content: space-around;
              align-content: center;
              margin-bottom: 50px;
              color: var(--p);
            }
            .name{
              font-size: 125px;
              font-weight: 900;
              font-style: italic;
              color: rgb(199, 0, 0);
              text-shadow: 5px 5px 0px rgb(247, 161, 2);
              text-decoration: underline;
              padding-bottom: 50px;
            }
            .Wiaq{
              font-size: 25px; 
              padding-left: 30px;
            }
            main{
              padding-right: 20%;
              padding-left: 20%;
              padding-top: 50px;
              padding-bottom: 50px;
              background-color: rgb(250, 250, 250);
            }
            .future_games{
              min-height: 600px;
              width: 100%;
              height: 100%;
            }
            .f_games{
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100px;
              text-align: center;
              font-size: 50px;
              font-weight: 700;
              color: rgb(199, 0, 0);
              text-shadow: 3px 3px 0px rgb(247, 161, 2);
              margin-bottom: 50px;
            }
            .games_all{
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            .games{
              height: 300px;
              width: 200px;
              transition: 1s;
              box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
              z-index:9;
              box-shadow: 10px 10px 0px rgb(247, 161, 2), -10px -10px 0px rgb(199, 0, 0);
            }
            .games:active{
              transform: scale(2.0);
              overflow: hidden;
                z-index:9;
            }
            .game{
              width: 100%;
              height:100%;
            }
            .buttons{
              display: flex;
              justify-content: space-around;
              margin-top: 60px;
              z-index: -99999999;
            }
            .log_in{
              padding: 0 20px 0 20px;
              border-radius: 25px;
              border: none;
              position: relative;
              background: black;
              color: white;
              height: 8%;
              font-size: 15px;
              font-weight: 900;
              cursor: pointer;
              height: 50px;
              transition: 0.5s;
            }
            .log_in:hover{
              background: rgb(247, 161, 2);
                color: black;
            }
          `}
        </style>

        <Container className='main'>
          <div className='name_logo'>
            <div>
              <h1 className="name" >EAZY QUIZY</h1>
              <p className='Wiaq'>What is a quiz?
                In a nutshell, this is an intellectual and entertaining competition.
                Thematic, classical, musical, movie or sports quiz.
                You are asked questions and you answer them, the more correct answers, the more chances to win.</p>
            </div>
            <div>
              <img
                src={Logo}
                height="370px"
                width="370px"
                alt="Logo"
              />
            </div>
          </div>
          <div className="future_games">
            <div className="f_games">GAMES:</div>
            <div className="games_all">
              <div className="games"><img src={Scrubs} className="game" /></div>
              <div className="games"><img src={Helloween} className="game" /></div>
              <div className="games"><img src={HP} className="game" /></div>
              <div className="games"><img src={ff} className="game" /></div>
            </div>
            <div className='buttons'>
              <Pop_up name='Scrubs' />
              <Pop_up name='Helloween Quiz' />
              <Pop_up name='Harry Potter' />
              <Pop_up name='Fast&Furius' />
            </div>

          </div>


        </Container>
      </>
    )
  }
}
