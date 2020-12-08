import React from "react";
import {Card, Button} from "react-bootstrap";

const Ticket = (props) => {
  const ticketinfo = props.info;

   //temporary date
  let stringDate = props.timeCreated;
  let formattedDate = stringDate.replace("T"," ").slice(0,19);

  const updateState=props.updateState;
  console.log(updateState);

  let id = props.id;
  console.log(props.id);
  console.log(id);


  return (
    <>
      <Card>
        <Card.Header as="h5">{formattedDate}</Card.Header>
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
