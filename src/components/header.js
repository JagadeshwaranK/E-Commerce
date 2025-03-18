import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import '../index.css';

const Header = () => {
  const location = useLocation(); // Get current path
  const navigate = useNavigate(); // For navigation
  const [searchQuery, setSearchQuery] = useState(queryString.parse(location.search).search || ''); // Initialize search query from URL
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  // List of category routes
  const categories = ['/Handgun', '/Rifle', '/Shotgun', '/Specialty', '/Revolver', '/Tactical', '/Training'];

  // Handle Search Logic
  useEffect(() => {
    // If searchQuery is not empty, update the URL with the search query
    if (searchQuery.trim() !== '') {
      navigate(`/?search=${searchQuery}`, { replace: true });
    }
  }, [searchQuery, navigate]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (searchQuery.trim() !== '') {
      navigate(`/?search=${searchQuery}`, { replace: true });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false); 
    localStorage.removeItem('isLoggedIn'); 
    navigate('/login');
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  return (
    <>
      <Navbar expand='lg' className='navbar navhead'>
        <Container>
          <Navbar.Brand className='navhome text-white' as={Link} to='/'>ARMORY X</Navbar.Brand>
          <Form className='d-flex navb' onSubmit={handleSearchSubmit}>
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
            <Button type='submit' variant='outline-light' className='me-2'>Search</Button>
            {!isAuthenticated ? (
              <>
                <Link to='/login'> <Button variant='outline-light' className='me-2'>Login</Button></Link>
                <Link to='/signup'> <Button variant='outline-light' className='me-2'>Signup</Button></Link>
              </>
            ) : (
              <Button variant='outline-light' className='me-2' onClick={handleLogout}>Logout</Button>
            )}
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
