import logo from './logo.svg';
import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNavbar from './Components/SiteNavbar.jsx';
import TitleSection from './Components/TitleSection';

function App() {
  return (
    <div className="App">
      <SiteNavbar/>
      <TitleSection/>
    </div>
  );
}

export default App;
