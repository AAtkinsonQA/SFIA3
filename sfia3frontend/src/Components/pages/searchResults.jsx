import {useState, useEffect} from 'react';
import axios from 'axios';
import Ticket from '../Ticket';
import SearchHit from '../SearchHit';

const SearchResults = (props) => {

const stateQuery = props.stateQuery;

const [data, setData] = useState([]);
const [error, setError] = useState(null);
const [isLoaded, setLoaded] = useState(false);

useEffect(() => {
  setTimeout(() => {
    axios
      .get("api/readTickets", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      // .then(res => res)
      .then(
        (response) => {
          setLoaded(true);
          setData(response.data);          },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, 5000);
});


const byQuery = stateQuery => data => data.solution !== "no solution" && (!stateQuery || (data.title.toLowerCase().includes(stateQuery.toLowerCase())));

let filteredList = data.filter(byQuery(stateQuery));

return( 
    <>
    {filteredList.map((ticket) => (
        <SearchHit
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          author={ticket.author}
          description={ticket.description}
          timeCreated={ticket.timeCreated}
          solution={ticket.solution}
          info={ticket}
        />
      ))}
      </>
 )

}

export default SearchResults;