import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Instructions = (props) => {
  return (
    <Row id='rowHow'>
      <Col id= "howToPlay" sm="6">
        <Card body inverse color="info" >
          <CardTitle><h3>How to Play</h3></CardTitle>
          <CardText><h4>The object of the game is to create a Solve for an existing issue using the items on the Game Card. Each card will contain three items, Material, Thing, and Issue.
          <hr></hr>
          Players will take turns judging the other players&apos; answers to determine a winner. The other non-judging players will attempt to combine the Material and Thing to create a Solve for the Issue at hand.</h4></CardText>

        </Card>
      </Col>
    </Row>
  );
};

export default Instructions;
