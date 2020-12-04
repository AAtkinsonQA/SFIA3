import React from 'react';
import { Row } from 'react-bootstrap';
import { Col, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar';
import Ticket from '../Ticket';
import Data from './ticket.json';

const ViewTickets = () => {
return(  
<>
<SiteNavbar/>
<Container fluid>
    <Row>
        <Col className="shaded create" sm={4}>This is the side bar</Col>
        <Col className="shaded create"  sm={8}>
            {Data.map((ticket)=>(
            <Ticket 
            key={ticket.id} 
            title={ticket.title} 
            author={ticket.author}
            description={ticket.description}
            timeCreated={ticket.timeCreated}
            info={ticket}
            />
            ))}
        </Col>
    </Row>
</Container>
</>
);
}
export default ViewTickets;