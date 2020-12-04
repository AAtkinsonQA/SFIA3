import React from 'react';
import { Row } from 'react-bootstrap';
import { Col, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar';

const ViewTickets = () => {
return(  
<>
<SiteNavbar/>
<Container fluid>
    <Row>
        <Col sm={4}>This is the side bar</Col>
        <Col sm={8}>
            View Tickets
        </Col>
    </Row>
</Container>
</>
);
}
export default ViewTickets;