import React from 'react';
import {Card, Button, Form} from "react-bootstrap";
const Ticketinfo = (props) => {


const obj = props.info

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
            <Form>
            <input type="text" value={stateQuery} onChange={updateState, updateCheck} />
            </Form>
          <Button type= "submit" style = {{marginRight:"2em"}} value={obj.id} variant="primary" onClick={updateState}>More Information</Button>
          </div>
        </Card.Body>
      </Card>
    </>
 );
}
export default Ticketinfo;