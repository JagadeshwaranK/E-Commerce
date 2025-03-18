import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import '../index.css';
import { Link } from 'react-router-dom';


const Header = () => {

  
  return (
    <>
      <Navbar expand='lg' className='navbar navhead'>
        <Container>
          <Navbar.Brand className='navhome  text-white' href='#home'>AmmoNation</Navbar.Brand>
          <Form className='d-flex navb '>
            <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
            <Button variant='outline-light' className='me-2'>Search</Button>
          
          <Link to='/login'> <Button variant='outline-light' className='me-2'>Login</Button></Link>
          <Link to='/signup'> <Button variant='outline-light' className='me-2'>Signup</Button></Link>
          </Form>
        </Container>
      </Navbar>

      <hr className='hr' />
        
 <Nav className='justify-content-center navbar navitem'>
        <Nav.Item>
          <Nav.Link as={Link} to='/handgun'>Handgun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/rifle'>Rifle</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/shotgun'>Shotgun</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/specialty'>Specialty</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/revolver'>Revolver</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/tactical'>Tactical</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/training'>Training</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;