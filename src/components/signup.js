import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import '../App.css';
import Header from './header';

const SignUp = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowSignUp(false);
    navigate('/');
  };

  return (
    <>
      <Header />
      {showSignUp && (
        <div className='signup'>
          <Container>
            <CloseButton className="float-end" onClick={handleClose} />
            <h2>Signup</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control className="mb-3" type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='mb-3' type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control className='mb-3' type="password" placeholder="Confirm Password" required />
              </Form.Group>
              <Link to="/login"><Button type="submit" variant="primary">Create Account</Button></Link>
            </Form>
          </Container>
        </div>
      )}
    </>
  );
};

export default SignUp;
