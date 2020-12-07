import React, {useState, useEffect} from 'react';
import {Card, Button} from "react-bootstrap";
import Data from "./pages/ticket.json";
import axios from 'axios';

const DetailedTicket = (props) => {

const id = props.stateQuery;
console.log(id);
///perform get ticket by id and display here



return( 
    <h1>id is {id}</h1>
 );

}
export default DetailedTicket;