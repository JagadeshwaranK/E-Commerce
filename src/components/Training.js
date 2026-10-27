import React from 'react';
import ProductCategory from './ProductCategory';

const Training = ({ addToCart }) => (
  <ProductCategory category="training" title="Training" addToCart={addToCart} />
);

export default Training;
