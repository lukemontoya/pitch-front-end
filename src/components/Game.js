import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import HomeNav from './HomeNav';
import GameCard from './GameCard';
import Websockets from './Websockets'

const Game = (props) => {
  return(
    <div>
      <HomeNav />
      <Container >
        <Row >
          <Col id= "gameCard" xs="4">
            <GameCard />
          </Col>
          <Col xs="8">
            <Websockets />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Game
