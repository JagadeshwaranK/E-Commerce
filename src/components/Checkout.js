import React, { useState } from 'react';
import { Button, Card, Container, Form, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems: appCartItems, setCartItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setLocalCartItems] = useState(
    () => location.state?.cartItems || appCartItems
  );
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [shipping, setShipping] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateQuantity = (id, change) => {
    setLocalCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setLocalCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const handleShippingSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  };

  const placeDemoOrder = () => {
    setCartItems([]);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  if (!cartItems.length) {
    return (
      <Container className="my-5">
        <h1 className="h2">Checkout</h1>
        <p>Your cart is empty. Add a product before checking out.</p>
        <Button onClick={() => navigate('/')}>Return to Store</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="h2 mb-4">Checkout</h1>
      <div className="row g-4">
        <section className="col-lg-7" aria-label="Checkout steps">
          <Card className="mb-3">
            <Card.Header>1. Delivery details</Card.Header>
            {step === 1 ? (
              <Card.Body>
                <Form onSubmit={handleShippingSubmit}>
                  {[
                    ['name', 'Name', 'text'],
                    ['email', 'Email', 'email'],
                    ['address', 'Address', 'text'],
                    ['city', 'City', 'text'],
                    ['state', 'State / Region', 'text'],
                    ['zip', 'Postal code', 'text'],
                  ].map(([name, label, type]) => (
                    <Form.Group className="mb-3" controlId={`shipping-${name}`} key={name}>
                      <Form.Label>{label}</Form.Label>
                      <Form.Control
                        type={type}
                        name={name}
                        value={shipping[name]}
                        onChange={(event) =>
                          setShipping((current) => ({
                            ...current,
                            [name]: event.target.value,
                          }))
                        }
                        required
                      />
                    </Form.Group>
                  ))}
                  <Button type="submit">Continue to review</Button>
                </Form>
              </Card.Body>
            ) : (
              <Card.Body>
                <p className="mb-2">
                  {shipping.name}<br />
                  {shipping.address}, {shipping.city}, {shipping.state} {shipping.zip}<br />
                  {shipping.email}
                </p>
                <Button variant="link" onClick={() => setStep(1)}>
                  Edit delivery details
                </Button>
              </Card.Body>
            )}
          </Card>

          <Card className="mb-3">
            <Card.Header>2. Review items</Card.Header>
            {step === 2 && (
              <Card.Body>
                {cartItems.map((item) => (
                  <div
                    className="d-flex justify-content-between align-items-center gap-3 mb-3"
                    key={item.id}
                  >
                    <div className="flex-grow-1">
                      <h2 className="h6 mb-1">{item.name}</h2>
                      <p className="mb-0">₹{item.price.toFixed(2)} each</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <hr />
                <p className="fw-bold">Total: ₹{total.toFixed(2)}</p>
                <p>
                  This demo does not collect payment details or create a real order.
                </p>
                <div className="d-flex gap-2">
                  <Button variant="outline-secondary" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={placeDemoOrder} disabled={!cartItems.length}>
                    Place demo order
                  </Button>
                </div>
              </Card.Body>
            )}
          </Card>
        </section>

        <aside className="col-lg-5" aria-label="Order total">
          <Card>
            <Card.Header>Order total</Card.Header>
            <Card.Body>
              {cartItems.map((item) => (
                <p className="d-flex justify-content-between" key={item.id}>
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </p>
              ))}
              <hr />
              <p className="d-flex justify-content-between fw-bold mb-0">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </p>
            </Card.Body>
          </Card>
        </aside>
      </div>

      <Modal show={showSuccessModal} onHide={closeSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Demo order complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a local UI demonstration. No payment was taken and no order was sent.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeSuccessModal}>Return to Store</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Checkout;
