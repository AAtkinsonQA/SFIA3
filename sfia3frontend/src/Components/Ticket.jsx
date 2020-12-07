import React from "react";
import {Card, Button} from "react-bootstrap";

const Ticket = (props) => {
  const ticketinfo = props.info;

  const date = new Date(Date.now()) //temporary date
  let stringDate = date.toString();

  const updateState=props.updateState;
  console.log(updateState);

  const id = props.key;
  console.log(props.key)
  return (
    <>
      <Card>
        <Card.Header as="h5">{stringDate.slice(0,28)}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.author}
          </Card.Text>
          <div>
          <Button style = {{marginRight:"2em"}} value={id} variant="primary" onClick={updateState}>More Information</Button>
          <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default Ticket;
