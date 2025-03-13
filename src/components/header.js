import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import '../index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand='lg' className='navbar navhead'>
        <Container>
          <Navbar.Brand className='navhome text-white' href='/'>AmmoNation</Navbar.Brand>
          <Form className='d-flex navb '>
            <Form.Control type='search' className="textarea me-2" placeholder='Search' aria-label='Search' />


            <Button variant='outline-light' className='me-2'>Search</Button>
          
          <Link to='/login'> <Button variant='outline-light' className='me-2'>Login</Button></Link>
          <Link to='/signup'> <Button variant='outline-light' className='me-2'>Signup</Button></Link>
          </Form>
        </Container>
      </Navbar>

      <hr className='hr' />

      <Nav className='justify-content-center navbar navitem'>
        <Nav.Item>
          <Nav.Link href='/Handgun'>Handgun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Rifle'>Rifle</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Shotgun'>Shotgun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Specialty'>Specialty</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Revolver'>Revolver</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Tactical'>Tactical</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Training'>Training</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
