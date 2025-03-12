import React, { useState } from 'react';
import products from '../data/products';

const Rifle = () => {
  const rifle = products.filter(item => item.category === 'rifle');
  
  const [quantities, setQuantities] = useState(
    rifle.reduce((acc, product) => {
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

  return (
    <div className="row">
      {rifle.map((product) => (
        <div className="col-md-4 mb-5" key={product.id}>
        <div className="card h-100 custom-card">
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
            <button className="btn btn-outline-primary">Add to Cart</button>
            <button className="btn btn-primary">Buy</button>
          </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default Rifle;