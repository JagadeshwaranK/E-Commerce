import React from 'react';
import { ListGroup, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AddToCart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleProceedToCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems); // Debugging log
    navigate('/Checkout', { state: { cartItems } }); // Pass cart items to Checkout
  };

  return (
    
    <Container className="mt-5">
      <h2>Your Cart</h2>
      <ListGroup>
        {cartItems.length === 0 ? (
          <ListGroup.Item>Your cart is empty.</ListGroup.Item>
        ) : (
          cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              <div>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${item.image}`} 
                  alt={item.name} 
                  style={{ width: '50px', height: '50px', marginRight: '10px' }} 
                />
                {item.name} (x{item.quantity}): ₹{item.price * item.quantity}
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
      {cartItems.length > 0 && (
        <div className="mt-3">
        <Link to={`/${cartItems[0].category}`}>
          <Button className="mt-2 mb-2">Add More</Button>
        </Link>
        <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
        <Button variant="success" onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
      </div>
      )}
    </Container>
  );
};

export default AddToCart;
