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

library.add(fab, faFolderOpen, faFileAlt, faAddressBook)

function App() {
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap');
      </style> 
      <SiteNavbar/>
      <TitleSection/>
      <SelectOptions/>
    </div>
  );
}

export default App;
