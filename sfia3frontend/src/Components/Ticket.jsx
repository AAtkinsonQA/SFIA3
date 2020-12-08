import React, { useImperativeHandle } from "react";
import { Card, Button } from "react-bootstrap";
import axios from 'axios';
import { PATH } from '../constants.json';

const Ticket = (props) => {
  const ticketinfo = props.info;

  const date = new Date(Date.now()) //temporary date
  let stringDate = date.toString();

  const updateState = props.updateState;
  console.log(updateState);

  let id = props.id;
  console.log(props.id);
  console.log(id);

  const handleSubmit = (event) => {
    axios.delete(PATH + '/deleteTicket/' + props.id).then(response => {
      console.log(response);
      window.location.reload(false);
    });
  }
  return (
    <>
      <Card>
        <Card.Header as="h5">{stringDate.slice(0, 28)}</Card.Header>
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
