import React from 'react';
import {button} from 'react-bootstrap';


const TitleSection = () => {
return( 
    <>
    <section id = "title" class="title-section">
        <div class="container-fluid">
        <div class="row">
        <div class="col-lg-12">
          <h1 class="big-heading">Welcome to the QA ticketing service</h1>
          <br></br>
          <br></br>
        </div>
        {/* <div class="col text-center">
          <button type="button" onclick="location.href='html/Signup.html'"
            class="btn btn-lg btn-light explore-button">Explore</button>
        </div> */}
        </div>
        </div>
    </section>
    </>
 );
}
export default TitleSection;