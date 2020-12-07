import React from 'react';
const Ticketinfo = ({obj}) => {


return( 
    <>
    <h1>{obj.id}</h1>
    <h1>{obj.author}</h1>
    <h1>{obj.title}</h1>
    </>
 );
}
export default Ticketinfo;