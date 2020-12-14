import React, { useImperativeHandle } from "react";
import { Card, Button } from "react-bootstrap";

const SearchHit = (props) => {
return( 
    <Card>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Card.Title>{props.author}</Card.Title>
          <Card.Text>
            <p>Description: </p>
            {props.description}
          </Card.Text>
          <Card.Text>
            <p>Solution: </p>
            {props.solution}
          </Card.Text>
        </Card.Body>
      </Card>
 );
}
export default SearchHit;