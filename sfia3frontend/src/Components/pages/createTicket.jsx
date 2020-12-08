import { useState } from 'react';
import { Row, Col, Form, InputGroup, Button, Container } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar.jsx';
import axios from 'axios';
import { PATH } from '../../constants.json';

const CreateTicket = () => {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [description, setDescription] = useState('');
    const [urgency, setUrgency] = useState('');
    const [email, setEmail] = useState('');
    
    
    const handleSubmit = (event) => {
        const form = event.target;
        event.preventDefault();
        if (form.checkValidity() === false) {

            event.stopPropagation();
        }
        console.log(title, firstName, lastName, description, urgency)
        const data = {
            title,
            "author": firstName + " " + lastName,
            description,
            urgency,
            "solution": "no solution",
            "status": false,
            email
        }
        axios.post(PATH + '/createTicket', data).then(response => {
            setfirstName('');
            setlastName('');
            setTitle('');
            setDescription('');
            setEmail('');
            setValidated(false);
        });
        setValidated(true);
    };

    return (
        <>
        <SiteNavbar />
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
                                    defaultValue="Mark"
                                    value={firstName}
                                    onInput={e => setfirstName(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    name="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                    value={lastName}
                                    onInput={e => setlastName(e.target.value)}
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
                                        name="email"
                                        value={email}
                                        onInput={e => setEmail(e.target.value)}
                                        placeholder="...@academytrainee.com"
                                        aria-describedby="inputGroupPrepend"
                                    // required
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
                                <Form.Control
                                    type="text"
                                    placeholder="Title"
                                    required
                                    name="title"
                                    value={title}
                                    onInput={e => setTitle(e.target.value)} />
                                <Form.Control.Feedback type="invalid" >
                                    Please provide a valid title.
          </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom05">
                                <Form.Label>Urgency</Form.Label>
                                <Form.Control
                                    as="select"
                                    required
                                    name="urgency"
                                    value={urgency}
                                    onInput={e => setUrgency(e.target.value)}>
                                    <option value="low">Low (Not affecting your ability to work)</option>
                                    <option value="medium">Medium (Somewhat affecting your ability to work)</option>
                                    <option value="high">High (Critically affecting your ability to work)</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid urgency level.
          </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Please provide a description of your issue...."
                                    required
                                    name="description"
                                    value={description}
                                    onInput={e => setDescription(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Description.
          </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit">Submit Issue</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
        </>
    );


}
export default CreateTicket;