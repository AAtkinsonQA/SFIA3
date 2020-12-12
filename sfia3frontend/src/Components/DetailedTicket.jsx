import React, {useState, useEffect} from 'react';
import {Card, Button} from "react-bootstrap";
import Data from "./pages/ticket.json";
import axios from 'axios';
import TicketInfo from "./Ticketinfo.jsx";
import { PATH } from '../constants.json';


const DetailedTicket = (props) => {

    const [data,setData]= useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {

            axios.get(PATH + "/readTicket/" + props.stateQuery
            ,
                {
                    headers: {
                        'Access-Control-Allow-Origin' : '*'
                    }
                }
            )
                // .then(res => res)
                .then(response => {
                    setLoaded(true);
                    //console.log(response.data);
                    setData(response.data);
                }, (error) => {
                    setLoaded(true);
                    setError(error);
                })
        }, 1000)
    })

const date = new Date(Date.now()) //temporary date
  let stringDate = date.toString();
///perform get ticket by id and display here



return( 
    <>
   <TicketInfo info={data}/>
    </>
 );

}
export default DetailedTicket;