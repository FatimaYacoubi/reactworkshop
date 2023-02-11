import {Button, Col, Row} from 'react-bootstrap';
import placeholder from '../assets/images/placeholder.jpg';
import { React,Component } from 'react';
import { Card } from 'react-bootstrap';
class Product extends React.Component{
  render()
  {return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
          Quantité
          </Card.Text>
          <Card.Text>
          Prix
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );}
}

export default Product;
