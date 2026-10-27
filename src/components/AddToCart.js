import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AddToCart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate('/Checkout', { state: { cartItems } });
  };

  return (
    <Container className="my-5">
      <h1 className="h2">Your Cart</h1>
      <ListGroup>
        {cartItems.length === 0 ? (
          <ListGroup.Item>Your cart is empty.</ListGroup.Item>
        ) : (
          cartItems.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center gap-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                  alt=""
                  style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                />
                <span>
                  {item.name} (x{item.quantity}): ₹
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <Button
                variant="outline-danger"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
      {cartItems.length > 0 && (
        <div className="mt-3">
          <Link to={`/${cartItems[0].category.charAt(0).toUpperCase()}${cartItems[0].category.slice(1)}`}>
            <Button className="mb-2">Add More</Button>
          </Link>
          <h2 className="h4">Total: ₹{totalAmount.toFixed(2)}</h2>
          <Button variant="success" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      )}
    </Container>
  );
};

export default AddToCart;
