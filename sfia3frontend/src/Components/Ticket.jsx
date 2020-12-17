import React, { useImperativeHandle } from "react";
import { Card, Button, Badge, Row, Col, Container } from "react-bootstrap";
import axios from 'axios';
import { PATH } from '../constants.json';


const Ticket = (props) => {
  const ticketinfo = props.info;
  // let stringDate = props.timeCreated;
  // let formattedDate = stringDate.replace("T"," ").slice(0,19);
  const updateState = props.updateState;

  let id = props.id;
  // console.log(props.id);
  // console.log(id);
  const handleSubmit = (event) => {
    axios.delete('api/deleteTicket/ticket/deleteTicket/' + props.id).then(response => {
      console.log(response);
    });
  }
  var urgency = props.urgency
  var textUrgency = props.urgency
  if (props.urgency === "low") {
    urgency = "primary";
  }
  if (props.urgency === "medium") {
    urgency = "warning";
  }
  if (props.urgency === "high") {
    urgency = "danger";
  }
  if (props.urgency === "low") {
    textUrgency = "Low Urgency";
  }
  if (props.urgency === "medium") {
    textUrgency = "Medium Urgency";
  }
  if (props.urgency === "high") {
    textUrgency = "High Urgency";
  }
  var resolved = props.status
  var textResolve = props.status
  if (props.status === true) {
    resolved = "success";
    textResolve = "Resolved"
  }
  if (props.status === false) {
    resolved = "light";
    textResolve = "No Solution"
  }
  let minute = ""
  if (props.timeCreated[4] < 10) {
    minute = "0"+props.timeCreated[4].toString()
  } else {
    minute = props.timeCreated[4]
  }
  return (
    <>
      <Card border="secondary" >
        <Card.Header as="h4">
          <Row>
            <Col sm={8}>
              {props.title}
            </Col>
            <Col class="authorDate" sm={4}>
              <Row>
              </Row>
              <Row>
              {props.timeCreated[3]}:{minute} <br/>{props.timeCreated[2]}/{props.timeCreated[1]}/{props.timeCreated[0]}
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Card.Text>
                <h5 class="author">{props.author}
                </h5>
                <br></br>
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                <h5>
                  <Badge pill variant={urgency}>{textUrgency} </Badge>{' '}
                  <Badge pill variant="dark">{props.topic} </Badge>{' '}
                  <Badge pill variant={resolved}>{textResolve} </Badge>{' '}
                </h5>
              </Card.Text>
            </Col>
            <Col>
              <div class="cardButton">
                <Button style={{ marginRight: "1em" }} onClick={handleSubmit} variant="danger">Delete</Button>
                <Button style={{ marginRight: "1em" }} value={id} variant="primary" onClick={updateState}>More Information</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br></br>
    </>
  );
};
export default Ticket;