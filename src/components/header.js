import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; // ✅ Import queryString
import '../index.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(queryString.parse(location.search).search || '');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [previousPage, setPreviousPage] = useState(''); // ✅ Add state for previousPage

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const categories = ['/Handgun', '/Rifle', '/Shotgun', '/Specialty', '/Revolver', '/Tactical', '/Training'];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      navigate(previousPage); // ✅ Now previousPage is defined
    } else {
      navigate(`/?search=${searchQuery}`);
    }
  }, [searchQuery, navigate, previousPage]);

  useEffect(() => {
    setPreviousPage(location.pathname); // ✅ Now setPreviousPage is defined
  }, [location.pathname]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/?search=${searchQuery}`, { replace: true });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/');
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
            {!isAuthenticated ? (
              <>
                <Link to='/login'><Button variant='outline-light' className='me-2'>Login</Button></Link>
                <Link to='/signup'><Button variant='outline-light' className='me-2'>Signup</Button></Link>
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
