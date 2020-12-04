import React from "react";
import {Card, Button} from "react-bootstrap";

const Ticket = (props) => {
  const ticketinfo = props.info;
  console.log(props.info);

  const date = new Date(Date.now())
  let stringDate = date.toString();

  return (
    <>
      <Card>
        <Card.Header as="h5">{stringDate.slice(0,28)}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.author}
          </Card.Text>
          <Button variant="primary">More Information</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Ticket;
