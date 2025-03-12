import React, { useEffect, useState } from 'react';
import Header from './header';
import '../home.css';
import products from '../components/products'; 

const Home = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const radio = document.getElementById(`radio${counter}`);
    if (radio) {
      radio.checked = true;
    }
  }, [counter]);

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <>
      <Header />
      <div className='slider'>
        <div className="slides">
          <input type="radio" name='radio-btn' id="radio1" />
          <input type="radio" name='radio-btn' id="radio2" />
          <input type="radio" name='radio-btn' id="radio3" />
          <input type="radio" name='radio-btn' id="radio4" />

          <div className="slide first">
            <img src="/1.jpeg" alt="1" />
          </div>
          <div className="slide second">
            <img src="/2.jpg" alt="2" />
          </div>
          <div className="slide third">
            <img src="/3.jpg" alt="3" />
          </div>
          <div className="slide four">
            <img src="/4.jpg" alt="4" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
      <div className="producthead">
          <h2>Our Featured Products</h2>
          <hr />
      </div>
      <div className='products'>
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;