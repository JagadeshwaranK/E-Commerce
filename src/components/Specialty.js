import React from 'react';
import ProductCategory from './ProductCategory';

const Specialty = ({ addToCart }) => (
  <ProductCategory category="specialty" title="Specialty" addToCart={addToCart} />
);

export default Specialty;
