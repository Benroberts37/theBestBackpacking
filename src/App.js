import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'

import BackpackForm from './Components /backpackForm'
import Gear from './Components /gear'
import CommunitySubmissions from './Components /communitySubmissions'
import Home  from './Components /Home'


function App() {
  return (
    <Router>
    <div className = "App"> 
<>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">The Best Backpacking</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/submitATrip'>Submit a trip</Nav.Link>
      <Nav.Link as={Link} to='/communitySubmissions'>Community Submissions</Nav.Link>
      <Nav.Link as={Link} to='/gear'>Gear</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
<div>
  <Routes>
    <Route exact path ='/' element ={<Home/>}></Route>
    <Route path ='/submitATrip' element ={<BackpackForm/>}></Route>
    <Route path ='/communitySubmissions' element ={<CommunitySubmissions/>}></Route>
    <Route path ='/gear' element ={<Gear/>}></Route>
  </Routes>
</div>
</div>
</Router>
  );
}

export default App;
