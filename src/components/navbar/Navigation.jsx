/** @format */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.css';

const Navigation = () => {
  return (
    <Navbar
      expand='lg'
      className='color-nav'>
      <Container>
        <Navbar.Brand
          href='home'
          className='title_nav'>
          Pizzeria By Lero
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-center'>
          <Nav className=' all_links   '>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/menu'>Menu</Nav.Link>
            <Nav.Link href='/gallery'>Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
