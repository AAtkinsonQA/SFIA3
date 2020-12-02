import React from 'react';
import {button} from 'react-bootstrap';
import { Button, Form, FormControl } from 'react-bootstrap';


const TitleSection = () => {
return( 
    <>
    <section id = "title" class="title-section">
        <div class="container-fluid">
        <div class="row">
        <div class="col-lg-12">
          <h1 class="big-heading">Welcome to the QA Community Ticketing Service!</h1>
          <br></br>
         {/* </div> */}
        {/* <div class="col text-center"> */}
          {/* <button type="button" onclick="location.href='html/Signup.html'0"
            class="btn btn-lg btn-light explore-button">Explore</button> */}
            <div class="col text-center">
        <Form className="searchbar">
        <FormControl type="text" placeholder="Search for an issue.." className="mr-sm-2"/>
        </Form>
        </div>
        </div>
        </div> 
        </div>
    </section>
    </>
 );
}
export default TitleSection;