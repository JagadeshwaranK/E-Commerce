import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';
import { Link } from 'react-router-dom';
import Header from './header';


const SignUp = () => {


  return (
    <>
    <Header/>
    <div className='signup'>
      <Container>
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
            <Link to="/login">  <Button type= "submit" variant="primary">Create Account</Button></Link>
        </Form>
      </Container>
    </div>
    </>
  );
};

export default SignUp