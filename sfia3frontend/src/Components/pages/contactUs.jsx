import React, { useState, useEffect } from "react";
import { Button, Container, Modal, Row, Col, Form, Card, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';
import { SERVICE_ID } from '../../serviceid.json'
import { TEMPLATE_ID } from '../../templateid.json'
import { USER_ID } from '../../userid.json'
import emailjs from 'emailjs-com';
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
const answeringQuestions = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Answering Questions
    </Tooltip>
);
const frontEnd = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Front End Development
    </Tooltip>
);
const backEnd = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Back End Development
    </Tooltip>
);
const devOps = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        DevOps
    </Tooltip>
);
const design = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Design
    </Tooltip>
);
const bugReports = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Bug Reports
    </Tooltip>
);
const documentation = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Documentation
    </Tooltip>
);
const ideasPlanning = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Ideas and Planning
    </Tooltip>
);
const reviewedPullRequests = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Reviewed Pull Requests
    </Tooltip>
);
const tests = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Testing
    </Tooltip>
);
const ContactUs = () => {
    const [validated, setValidated] = useState(false);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
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
                    <Col className="shaded create" sm={4}>
                        <h1>Contact Us
                            <br></br>
                        </h1>
                        <div class="meetTeam"><p>Thank you for using the QA Community Ticketing Service.</p> <br></br><p>This service is still in early
                         development, so if you discover any issues, or have any questions, please feel free to contact us using the form provided. </p></div>
                        <br></br>
                        <h1>Meet the Team
                        </h1>
                        <Card style={{ 
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/HW3mVXb.jpg" />
                            <Card.Body>
                                <Card.Title>Jonathan Hunt</Card.Title>
                                <Card.Text>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={answeringQuestions}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speech-balloon_1f4ac.png`}
                                            alt="Answering Questions" />
                                        
                                    </OverlayTrigger>
                                    {'    '}
                                    
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={frontEnd}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/desktop-computer_1f5a5-fe0f.png`}
                                            alt="Front End Dev" />

                                    </OverlayTrigger>
                                    
                                    
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={bugReports}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/bug_1f41b.png`}
                                            alt="Bug Reports" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={documentation}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/open-book_1f4d6.png`}
                                            alt="Documentation" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={ideasPlanning}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/electric-light-bulb_1f4a1.png`}
                                            alt="Ideas & Planning" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={reviewedPullRequests}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/eyes_1f440.png`}
                                            alt="Reviewed Pull Requests" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={tests}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/warning_26a0-fe0f.png`}
                                            alt="Testing" />

                                    </OverlayTrigger>
                                    
                                    <br></br>
    </Card.Text>
                                <a href="https://github.com/Jonathanjhunt">
                                    <img className="github"
                                        src={`https://i.imgur.com/uWteCty.gif`}
                                        alt="github" />
                                </a>
                               {'    '}
                                <a href="https://www.linkedin.com/in/jonathan-hunt-b01661142/">
                                    <img className="linkedin"
                                        src={`https://i.imgur.com/OQUXwNp.jpg`}
                                        alt="linkedin" />
                                </a>
                                  
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://images2.alphacoders.com/520/520945.jpg" />
                            <Card.Body>
                                <Card.Title>Carlos Aguila</Card.Title>
                                <Card.Text>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={answeringQuestions}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speech-balloon_1f4ac.png`}
                                            alt="Answering Questions" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={frontEnd}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/desktop-computer_1f5a5-fe0f.png`}
                                            alt="Front End Dev" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={design}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/artist-palette_1f3a8.png`}
                                            alt="Design" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={backEnd}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/gear_2699-fe0f.png`}
                                            alt="Back End Development" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={devOps}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/mozilla/36/cloud_2601.png`}
                                            alt="DevOps" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={bugReports}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/bug_1f41b.png`}
                                            alt="Bug Reports" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={documentation}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/open-book_1f4d6.png`}
                                            alt="Documentation" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={ideasPlanning}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/electric-light-bulb_1f4a1.png`}
                                            alt="Ideas & Planning" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={reviewedPullRequests}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/eyes_1f440.png`}
                                            alt="Reviewed Pull Requests" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={tests}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/warning_26a0-fe0f.png`}
                                            alt="Testing" />

                                    </OverlayTrigger>
    </Card.Text>
                                <a href="https://github.com/qatrainingjaguila">
                                    <img className="github"
                                        src={`https://i.imgur.com/uWteCty.gif`}
                                        alt="github" />
                                </a>
                                {'    '}
                                <a href="https://www.linkedin.com/in/carlos-a-68750570/">
                                    <img className="linkedin"
                                        src={`https://i.imgur.com/OQUXwNp.jpg`}
                                        alt="linkedin" />
                                </a>
                                
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/1QJHloU.png" />
                            <Card.Body>
                                <Card.Title>Rohithan Carthigeya</Card.Title>
                                <Card.Text>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={answeringQuestions}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speech-balloon_1f4ac.png`}
                                            alt="Answering Questions" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={frontEnd}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/desktop-computer_1f5a5-fe0f.png`}
                                            alt="Front End Dev" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={design}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/artist-palette_1f3a8.png`}
                                            alt="Design" />

                                    </OverlayTrigger>
                                
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={devOps}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/mozilla/36/cloud_2601.png`}
                                            alt="DevOps" />

                                    </OverlayTrigger>
                                    
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={documentation}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/open-book_1f4d6.png`}
                                            alt="Documentation" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={ideasPlanning}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/electric-light-bulb_1f4a1.png`}
                                            alt="Ideas & Planning" />

                                    </OverlayTrigger>
                                   
                                
    </Card.Text>
                                <a href="https://github.com/rohithanc">
                                    <img className="github"
                                        src={`https://i.imgur.com/uWteCty.gif`}
                                        alt="github" />
                                </a>
                                {'    '}
                                <a href="https://www.linkedin.com/in/rohithan-carthigeya-8a799a159/">
                                    <img className="linkedin"
                                        src={`https://i.imgur.com/OQUXwNp.jpg`}
                                        alt="linkedin" />
                                </a>
                                
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://i.imgur.com/e6bFZWP.jpg" />
                            <Card.Body>
                                <Card.Title>Scott Nicolson</Card.Title>
                                <Card.Text>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={answeringQuestions}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speech-balloon_1f4ac.png`}
                                            alt="Answering Questions" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={frontEnd}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/desktop-computer_1f5a5-fe0f.png`}
                                            alt="Front End Dev" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={design}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/artist-palette_1f3a8.png`}
                                            alt="Design" />

                                    </OverlayTrigger>
                                    
                                
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={bugReports}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/bug_1f41b.png`}
                                            alt="Bug Reports" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={documentation}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/open-book_1f4d6.png`}
                                            alt="Documentation" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={ideasPlanning}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/electric-light-bulb_1f4a1.png`}
                                            alt="Ideas & Planning" />

                                    </OverlayTrigger>
                                   
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={tests}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/warning_26a0-fe0f.png`}
                                            alt="Testing" />

                                    </OverlayTrigger>
    </Card.Text>
                                <a href="https://github.com/Scottynic112">
                                    <img className="github"
                                        src={`https://i.imgur.com/uWteCty.gif`}
                                        alt="github" />
                                </a>
                                {'    '}
                                <a href="https://www.linkedin.com/in/scott-n-7898a41b0/">
                                    <img className="linkedin"
                                        src={`https://i.imgur.com/OQUXwNp.jpg`}
                                        alt="linkedin" />
                                </a>
                                
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{
                        }}>
                            <Card.Img variant="top" src="https://wallpaperaccess.com/full/427393.jpg" />
                            <Card.Body>
                                <Card.Title>Bertie Atkinson</Card.Title>
                                <Card.Text>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={answeringQuestions}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/speech-balloon_1f4ac.png`}
                                            alt="Answering Questions" />

                                    </OverlayTrigger>

                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={backEnd}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/gear_2699-fe0f.png`}
                                            alt="Back End Development" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={devOps}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/mozilla/36/cloud_2601.png`}
                                            alt="DevOps" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={bugReports}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/bug_1f41b.png`}
                                            alt="Bug Reports" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={documentation}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/open-book_1f4d6.png`}
                                            alt="Documentation" />

                                    </OverlayTrigger>
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={ideasPlanning}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/electric-light-bulb_1f4a1.png`}
                                            alt="Ideas & Planning" />

                                    </OverlayTrigger>
                                    
                                    {'    '}
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={tests}
                                    >
                                        <img className="emoji"
                                            src={`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/warning_26a0-fe0f.png`}
                                            alt="Testing" />

                                    </OverlayTrigger>
    </Card.Text>
                                <a href="https://github.com/AAtkinsonQA">
                                    <img className="github"
                                        src={`https://i.imgur.com/uWteCty.gif`}
                                        alt="github" />
                                </a>
                                {'    '}
                                <a href="https://www.linkedin.com/in/bertie-atkinson-b15444184/">
                                    <img className="linkedin"
                                        src={`https://i.imgur.com/OQUXwNp.jpg`}
                                        alt="linkedin" />
                                </a>
                                
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
                            <Button type="submit">Send</Button>
                            
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