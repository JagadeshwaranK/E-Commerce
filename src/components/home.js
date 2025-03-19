import React, { useEffect, useState } from "react";

import Header from "./header";

import "../home.css";
import Footer from "./footer";
import products from "../data/products";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [counter , setCounter] = useState(0);

  const location = useLocation(); 
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    if (searchQuery) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]); 
    }
  }, [searchQuery]);

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

  return (
    <>

      <Header />


      {searchQuery ? (
        // Show search results with only header and footer
        <div className="products">
          <h2>Search Results for "{searchQuery}"</h2>
          <hr />
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div key={product.id} className="product">
                <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <Link to={`/${product.category}`}>
                  <button>Show More</button>
                </Link>
              </div>
            ))
          ) : (
            <h3>No products found</h3>
          )}
        </div>
      ) : (
        
        <>
          <div className='slider'>
            <div className="slides">
              <input type="radio" name='radio-btn' id="radio1" />
              <input type="radio" name='radio-btn' id="radio2" />
              <input type="radio" name='radio-btn' id="radio3" />
              <input type="radio" name='radio-btn' id="radio4" />

              <div className="slide first"><img src="/112.jpeg" alt="1" /></div>
              <div className="slide second"><img src="/113.jpeg" alt="2" /></div>
              <div className="slide third"><img src="/114.jpeg" alt="3" /></div>
              <div className="slide four"><img src="/115.jpeg" alt="4" /></div>

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
            {products.filter(item => item.category === 'special').map((product) => (
              <div key={product.id} className="product">
                <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <Link to={'/shotgun'}> <button>Show More</button></Link>
              </div>
            ))}
          </div>

          {/* Offer Section */}
          <div 
            className="image-container"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/116.jpeg)`,
            }}
          >
            <div className="content-box"></div>
            <div className="content">
              <h4>Limited Time Offer</h4>
              <h3>Special Edition</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <h4>Buy This Guns At 20% Discount, Use Code OFF20</h4>
              <button>SHOP NOW</button>
            </div>
          </div>

          {/* hover  */}

          
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
