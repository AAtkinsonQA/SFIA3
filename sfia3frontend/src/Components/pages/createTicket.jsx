import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar.jsx';



const CreateTicket = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
        <SiteNavbar />
        <Container fluid>
            <Row>
                <Col className="shaded" sm={4}>This is the side bar</Col>
                <Col className="shaded" sm={8}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>QA Email Address</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="...@academytrainee.com"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
            </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid title.
          </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom05">
                                <Form.Label>Urgency</Form.Label>
                                <Form.Control as="select" required>
                                    <option>Low (Not affecting your ability to work)</option>
                                    <option>Medium (Somewhat affecting your ability to work)</option>
                                    <option>High (Critically affecting your ability to work)</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid urgency level.
          </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Please provide a description of your issue...." required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Description.
          </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit Issue</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
        </>
    );


}
export default CreateTicket;