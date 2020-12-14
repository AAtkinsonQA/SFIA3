import {useState} from 'react';
import {button} from 'react-bootstrap';
import { Button, Form, FormControl } from 'react-bootstrap';
import SearchResults from './pages/searchResults';


const TitleSection = () => {
  const [query,setQuery] = useState(``);

  const handleSubmit = (event) => {
    const form = event.target;
    event.preventDefault();
    console.log(form)
  }

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
        <Form className="searchbar" onSubmit={handleSubmit}>
        <FormControl 
        type="text" 
        placeholder="Search QA Community Service..." 
        className="mr-sm-2"
        onInput={e => setQuery(e.target.value)}/>
        </Form>
        </div>
        </div>
        </div> 
        </div>
    </section>
    {query && <SearchResults stateQuery={query}/>}
    </>
 );
}
export default TitleSection;