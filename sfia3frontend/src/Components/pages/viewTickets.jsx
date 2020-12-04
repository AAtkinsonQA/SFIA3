import React from 'react';
import { Row } from 'react-bootstrap';
import { Col, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar';
import Ticket from '../Ticket';

const ViewTickets = () => {
return(  
<>
<SiteNavbar/>
<Container fluid>
    <Row>
        <Col className="shaded create" sm={4}>This is the side bar</Col>
        <Col className="shaded create"  sm={8}>
            <Ticket/>
        </Col>
    </Row>
</Container>
</>
);
}
export default ViewTickets;