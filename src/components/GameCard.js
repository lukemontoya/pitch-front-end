import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

 const GameCard = (props) => {
  return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardTitle><h3>Material: Wood</h3></CardTitle>
      <CardTitle><h3>Thing: Table</h3></CardTitle>
      <CardTitle><h3>Issue: With supporting text below as a natural lead-in to additional content.</h3></CardTitle>
      <Button>Button</Button>
    </Card>
  );
};

export default GameCard;
