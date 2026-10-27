import React from 'react';
import ProductCategory from './ProductCategory';

const Rifle = ({ addToCart }) => (
  <ProductCategory category="rifle" title="Rifle" addToCart={addToCart} />
);

export default Rifle;
