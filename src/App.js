// import logo from './logo.svg';
import { Button, Container } from "reactstrap";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import "./App.css";
import Profile from "./components/Profile/Profile";
import React , { useState } from "react";

// https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80

function App() {
  
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });

  let changeTheme = () => {

    console.log("BG COLOR == ", theme.backgroundColor);
    theme.backgroundColor == "white" ? setTheme( { backgroundColor: "black", color: "white" ,  borderColor: '#786b6b'} ) : setTheme( { color: "black", backgroundColor: "white",  borderColor: 'whitesmoke' } );

  };
  return (
    <div className="App">
      <Container className="banner" fluid>
        {/* <Container className="bg-light border" fluid> */}
        <Container>
          <NavbarComp compClass="navbar-wrapper">
               <Button style={{background: 'none',border: 'none'}} onClick={changeTheme}>{theme.backgroundColor == "white" ? <i class="bi bi-brightness-high-fill"></i> : <i class="bi bi-moon-stars-fill"></i> }</Button>
          </NavbarComp>
        </Container>
      </Container>
      <Container className="content" fluid style={theme}>
        <Profile className="profile"  style={theme}></Profile>
      </Container>
    </div>
  );
}

export default App;
