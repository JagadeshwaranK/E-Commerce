import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import '../App.css';

const LogIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showLogin, setshowLogin] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

// Retr info from ls
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // Validate 
    if (formData.email === savedEmail && formData.password === savedPassword) {
      setMessage('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => navigate('/'), 1000);
    } else {
      setMessage('Invalid email or password.');
    }
  };

  const handleClose = () => {
    setshowLogin(false);
  }

  return (
    <>
     
      {showLogin && (
        <div className='login' >
          <Container>
            <CloseButton className="float-end" onClick={handleClose} />
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control className="mb-3" type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="mb-3" type="password" placeholder="Password" required />
              </Form.Group>
              <Link to={'/'}></Link> <Button className="SubmitButton" type="submit" variant="primary">Login</Button>
              <Form.Group className="dont" controlId="formBasicCheckbox">
                <Form.Label>Don't have an account?<a href='/signup'> Signup</a></Form.Label>
              </Form.Group>
            </Form>
          </Container>
        </div>
      )}
      <div className="login">
        <Container>
          <CloseButton className="float-end" onClick={() => navigate('/')} />
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            {message && <div className={`alert ${message === 'Login successful!' ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="mb-3"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="mb-3"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button className="SubmitButton" type="submit" variant="primary">Login</Button>
            <Form.Group className="dont" controlId="formBasicCheckbox">
              <Form.Label>Don't have an account? <a href="/signup">Signup</a></Form.Label>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default LogIn;
