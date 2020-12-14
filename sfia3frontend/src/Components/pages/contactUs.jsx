import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { SERVICE_ID } from '../../serviceid.json'
import { TEMPLATE_ID } from '../../templateid.json'
import { USER_ID } from '../../userid.json'
import SiteNavbar from '../SiteNavbar.jsx';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { Link } from 'react-router-dom';

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
                    <Col className="shaded create" sm={4}>This is the side bar</Col>
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