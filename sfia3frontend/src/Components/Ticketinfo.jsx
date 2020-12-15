import React,{useState} from 'react';
import {Card, Button, Form} from "react-bootstrap";
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
    <Card>
        <Card.Header as="h5">{obj.timeCreated}</Card.Header>
        <Card.Body style = {{textAlign:"left"}} >
          <Card.Title>{obj.title}</Card.Title>
          <Card.Text>
            <p>Posted by: </p>
            {obj.author}
            </Card.Text>
            <Card.Text>
              <p>Description:</p>
            {obj.description}
          </Card.Text>
          <Card.Text>
            <p>Solution: </p>
            {obj.solution}
          </Card.Text>
          <div>
            <Form onSubmit={handleUpdate}>
            <input name="solution" type="text" onChange={e => setSolution(e.target.value)} />
          <Button type= "submit" style = {{margin:"2em"}} variant="primary" >Add Solution</Button>
          </Form>
          </div>
        </Card.Body>
      </Card>
    </>
 );
}
export default Ticketinfo;