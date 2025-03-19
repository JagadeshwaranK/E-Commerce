// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import Home from './components/home';
import Rifle from './components/Rifle';
import Handgun from './components/Handgun';
import Tactical from './components/Tactical';
import Revolver from './components/Revolver';
import Shotgun from './components/Shotgun';
import Specialty from './components/Specialty';
import Training from './components/Training';
import SignUp from './components/signup';
import LogIn from './components/login';
import Checkout from './components/Checkout';
import AddToCart from './components/AddToCart';
import Header from './components/header';

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
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Handgun" element={<Handgun addToCart={addToCart} />} />
        <Route path="/Rifle" element={<Rifle addToCart={addToCart} />} />
        <Route path="/Shotgun" element={<Shotgun addToCart={addToCart} />} />
        <Route path="/Specialty" element={<Specialty addToCart={addToCart} />} />
        <Route path="/Revolver" element={<Revolver addToCart={addToCart} />} />
        <Route path="/Tactical" element={<Tactical addToCart={addToCart} />} />
        <Route path="/Training" element={<Training addToCart={addToCart} />} />
        <Route path="/Checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/AddToCart" element={<AddToCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
=======
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home key={window.location.search} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Handgun" element={<Handgun addToCart={addToCart} />} />
          <Route path="/Rifle" element={<Rifle addToCart={addToCart} />} />
          <Route path="/Shotgun" element={<Shotgun addToCart={addToCart} />} />
          <Route path="/Specialty" element={<Specialty addToCart={addToCart} />} />
          <Route path="/Revolver" element={<Revolver addToCart={addToCart} />} />
          <Route path="/Tactical" element={<Tactical addToCart={addToCart} />} />
          <Route path="/Training" element={<Training addToCart={addToCart} />} />
          <Route path="/Checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/AddToCart" element={<AddToCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
        </BrowserRouter>    

  );
};

export default App;