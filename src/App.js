import logo from './logo.svg';
import {Container} from 'reactstrap'
import NavbarComp from './components/NavbarComp/NavbarComp'
import './App.css';


function App() {
  return (
    <div className="App">
      <Container className='banner' fluid>
      {/* <Container className="bg-light border" fluid> */}
        <Container>
          <NavbarComp></NavbarComp>
        </Container>
      </Container>
    </div>
  );
}

export default App;
