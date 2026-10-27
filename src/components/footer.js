import React from 'react';
import '../footer.css';

const Footer = () => (
  <>
    <section className="container mt-5" aria-label="Store features">
      <div className="overall d-flex justify-content-center flex-wrap text-center">
        {[
          { img: '/world.png', title: 'Shipping', desc: 'Shipping information for your order.' },
          { img: '/bestss.jpg', title: 'Product quality', desc: 'Browse the locally defined product catalog.' },
          { img: '/offer.png', title: 'Offers', desc: 'See current offers in the storefront.' },
          { img: '/secure.jpg', title: 'Checkout demo', desc: 'Checkout is a visual prototype only.' },
        ].map((item) => (
          <div className="overallhead mx-3" key={item.title}>
            <img src={item.img} className="feature-img mb-2" alt="" />
            <h2 className="h5 fw-bold text-uppercase">{item.title}</h2>
            <p className="text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <footer className="footer mt-auto py-4 bg-dark text-light">
      <div className="container text-center">
        <h2 className="h4 fw-bold">AMMONATION</h2>
        <p className="mb-0">A client-side storefront prototype.</p>
      </div>
    </footer>
  </>
);

export default Footer;
