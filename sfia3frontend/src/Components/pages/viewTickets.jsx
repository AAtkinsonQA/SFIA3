import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Col, Container } from "react-bootstrap";
import SiteNavbar from "../SiteNavbar";
import Ticket from "../Ticket";
import DetailedTicket from "../DetailedTicket";
import TicketInfo from "../Ticketinfo";
import axios from "axios";
import { PATH } from "../../constants.json";

const ViewTickets = () => {
  //pass function to check whether more info is clicked
  const [currentTicket, setCurrentTicket] = useState(``);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:8080/ticket/readTickets", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        // .then(res => res)
        .then(
          (response) => {
            setLoaded(true);
            setData(response.data);
          },
          (error) => {
            setLoaded(true);
            setError(error);
          }
        );
    }, 2000);
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="shaded create" sm={4}>
            {currentTicket && <DetailedTicket stateQuery={currentTicket} />}
          </Col>
          <Col className="shaded create" sm={8}>
            {data.map((ticket) => (
              <Ticket
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                topic={ticket.topic}
                email={ticket.email}
                status={ticket.status}
                urgency={ticket.urgency}
                author={ticket.author}
                description={ticket.description}
                timeCreated={ticket.timeCreated}
                info={ticket}
                solution={ticket.solution}
                updateState={(event) => {
                  setCurrentTicket(event.currentTarget.value);
                  console.log({ currentTicket });
                }
                }
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ViewTickets;
