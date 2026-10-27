import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import products from '../data/products';
import Footer from './footer';

const ProductCategory = ({ category, title, addToCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});
  const searchQuery = new URLSearchParams(location.search).get('search')?.trim() || '';

  const visibleProducts = useMemo(() => {
    const categoryProducts = products.filter((product) => product.category === category);

    if (!searchQuery) {
      return categoryProducts;
    }

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [category, searchQuery]);

  const updateQuantity = (productId, change) => {
    setQuantities((currentQuantities) => ({
      ...currentQuantities,
      [productId]: Math.max((currentQuantities[productId] || 1) + change, 1),
    }));
  };

  const getQuantity = (productId) => quantities[productId] || 1;

  const handleBuyNow = (product) => {
    navigate('/Checkout', {
      state: {
        cartItems: [{ ...product, quantity: getQuantity(product.id) }],
      },
    });
  };

  return (
    <>
      <main className="container my-5">
        <h1 className="text-center fs-3 mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : `${title} Collection`}
        </h1>
        <div className="row gy-4">
          {visibleProducts.length ? (
            visibleProducts.map((product) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                <article className="card h-100 shadow-sm custom-card">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                    className="card-img-top product-image"
                    alt={product.name}
                  />
                  <div className="card-body d-flex flex-column text-center">
                    <h2 className="card-title h5">{product.name}</h2>
                    <p className="card-text fw-bold">₹{product.price.toFixed(2)}</p>
                    <p className="card-text">{product.description}</p>
                    {searchQuery && (
                      <Link
                        className="mb-3"
                        to={`/${product.category.charAt(0).toUpperCase()}${product.category.slice(1)}`}
                      >
                        Browse {product.category} products
                      </Link>
                    )}
                    <div className="d-flex justify-content-center align-items-center mt-auto">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        type="button"
                        aria-label={`Decrease ${product.name} quantity`}
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-3" aria-live="polite">
                        {getQuantity(product.id)}
                      </span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        type="button"
                        aria-label={`Increase ${product.name} quantity`}
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="d-flex flex-column flex-sm-row gap-2 mt-3">
                      <button
                        className="btn btn-outline-primary flex-fill"
                        type="button"
                        onClick={() =>
                          addToCart({ ...product, quantity: getQuantity(product.id) })
                        }
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-primary flex-fill"
                        type="button"
                        onClick={() => handleBuyNow(product)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductCategory;
