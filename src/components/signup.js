import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';


const SignUp = () => {


  return (
    <div className='signup'>
      <Container>
        <h2>Signup</h2>
        <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control className="mb-3" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className='mb-3' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control className='mb-3' type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button type= "submit" variant="primary"  >Create Account</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignUp