import React, { useState, useEffect } from "react";
import { Button, Container, Modal, Row, Col, Form, Card } from 'react-bootstrap';
import { SERVICE_ID } from '../../serviceid.json'
import { TEMPLATE_ID } from '../../templateid.json'
import { USER_ID } from '../../userid.json'
import emailjs from 'emailjs-com';
import Ticket from "../Ticket";
import DetailedTicket from "../DetailedTicket";
import axios from "axios";
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Query Submitted!
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Your query has been sent to our QA Ticketing admin team.</h4>
                <p>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
const ContactUs = () => {
    const [validated, setValidated] = useState(false);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [currentTicket, setCurrentTicket] = useState(``);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            axios
                .get("http://localhost:8080/ticket/readTickets", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                })
                // .then(res => res)
                .then(
                    (response) => {
                        setLoaded(true);
                        setData(response.data);
                    },
                    (error) => {
                        setLoaded(true);
                        setError(error);
                    }
                );
        }, 2000);
    });
    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setModalShow(true);
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="shaded create" sm={4}>
                        <h1>Contact Us
            
                        </h1>
                        <div class="meetTeam"><p>Thankyou for using the QA Community Ticketing Service.</p> This service is still in early
                         development, so if you discover any issues, or have any questions, please feel free to contact us using the form provided. </div>
                        <br></br>
                        <h1>Meet the Team
                        </h1>
                        <Card style={{ 
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/CPku8Hr.jpeg" />
                            <Card.Body>
                                <Card.Title>Jon</Card.Title>
                                <Card.Text>
                                    He's alright I guess....
    </Card.Text>
                                <Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/EuhWrd7.jpg" />
                            <Card.Body>
                                <Card.Title>Carlos</Card.Title>
                                <Card.Text>
                                    He's alright I guess....
    </Card.Text>
                                <Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/3KEnZuT.jpeg" />
                            <Card.Body>
                                <Card.Title>Rohit</Card.Title>
                                <Card.Text>
                                    He's alright I guess....
    </Card.Text>
                                <Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/WJ8tm5S.jpeg" />
                            <Card.Body>
                                <Card.Title>Scott</Card.Title>
                                <Card.Text>
                                    He's alright I guess....
    </Card.Text>
                                <Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/iaQGWLC.jpg" />
                            <Card.Body>
                                <Card.Title>Bertie</Card.Title>
                                <Card.Text>
                                    He's alright I guess....
    </Card.Text>
                                <Button variant="primary">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="shaded create" sm={8}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        name="firstName"
                                        value={firstName}
                                        onInput={e => setfirstName(e.target.value)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        name="lastName"
                                        value={lastName}
                                        onInput={e => setlastName(e.target.value)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email address"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        value={email}
                                        name="email"
                                        onInput={e => setEmail(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">Please choose a valid email address.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Please provide details of your query...."
                                        required
                                        name="message"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide details of your query.</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Button type="submit">Submit</Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default ContactUs;