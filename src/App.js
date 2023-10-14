// import logo from './logo.svg';
import { Container } from 'reactstrap'
import NavbarComp from './components/NavbarComp/NavbarComp'
import './App.css';
import Profile from './components/Profile/Profile';
import { useState } from 'react';

// https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80

function App() {
  const [theme , setTheme] = useState({color: 'black' , color: 'backgroundColor'});

  let changeTheme = () =>{
    setTheme(theme.backgroundColor = 'white' ? {backgroundColor: 'black' , color: 'smokewhite'} : 

    )
  }
  return (
    <div className="App">
      <Container className='banner' fluid>
        {/* <Container className="bg-light border" fluid> */}
        <Container>
          <NavbarComp compClass="navbar-wrapper" />
        </Container>
      </Container>
      <Container className='content' fluid>
        <Profile className = "profile"></Profile>
      </Container>
    </div>
  );
}

export default App;
