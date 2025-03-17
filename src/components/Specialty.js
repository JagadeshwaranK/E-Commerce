import React, { useState } from 'react';
import products from '../data/products';
import Header from './header';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const Specialty = ({ addToCart }) => {
    const navigate = useNavigate();
  const specialty = products.filter(item => item.category === 'specialty');
  
  const [quantities, setQuantities] = useState(
    specialty.reduce((acc, product) => {
      acc[product.id] = 1; 
      return acc;
    }, {})
  );

  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1),
    }));
  };

    const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantities[product.id] });
    navigate('/AddToCart'); // Navigate to Cart after adding to cart
  };

  // const handleBuyClick = (product) => {
  //   addToCart({ ...product, quantity: quantities[product.id] });
  //   navigate('/Checkout'); // Navigate to Checkout after adding to cart
  // };
  //   const handleAddToCart = (product) => {
  //     navigate('/AddToCart', { state: { product: { ...product, quantity: quantities[product.id] } } });
  //   };
    const handleBuyClick = (product) => {
      navigate('/Checkout', { state: { product: { ...product, quantity: quantities[product.id] } } });
  };

  return (
    <>
    <Header/>
    <h1>Specialty</h1>
    <div className="row">
      {specialty.map((product) => (
        <div className="col-md-4 mb-5" key={product.id}>
        <div className="card h-10 custom-card">
          <img 
            src={`${process.env.PUBLIC_URL}/images/${product.image}`} 
            className="card-img-top" 
            alt={product.name} 
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text price">₹{product.price}</p>
            <p className="card-text">{product.description}</p>

          <div className="d-flex align-items-center mt-3">
            <button className="btn btn-secondary btn-sm me-2 mt-2 align-self-start" onClick={() => decrement(product.id)}>-</button> 
            <span className="text-center mx-2 ">{quantities[product.id]}</span>
            <button className="btn btn-secondary btn-sm me-2 mt-2 align-self-start" onClick={() => increment(product.id)}>+</button>
          </div>
          <div className="button-group">
            <button className="btn btn-outline-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button className="btn btn-primary" onClick={() => handleBuyClick(product)}>Buy</button>
          </div>
          </div>
        </div>
      </div>
    ))}
    </div>
    <Footer/>
    </>
  );
};

export default Specialty;
