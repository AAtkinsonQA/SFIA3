import React, { useImperativeHandle } from "react";
import { Card, Button } from "react-bootstrap";
import axios from 'axios';
import { PATH } from '../constants.json';

const Ticket = (props) => {
  const ticketinfo = props.info;

  // let stringDate = props.timeCreated;
  // let formattedDate = stringDate.replace("T"," ").slice(0,19);

  const updateState = props.updateState;
  console.log(updateState);

  let id = props.id;
  console.log(props.id);
  console.log(id);

  const handleSubmit = (event) => {
    axios.delete(PATH + '/deleteTicket/' + props.id).then(response => {
      console.log(response);
    });
  }
  return (
    <>
      <Card>
        <Card.Header as="h5">{props.timeCreated}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.author}
          </Card.Text>
          <div>
            <Button style={{ marginRight: "2em" }} value={id} variant="primary" onClick={updateState}>More Information</Button>
            <Button onClick={handleSubmit} variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default Ticket;
