import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../App.css';

const LogIn = () => {


return(
   
        <div className='login'>
        <Container>
            <h2>Login</h2>     
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="mb-3" type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='mb-3' type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className="SubmitButton" type= "submit" variant="primary">Login</Button>

                <Form.Group clasName="dont" controlId="formBasicCheckbox">
                    <Form.Label>Don't have accont?</Form.Label>
                 <Link to="/signup"> <Button variant="link">Sign Up</Button></Link>
                </Form.Group>
            </Form>
        </Container>
        </div>

);
};
export default LogIn