import logo from './logo.svg';
import qa_fill_primary from './qa_fill_primary.svg';
import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNavbar from './Components/SiteNavbar.jsx';
import TitleSection from './Components/TitleSection.jsx';
import SelectOptions from './Components/SelectOptions.jsx';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faFolderOpen, faFileAlt , faAddressBook} from '@fortawesome/free-solid-svg-icons'
import SiteTemplate from './Components/pages/siteTemplate.jsx';
import ContactUs from './Components/pages/contactUs.jsx';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Hub from './Components/pages/Hub';


library.add(fab, faFolderOpen, faFileAlt, faAddressBook)

function App() {
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap');
      </style> 
      <Router>
      <Switch>
          <Route path="/contactUs" component={ContactUs} exact/>
          <Route path="/siteTemplate" component={SiteTemplate} exact/>
          <Route path="/" component={Hub} exact/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
