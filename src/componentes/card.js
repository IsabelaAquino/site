import React from 'react';
import { Card, Button} from 'react-bootstrap';
import logotipo from "../img/logotipo.jpeg"

// import { Container } from './styles';

function card(props) {
  return <Card style={{ width: '22rem', marginRight:"20px"}}>
  <Card.Img variant="top" src={logotipo} />
  <Card.Body style={{overflowY:"scroll"}}>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text style={{textAlign: 'justify'}}>{props.texto} </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
}

export default card;