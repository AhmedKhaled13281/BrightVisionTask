import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row , Col , Container} from 'react-bootstrap';

const CardItem = ({title , price , description , category , image }) => {
  return (

    <Card style={{ width: '18rem' , margin : 'auto'}}>
      <Card.Img variant="top" style={{height : "250px"}} src={image} />
      <Card.Body>
        <Card.Title style={{height : "50px"}}>{title.slice(0 , 20)}</Card.Title>
        <Card.Text style={{height : "100px" , overflowY : 'scroll'}}>
            {description}
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default CardItem