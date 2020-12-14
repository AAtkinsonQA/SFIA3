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
    {/* <img
          src="https://i.imgur.com/hxGZzW8.jpg"
          style = {{width:"100%"}}
        alt="image"/>
        <Form className="searchbar" onSubmit={handleSubmit}>
        <FormControl 
        type="text" 
        placeholder="Search QA Community Service..." 
        className="mr-sm-2"
        onInput={e => setQuery(e.target.value)}/> */}
        {/* </Form> */}
         <div class="container-fluid">


        <div class="row">
        <div class="col-lg-12"> 
        {/* <div class="col text-center"> */}
          {/* <button type="button" onclick="location.href='html/Signup.html'0"
            class="btn btn-lg btn-light explore-button">Explore</button> */}
        <br></br>   
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
    </section>
    {query && <SearchResults stateQuery={query}/>}
    </>
 );
}
export default TitleSection;