import React,{useState} from 'react';
import {Card, Button, Form} from "react-bootstrap";
import axios from 'axios';
import { PATH } from '../constants.json';


const Ticketinfo = (props) => {

const [solution, setSolution] = useState(``);


let obj = props.info;

let ticketid = obj.id;
// console.log(obj[0]);
//console.log(props.stateQuery)
//console.log(props.updateState)
//console.log(obj.id)
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

axios.put("http://localhost:8080/ticket/updateTicket/" + ticketid, data)
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
        <Card.Body>
          <Card.Title>{obj.title}</Card.Title>
          <Card.Text>
            {obj.author}
            </Card.Text>
            <Card.Text>
            {obj.description}
          </Card.Text>
          <div>
            <Form onSubmit={handleUpdate}>
            <input name="solution" type="text" onChange={e => setSolution(e.target.value)} />
            
          <Button type= "submit" style = {{marginRight:"2em"}} variant="primary" >Add Solution</Button>
          </Form>
          </div>
        </Card.Body>
      </Card>
    </>
 );
}
export default Ticketinfo;