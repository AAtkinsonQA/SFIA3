import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar.jsx';
import axios from 'axios';
import { PATH } from '../../constants.json';

const CreateTrainer = () => {
    const [validated, setValidated] = useState(false);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [cohort, setCohort] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        }
        const data = {
            "Trainer:": firstName + " " + lastName,
            "Email:": email,
            "Cohort:": cohort,
            password,
            confirmPassword
        }
        axios.post(PATH + '/createTrainer', data).then(response => {
            setfirstName('');
            setlastName('');
            setEmail('');
            setCohort('');
            setPassword('');
            setconfirmPassword('');
            setValidated(false);
        });
        setValidated(true);
    };

    return (
        <>
        <SiteNavbar/>
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
                                    name="firstName"
                                    type="text"
                                    placeholder="First name"
                                    value={firstName}
                                    onInput={e => setfirstName(e.target.value)}/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    name="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    value={lastName}
                                    onInput={e => setlastName(e.target.value)}/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                                <Form.Label>Cohort</Form.Label>
                                <Form.Control
                                    required
                                    name="cohort"
                                    type="text"
                                    placeholder="Cohort"
                                    value={cohort}
                                    onInput={e => setCohort(e.target.value)}
                                    aria-describedby="inputGroupPrepend"/>
                                <Form.Control.Feedback type="invalid">Please choose a valid cohort.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    name="email"
                                    type="text"
                                    placeholder="...QA.com"
                                    value={email}
                                    onInput={e => setEmail(e.target.value)}
                                    aria-describedby="inputGroupPrepend"/>
                                <Form.Control.Feedback type="invalid">Please choose a valid email address.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onInput={e => setPassword(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">Please choose a valid password.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    required
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Password"
                                    value={confirmPassword}
                                    onInput={e => setconfirmPassword(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">Please choose a valid password.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."/>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default CreateTrainer;