// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rifle from './components/Rifle';
import Handgun from './components/Handgun';
import Tactical from './components/Tactical';
import Revolver from './components/Revolver';
import Shotgun from './components/Shotgun';
import Specialty from './components/Specialty';
import Training from './components/Training';
import SignUp from './components/signup';
import LogIn from './components/login';
import Home from './components/home';
import Checkout from './components/Checkout';
import AddToCart from './components/AddToCart'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity: product.quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
            <Link className="nav-link" to="/Home">Home</Link>          
              <Link className="nav-link" to="/Handgun">Handgun</Link>
              <Link className="nav-link" to="/Rifle">Rifle</Link>
              <Link className="nav-link" to="/Shotgun">Shotgun</Link>
              <Link className="nav-link" to="/Specialty">Specialty</Link>
              <Link className="nav-link" to="/Revolver">Revolver</Link>
              <Link className="nav-link" to="/Tactical">Tactical</Link>
              <Link className="nav-link" to="/Training">Training</Link>         
            </div>
          </div>
        </div>
      </nav>  

      <div className="container mt-4">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Handgun" element={<Handgun addToCart={addToCart} />} />
          <Route path="/Rifle" element={<Rifle addToCart={addToCart} />} />
          <Route path="/Shotgun" element={<Shotgun addToCart={addToCart}/>} />
          <Route path="/Specialty" element={<Specialty addToCart={addToCart} />} />
          <Route path="/Revolver" element={<Revolver addToCart={addToCart} />} />
          <Route path="/Tactical" element={<Tactical addToCart={addToCart}/>} />
          <Route path="/Training" element={<Training addToCart={addToCart}/>} />
          <Route path="/Checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/AddToCart" element={<AddToCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;