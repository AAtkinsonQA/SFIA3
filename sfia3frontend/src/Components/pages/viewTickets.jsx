import React, { useState, useEffect } from "react";
import { Row, Col, Form, InputGroup, Button, Container, Tooltip, OverlayTrigger , Modal} from 'react-bootstrap';
import SiteNavbar from "../SiteNavbar";
import Ticket from "../Ticket";
import DetailedTicket from "../DetailedTicket";
import TicketInfo from "../Ticketinfo";
import axios from "axios";
import { PATH } from "../../constants.json";

const ViewTickets = () => {
  // pass function to check whether more info is clicked
  const [currentTicket, setCurrentTicket] = useState(``);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [topic, setTopic] = useState('Any');
  const [isCompleted, setCompleted] = useState(false);
  const [urgency, setUrgency] = useState('Any');
  const [reverse, setReverse] = useState(false);

  const handleSubmit = (event) => {
    const form = event.target;
    event.preventDefault();
    if (form.checkValidity() === false) {

        event.stopPropagation();
    }
};

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("api/readTickets/ticket/readTickets", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        // .then(res => res)
        .then(
          (response) => {
            setLoaded(true);
            setData(response.data);          },
          (error) => {
            setLoaded(true);
            setError(error);
          }
        );
    }, 2000);
  });

  const byTopic = output => data => data.topic === topic;
  let filteredList = data.filter(byTopic(data));

  let i = [];

  if (topic === "Any") {
    i = data
  }else {
    i = filteredList;
  }

  const byCompleted = output => i => i.status === isCompleted;
  let j = i.filter(byCompleted(i));

  const byUrgency = output => j => j.urgency === urgency;
  let k = j.filter(byUrgency(j))

  let filteredTickets = [];

  if (urgency === "Any") {
    filteredTickets = j;
  }else {
    filteredTickets = k;
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="shaded create" sm={4}>
            {currentTicket && <DetailedTicket stateQuery={currentTicket} />}
          </Col>
          <Col className="shaded create" sm={8}>
          <h3 >Ticket Filter</h3>
              <Form onSubmit={handleSubmit}>
                  <Form.Row>
                      <Form.Group as={Col} md="4" controlId="">
                          <Form.Label>Topic</Form.Label>
                              <Form.Control
                                        as="select"
                                        required
                                        name="topic"
                                        value={topic}
                                        onInput={e => setTopic(e.target.value)}>
                                        <option value="Any">Any</option>
                                        <option value="Git">Git</option>
                                        <option value="Markdown">Markdown</option>
                                        <option value="Jira">Jira</option>
                                        <option value="Java">Java</option>
                                        <option value="Python">Python</option>
                                        <option value="Maven">Maven</option>
                                        <option value="HTML_and_CSS">HTML & CSS</option>
                                        <option value="Springboot">SpringBoot</option>
                                        <option value="Javascript">Javascript</option>
                                        <option value="Bash">Bash</option>
                                        <option value="Docker">Docker</option>
                                        <option value="NGINX">NGINX</option>
                                        <option value="Jenkins">Jenkins</option>
                                        <option value="Ansible">Ansible</option>
                                        <option value="Terraform">Terraform</option>
                                        <option value="AWS">AWS</option>
                                        <option value="GCP">GCP</option>
                                        <option value="Prometheus">Prometheus</option>
                                        <option value="Kubernetes">Kubernetes</option>
                                        <option value="Agile">Agile</option>
                                        <option value="Jest">Jest</option>
                                        <option value="React">React</option>
                                    </Form.Control>
                                    </Form.Group>
                                    <Form>
                                    {['radio'].map((type) => (
                                      <div key={`default-${type}`} className="mb-3">
                                        <Form.Check 
                                          type={type}
                                          id={`default-${type}`}
                                          label={`Completed`}
                                          checked={isCompleted}
                                          onClick={e => setCompleted(!isCompleted)}>
                                          </Form.Check>
                                      </div>
                                    ))}
                                  </Form>
                                  <Form.Group as={Col} md="5" className="urgencyblock">
                                    <Form.Label>Urgency</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required
                                        name="urgency"
                                        value={urgency}
                                        onInput={e => setUrgency(e.target.value)}>
                                        <option value="Any">Any</option>
                                        <option value="low">Low (Not affecting your ability to work)</option>
                                        <option value="medium">Medium (Somewhat affecting your ability to work)</option>
                                        <option value="high">High (Critically affecting your ability to work)</option>
                                    </Form.Control>
                                </Form.Group>
                                {/* <Form>
                                    {['radio'].map((type) => (
                                      <div key={`default-${type}`}>
                                        <Form.Check 
                                          type={type}
                                          id={`toggle`}
                                          label={`old`}
                                          checked={reverse}
                                          onClick={e => setReverse(!reverse)}>
                                          </Form.Check>
                                      </div>
                                    ))}
                                  </Form> */}
                            </Form.Row>
                        </Form>
                        <h3>Tickets</h3>
            {filteredTickets.map((ticket) => (
              <Ticket
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                author={ticket.author}
                description={ticket.description}
                timeCreated={ticket.timeCreated}
                info={ticket}
                solution={ticket.solution}
                urgency={ticket.urgency}
                status={ticket.status}
                topic={ticket.topic}
                updateState={(event) => {
                  setCurrentTicket(event.currentTarget.value);
                  console.log({currentTicket});}
                }
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ViewTickets;
