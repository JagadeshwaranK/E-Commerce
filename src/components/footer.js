import React from 'react';
import '../footer.css';

const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="overall d-flex justify-content-center flex-wrap text-center">
          <div className="overallhead">
            <img src="/world.png" alt="" />
            <h4>Worldwide Shipping</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="overallhead">
            <img src="/bestss.jpg" className="overimg" alt="" />
            <h4>Best Quality</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="overallhead">
            <img src="offer.png" alt="" />
            <h4>Best Offers</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="overallhead">
            <img src="/secure.jpg" alt="" />
            <h4>Secure Payment</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 className="sale text-center">SALE UP TO 70% OFF FOR ALL GUNS AND AMMO'S</h2>

      <hr />

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-4">
              <h2>AMMONATION</h2>
              <h4>The Best Quality Guns and Ammo</h4>
            </div>
            <div className="col-lg-2">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Facebook</a></li>
                <li><a href="#" className="text-dark">Twitter</a></li>
                <li><a href="#" className="text-dark">Instagram</a></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h4>Subscribe</h4>
              <div className="d-flex justify-content-center">
                <input type="email" className="form-control w-50" placeholder="Enter your email" />
                <button className="btn btn-primary ms-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
