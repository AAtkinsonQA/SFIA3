import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Col, Container } from "react-bootstrap";
import SiteNavbar from "../SiteNavbar";
import Ticket from "../Ticket";
import DetailedTicket from "../DetailedTicket";
import axios from "axios";
import { PATH } from "../../constants.json";

const ViewTickets = () => {
  //pass function to check whether more info is clicked
  const [currentTicket, setCurrentTicket] = useState({});

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://gateway-ip:8080/api/readTickets", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          setLoaded(true);
          return response.json();
        })
        .then((data) => {
          console.log(data.data);
          setData(data.data);
          console.log(typeof data.data);
        })
        .catch((error) => {
          console.error(error);
          setLoaded(true);
          setError(error);
        });
    }, 0);
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="shaded create" sm={4}>
            {" "}
            {ticket && <TicketInfo info={currentTicket}/>}
          </Col>
          <Col className="shaded create" sm={8}>
            {data.map((ticket) => (
              <Ticket
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                author={ticket.author}
                description={ticket.description}
                timeCreated={ticket.timeCreated}
                info={ticket}
                stateQuery={query}
                updateState={(ticket) => setCurrentTicket(ticket)}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ViewTickets;
