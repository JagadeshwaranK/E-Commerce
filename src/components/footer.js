import React from 'react';
import '../footer.css';

const Footer = () => {
  return (
    <>
      {/* Features Section */}
      <div className="container mt-5">
        <div className="overall d-flex justify-content-center flex-wrap text-center">
          {[
            { img: "/world.png", title: "Worldwide Shipping", desc: "Fast & reliable global shipping with secure handling." },
            { img: "/bestss.jpg", title: "Best Quality", desc: "Top-tier firearms from trusted manufacturers." },
            { img: "offer.png", title: "Exclusive Deals", desc: "Unlock special discounts on guns, ammo & accessories." },
            { img: "/secure.jpg", title: "Secure Payment", desc: "Safe transactions with advanced encryption." }
          ].map((item, index) => (
            <div className="overallhead mx-3" key={index}>
              <img src={item.img} className="feature-img mb-2" alt={item.title} />
              <h4 className="fw-bold text-uppercase">{item.title}</h4>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Banner */}
      <div className="sale-banner text-center py-3 text-white mt-5">
        <h2 className="fw-bold">🔥 SALE UP TO 70% OFF ON ALL GUNS & AMMO! 🔥</h2>
      </div>

      {/* Footer */}
      <footer className="footer mt-auto py-4 bg-dark text-light">
        <div className="container">
          <div className="row text-center align-items-center">
            {/* Branding Section */}
            <div className="col-lg-4 mb-3">
              <h2 className="fw-bold">AMMONATION</h2>
              <p className="mt-4">Your trusted source for premium firearms & accessories.</p>
            </div>

            {/* Social Media Links */}
            <div className="col-lg-2 mb-3">
              <h4 className="text-uppercase fw-bold">Follow Us</h4>
              <ul className="list-unstyled mt-3">
                {["Facebook", "Twitter", "Instagram"].map((platform, index) => (
                  <li key={index}>
                    <a href="javascript:void(0);" className="text-light text-decoration-none hover-effect">{platform}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-lg-6 mb-3 text-center text-lg-start">
  <h4 className="fw-bold text-uppercase">Stay Updated</h4>
  <p className="text-muted">
    Get the latest trends, offers & safety tips straight to your inbox!
  </p>
  
  <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start align-items-center">
    <input
      type="email"
      className="form-control w-50 w-md-50 mb-2 mb-md-0"
      placeholder="Enter your email"
    />
    <button className="btn btn-primary ms-md-2">Subscribe</button>
  </div>
</div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
