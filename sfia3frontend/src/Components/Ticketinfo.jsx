import React,{useState} from 'react';
import {Card, Button, Form, Row, Col} from "react-bootstrap";
import axios from 'axios';
import { PATH } from '../constants.json';


const Ticketinfo = (props) => {

const [solution, setSolution] = useState(``);


let obj = props.info;
console.log(obj);
let ticketid = obj.id;
console.log(ticketid);


const handleUpdate = e => {
e.preventDefault();
const data = {
  "title": null,
  "author": null,
  "description": null,
  "urgency": null,
  "solution": solution,
  "status" : true
}

axios.put("api/updateTicket/ticket/updateTicket/" + ticketid, data)
.then(response => {
  console.log(response);
  setSolution('');
})
.catch(console.log('fail'));
};


return( 
    <>
     <Card border="secondary" >
        <Card.Header as="h4">
          <Row>
            <Col sm={8}>
              {obj.title}
            </Col>
            <Col class="authorDate" sm={4}>
              <Row>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Card.Text>
                <h5 class="author">{obj.author}
                </h5>
                <p>{obj.description} </p>
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                <h5 class="solution">Solution: 
                </h5>
                <p>{obj.solution} </p>
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            <div>
            <Form onSubmit={handleUpdate}>
            <input name="solution" type="text" onChange={e => setSolution(e.target.value)} />
          <Button type= "submit" style = {{marginRight:"1em"}} variant="primary" >Add Solution</Button>
          </Form>
          </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br></br>
    </>
 );
}
export default Ticketinfo;