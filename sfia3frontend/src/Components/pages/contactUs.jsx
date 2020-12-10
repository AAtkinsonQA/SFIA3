import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar.jsx';



const ContactUs = () => {
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
        <Container fluid>
            <Row>
                <Col className="shaded create" sm={4}>This is the side bar</Col>
                <Col className="shaded create" sm={8}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email address"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please choose a valid email address.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

        
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Query</Form.Label>
                                <Form.Control as="textarea" placeholder="Please provide details of your query...." required />
                                <Form.Control.Feedback type="invalid">Please provide details of your query.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
        </>
    );


}
export default ContactUs;