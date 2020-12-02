import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SiteTemplate from './pages/siteTemplate';
import App from '../App';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';

const SelectOptions = () => {

    return( 
        <section id="features" class="white-section">
        <div class="row">
          <div class="col-lg-4">
          <Link to="/siteTemplate">
          <FontAwesomeIcon icon="file-alt" size="6x" color="#004050"/>
          </Link>
            <h3 class="buttontag">Create a Ticket</h3>
          </div>
          <div class="col-lg-4">
          <FontAwesomeIcon icon="folder-open" size="6x" color="#004050"/>
            <h3 class="buttontag">View All Tickets</h3>
          </div>
          <div class="col-lg-4">
          <FontAwesomeIcon icon="address-book" size="6x" color="#004050"/>
            <h3 class="buttontag">Contact Us</h3>
          </div>
        </div>
      </section>
 );
}
export default SelectOptions;