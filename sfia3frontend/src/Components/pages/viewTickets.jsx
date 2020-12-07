import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SiteNavbar from '../SiteNavbar';
import Ticket from '../Ticket';
import Data from './ticket.json';
import DetailedTicket from '../DetailedTicket';

const ViewTickets = () => {

//pass function to check whether more info is clicked
    const [query, setQuery] = useState(``);
    const [check, setCheck] = useState(false);
    
    const handleQuery = e => {
        console.log("query was {query}");
        setQuery(e.target.value);
        console.log(query);
    }
    const handleCheck = e => {
        setCheck(!check);
    }

return(  
<>
<SiteNavbar/>
<Container fluid>
    <Row>
        <Col className="shaded create" sm={4}>This is the side bar
            <DetailedTicket 
            stateQuery={query}

            />
            </Col>
        <Col className="shaded create"  sm={8}>
            {Data.map((ticket)=>(
            <Ticket 
            key={ticket.id} 
            title={ticket.title} 
            author={ticket.author}
            description={ticket.description}
            timeCreated={ticket.timeCreated}
            info={ticket}
            stateQuery={query} 
            updateState={handleQuery} 
            />
            ))}
        </Col>
    </Row>
</Container>
</>
);
}
export default ViewTickets;