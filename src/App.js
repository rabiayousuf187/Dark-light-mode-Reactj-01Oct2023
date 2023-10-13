// import logo from './logo.svg';
import { Container } from 'reactstrap'
import NavbarComp from './components/NavbarComp/NavbarComp'
import './App.css';
import Profile from './components/Profile/Profile';

// https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80

function App() {
  return (
    <div className="App">
      <Container className='banner' fluid>
        {/* <Container className="bg-light border" fluid> */}
        <Container>
          <NavbarComp compClass="navbar-wrapper" />
        </Container>
      </Container>
      <Container className='content'>
        <Profile></Profile>
      </Container>
    </div>
  );
}

export default App;
