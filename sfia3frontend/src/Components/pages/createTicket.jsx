import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, InputGroup, Button, Container, Tooltip, OverlayTrigger , Modal} from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar.jsx';
import axios from 'axios';
import { PATH } from '../../constants.json';

const renderTooltip = (props) => (
    <Tooltip id="description-tooltip" {...props}>
        <p>Please provide a detailed description of your issue.</p>
        <p>To ensure trainers can provide a quick and efficient response to your problem, please include the following:</p>

        <p>1. When the issue occured</p>
        <p>2. The OS(operating system) you are using.</p >
        <p>3. When the issue first occured</p >
        <p>4. The detail of what is happening.</p >
        <p>5. What you have tried to fix it.</p >

    </Tooltip>
);

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
                    Ticket Submitted!
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>A trainer will review your issue and be in contact shortly.</h4>
                <p>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Link to="/viewTickets">
                    <Button renderAs="button">
                        <span>View Tickets</span>
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
}

const CreateTicket = () => {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [description, setDescription] = useState('');
    const [urgency, setUrgency] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const handleSubmit = (event) => {
        const form = event.target;
        event.preventDefault();
        if (form.checkValidity() === false) {

            event.stopPropagation();
        }
        console.log(title, firstName, lastName, description, urgency, topic)
        const data = {
            title,
            "author": firstName + " " + lastName,
            description,
            urgency,
            "solution": "no solution",
            "status": false,
            email,
            topic
        }
        axios.post('api/createTicket', data).then(response => {
            setfirstName('');
            setlastName('');
            setTitle('');
            setDescription('');
            setEmail('');
            setValidated(false);
            setModalShow(true);
        });
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
                                <Form.Group as={Col} md="4" controlId="validationCustom04">

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
                                <Form.Group as={Col} md="4" controlId="validationCustom05">
                                    <Form.Label>Topic</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required
                                        name="topic"
                                        value={topic}
                                        onInput={e => setTopic(e.target.value)}>
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
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid urgency level.
          </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom05">
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
                                    <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Please provide a description of your issue...."
                                            required
                                            name="description"
                                            value={description}
                                            onInput={e => setDescription(e.target.value)}></Form.Control>
                                    </OverlayTrigger>
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
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );


}
export default CreateTicket;