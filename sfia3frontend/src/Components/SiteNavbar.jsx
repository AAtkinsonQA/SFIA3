import React from 'react';
import qa_fill_primary from './qa_fill_primary.svg';
import {Link} from 'react-router-dom';
import { Button, Navbar, Nav, Form, NavDropdown, Container, Col,Row } from 'react-bootstrap';


const SiteNavbar = () => {
return( 
<>
<Navbar expand="lg" >
<Navbar.Brand href="#home">
<Link to="/">
<img
        src="https://i.imgur.com/sd243yk.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="QA logo"
      />
</Link>  

{/* <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}



      </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Link to="/createTicket">
    <Nav.Link href="#link">Create New Ticket</Nav.Link>
    </Link>
    <Link to="/viewTickets">
    <Nav.Link href="#link">View Tickets</Nav.Link>
    </Link>
    <Link to="/contactUs">
    <Nav.Link href="#link">Contact Us</Nav.Link>
    </Link>
    {/* <NavDropdown title="Options" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}
  </Nav>
  {/* <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
  </Form> */}
</Navbar.Collapse>
</Navbar>
<Container fluid>
  <Row>
    <Col>_</Col>
    </Row>
    </Container>

</>);
}
export default SiteNavbar;