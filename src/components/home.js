import React, { useEffect, useState } from 'react';
import Header from './header';
import '../home.css';
import products from '../components/products'; 
import Footer from './footer';

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

      <div className='mt-5 logo'>
    <h2>Our Collections</h2>
    <div className="marquee mt-4 mb-4">
        <div className="marquee-content">
            <img src="/21.jpg" alt="1" />
            <img src="/22.jpg" alt="2" />
            <img src="/23.jpg" alt="3" />
            <img src="/24.jpg" alt="4" />
            <img src="/25.jpg" alt="5" />
            <img src="/26.jpg" alt="6" />
            <img src="/27.jpg" alt="7" />
            <img src="/28.jpg" alt="8" />
            <img src="/29.jpg" alt="9" />
            <img src="/30.jpg" alt="10" />
            <img src="/31.jpg" alt="11" />
            <img src="/32.jpg" alt="12" />
            <img src="/22.jpg" alt="2" />
        </div>
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

      {/* Offer Content */}
      <div 
    className="image-container"
    style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/2.jpg)`,
    }}
>
    <div className="content-box"></div> {/* Transparent overlay */}
    <div className="content">
        <h4>Limited Time Offer</h4>
        <h3>Special Edition</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <h4>Buy This T-shirt At 20% Discount, Use Code OFF20</h4>
        <button>SHOP NOW</button>
    </div>
</div>
<Footer/>


    </>
  );
};

export default Home;