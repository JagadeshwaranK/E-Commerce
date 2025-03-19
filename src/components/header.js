// Header.js
import React, { useState, useEffect } from 'react'; 
import { Navbar, Container, Nav, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import '../index.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(queryString.parse(location.search).search || '');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // State to control search bar visibility

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const categories = ['/Handgun', '/Rifle', '/Shotgun', '/Specialty', '/Revolver', '/Tactical', '/Training'];

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeSearch = () => {
    setShowSearch(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Navbar for LG */}
      <Navbar expand='lg' className='navbar navhead d-none d-lg-flex'>
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
            {!isAuthenticated ? (
              <>
                <Link to='/login'><Button variant='outline-light' className='me-2'>Login</Button></Link>
                <Link to='/signup'><Button variant='outline-light' className='me-2'>Signup</Button></Link>
              </>
            ) : (
              <>
                <Button variant='outline-light' className='me-2' onClick={handleLogout}>Logout</Button>
                <Link to='/addtocart'>
                  <Button variant='outline-light' className='me-2'>Cart</Button>
                </Link>
              </>
            )}
          </Form>
        </Container>
      </Navbar>

      {/* Navbar for Mobile */}
      <Navbar expand='lg' className='navbar navhead d-lg-none' style={{ backgroundColor: '#222', color: 'white' }}>
        <Container>
          <Navbar.Brand className='text-white' as={Link} to='/'>ARMORY X</Navbar.Brand>
          <div className='d-flex align-items-center'>
            <Button variant='link' className='text-white' onClick={toggleSearch} style={{ textDecoration: 'none' }}>
              🔍
            </Button>
            <Link to='/addtocart'>
              <Button variant='link' className='text-white' style={{ textDecoration: 'none' }}>🛒</Button>
            </Link>
            <Button variant='link' className='text-white' onClick={() => setShowMenu(true)} style={{ textDecoration: 'none' }}>☰</Button>
          </div>
        </Container>
      </Navbar>

      {/* Search Bar for Mobile */}
      {showSearch && (
        <div className="search-bar " style={{ backgroundColor: '#222', padding: '10px' }}>
          <Form.Control
            type='search'
            className='textarea w-100'
            placeholder='Search'
            aria-label='Search'
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={closeSearch} // Close search when clicking outside
            style={{ backgroundColor: '#222', color: 'white' }} // Match the navbar background
          />
        </div>
      )}

      {/* Sidebar Menu for Mobile */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement='end' style={{ backgroundColor: '#222', color: 'white' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-white'>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-center'>
          <Nav className='flex-column'>
            <Nav.Link as={Link} to='/' className='text-white' onClick={() => setShowMenu(false)}>Home</Nav.Link>
            {categories.map((category) => (
              <Nav.Link key={category} as={Link} to={category} className='text-white' onClick={() => setShowMenu(false)}>
                {category.replace('/', '')}
              </Nav.Link>
            ))}
          </Nav>
          {!isAuthenticated ? (
            <>
              <Link to='/login'><Button variant='outline-light' className='me-2' onClick={() => setShowMenu(false)}>Login</Button></Link>
              <Link to='/signup'><Button variant='outline-light' className='me-2' onClick={() => setShowMenu(false)}>Signup</Button></Link>
            </>
          ) : (
            <>
              <Button variant='outline-light' className='me-2' onClick={handleLogout}>Logout</Button>
              <Link to='/addtocart'>
                <Button variant='outline-light' className='me-2' onClick={() => setShowMenu(false)}>Cart</Button>
              </Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <hr className='hr' />

      {!isAuthPage && (
        <Nav className='justify-content-center navbar navitem d-none d-lg-flex'>
          <Nav.Item>
            <Nav.Link as={Link} to='/' className={location.pathname === '/' ? 'active ' : ''}>Home</Nav.Link>
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