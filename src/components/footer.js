import React from 'react'


const Footer = () => {
  return (
    <>
<div className="container  mt-5">
<div className="overall row">
  <div className="overallhead col-lg-3">
    <img src="/world.png" alt="" />
    <h4>Worldwide Shipping</h4>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
   </div>
   <div className="overallhead col-lg-3">
    <img src="/bestss.jpg" className='overimg' alt="" />
    <h4>Best Quality</h4>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
   </div>
   <div className="overallhead col-lg-3">
    <img src="offer.png" alt="" />
    <h4>Best Offers</h4>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
   </div>
   <div className="overallhead col-lg-3">
    <img src="/secure.jpg" alt="" />
    <h4>Secure Payment</h4>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
   </div>
</div> 
</div>   
<hr />

<h2>SALE UP TO 70% OFF FOR ALL GUNS AND AMMO'S</h2>

<hr />
<footer className="footer mt-auto py-3 bg-light">
    <div className="container">
        <div className="row">
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
                <h4>Subcribe</h4>
                <input type="email" placeholder="Enter your email"/>
                <div>
                <button className="btn btn-primary">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</footer>

</>

  )
}

export default Footer