import React from 'react';
import {connect} from 'react-redux';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

 const GameCard = (props) => {

   let randomizer = Math.floor(Math.random() * Math.floor(props.cards.length))
   let materialCard = {...props.cards[randomizer]}
   let randomizer1 = Math.floor(Math.random() * Math.floor(props.cards.length))
   let thingCard = {...props.cards[randomizer1]}
   let randomizer2 = Math.floor(Math.random() * Math.floor(props.cards.length))
   let issueCard = {...props.cards[randomizer2]}

  return (
    <Card body inverse color="info">
      <CardTitle><h2>Pitch This!</h2></CardTitle>
      <CardTitle><h4>Material: {materialCard.material}</h4></CardTitle>
      <CardTitle><h4>Thing: {thingCard.object}</h4></CardTitle>
      <CardTitle><h4>Issue: {issueCard.issue}</h4></CardTitle>

    </Card>
  );
};

const mapStateToProps = state => ({
  cards: state.cards
})
export default connect (mapStateToProps, null)(GameCard)
