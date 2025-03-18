import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const location = useLocation(); // Get current path
  const navigate = useNavigate(); // For navigation
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [previousPage, setPreviousPage] = useState(location.pathname); // Store previous page

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  // List of category routes
  const categories = ['/Handgun', '/Rifle', '/Shotgun', '/Specialty', '/Revolver', '/Tactical', '/Training'];

  // Handle Search Logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      // If search is empty, return to the previous page
      navigate(previousPage);
    } else {
      navigate(`/?search=${searchQuery}`);
    }
  }, [searchQuery, navigate, previousPage]);

  useEffect(() => {
    setPreviousPage(location.pathname);
  }, [location.pathname]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar expand='lg' className='navbar navhead'>
        <Container>
          <Navbar.Brand className='navhome text-white' as={Link} to='/'>ARMORY X</Navbar.Brand>
          <Form className='d-flex navb'>
            {!isAuthPage && (
              <Form.Control
                type='search'
                className='textarea me-2'
                placeholder='Search'
                aria-label='Search'
                value={searchQuery}
                onChange={handleSearchChange}
              />
            )}
            <Link to='/login'> <Button variant='outline-light' className='me-2'>Login</Button></Link>
            <Link to='/signup'> <Button variant='outline-light' className='me-2'>Signup</Button></Link>
          </Form>
        </Container>
      </Navbar>

      <hr className='hr' />

      {!isAuthPage && (
        <Nav className='justify-content-center navbar navitem'>
          <Nav.Item>
            <Nav.Link as={Link} to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
          </Nav.Item>
          {categories.map((category) => (
            <Nav.Item key={category}>
              <Nav.Link as={Link} to={category} className={location.pathname === category ? 'active' : ''}>
                {category.replace('/', '')}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      )}
    </>
  );
};

export default Header;
